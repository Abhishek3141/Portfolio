import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Simple In-Memory Vector Store
let VECTOR_STORE: { text: string; source: string; embedding: number[] }[] = [];

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'mistral';
// Note: For embeddings we usually need an embedding model, but some chat models support it or we use a specific one
const OLLAMA_EMBED_MODEL = "all-minilm"; // User should pull this: `ollama pull all-minilm`

async function generateEmbedding(text: string) {
    try {
        const response = await fetch(`${OLLAMA_BASE_URL}/api/embed`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: OLLAMA_EMBED_MODEL,
                input: text
            })
        });

        if (!response.ok) {
            // Fallback or retry? If 404, maybe model missing.
            // Try falling back to the chat model if it supports it, or error out
            console.error(`Ollama Embed Error: ${response.statusText}`);
            return null;
        }

        const data = await response.json();
        // /api/embed returns { embeddings: [[...]] } for batch
        if (data.embeddings && data.embeddings.length > 0) {
            return data.embeddings[0]; // Return the vector
        }
        return null;
    } catch (e) {
        console.error("Embedding fetch failed:", e);
        return null;
    }
}

function cosineSimilarity(a: number[], b: number[]) {
    if (!a || !b || a.length !== b.length) return 0;
    let dotProduct = 0;
    let normA = 0;
    let normB = 0;
    for (let i = 0; i < a.length; i++) {
        dotProduct += a[i] * b[i];
        normA += a[i] * a[i];
        normB += b[i] * b[i];
    }
    return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

async function initializeStore() {
    if (VECTOR_STORE.length > 0) return;

    const docsDir = path.join(process.cwd(), 'rag_docs');
    if (!fs.existsSync(docsDir)) return;

    const files = fs.readdirSync(docsDir);
    for (const file of files) {
        if (file.endsWith('.md')) {
            const content = fs.readFileSync(path.join(docsDir, file), 'utf-8');
            // Better chunking for headers and paragraphs
            // 1. Split by double newlines (paragraphs)
            const paragraphChunks = content.split(/\r?\n\s*\r?\n/);

            const chunks = paragraphChunks.filter(c => c.trim().length > 10).map(c => {
                // Prepend context if it's a header? For now just raw chunks.
                return c.trim();
            });

            for (const chunk of chunks) {
                // We do this lazily or once on startup. 
                // Note: Doing this properly requires pulling "all-minilm" in Ollama
                const embedding = await generateEmbedding(chunk);
                if (embedding) {
                    VECTOR_STORE.push({
                        text: chunk,
                        source: file,
                        embedding: embedding
                    });
                }
            }
        }
    }
    console.log(`[RAG] Initialized store with ${VECTOR_STORE.length} chunks.`);
}

export async function POST(req: NextRequest) {
    try {
        const { message } = await req.json();
        if (!message) return NextResponse.json({ error: 'Message required' }, { status: 400 });

        await initializeStore();

        if (VECTOR_STORE.length === 0) {
            // Fallback if no embeddings (e.g. ollama model missing)
            return NextResponse.json({
                reply: "I'm having trouble accessing my memory right now (Ollama embedding model might be missing). Please ensure 'all-minilm' is pulled.",
                sources: []
            });
        }

        // 1. Embed query
        const queryEmbedding = await generateEmbedding(message);
        if (!queryEmbedding) {
            return NextResponse.json({
                reply: "Error generating query embedding. Is Ollama running?",
                sources: []
            });
        }

        // 2. Retrieve Top K
        const scored = VECTOR_STORE.map(doc => ({
            ...doc,
            score: cosineSimilarity(queryEmbedding, doc.embedding)
        }));

        // Sort descending
        scored.sort((a, b) => b.score - a.score);

        // Debug Score Logging
        console.log("Top 3 Scores:", scored.slice(0, 3).map(d => ({ score: d.score, text: d.text.substring(0, 50) })));

        const topK = scored.slice(0, 5).filter(d => d.score > 0.15); // Lower threshold to catch more context

        // 3. Construct Prompt
        const contextText = topK.map(d => d.text).join('\n---\n');
        const sources = Array.from(new Set(topK.map(d => d.source)));

        const systemPrompt = `You are Abhishek's AI portfolio assistant.
    Use the provided CONTEXT to answer the user's question briefly and accurately.
    If the answer is unknown, state that.
    
    CONTEXT:
    ${contextText}
    `;

        // 4. Call Ollama for Chat
        try {
            const response = await fetch(`${OLLAMA_BASE_URL}/api/generate`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: OLLAMA_MODEL,
                    prompt: `${systemPrompt}\n\nUSER: ${message}\nASSISTANT:`,
                    stream: false
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Ollama Chat Error: ${response.status} ${response.statusText} - ${errorText}`);
                throw new Error(`Ollama unusable: ${response.statusText}`);
            }

            const data = await response.json();
            return NextResponse.json({
                reply: data.response,
                sources: sources
            });

        } catch (e) {
            // Fallback Mock Mode
            console.warn("Ollama failed, using mock response", e);
            return NextResponse.json({
                reply: "I am unable to reach my local brain (Ollama) right now, but based on the site content, Abhishek is a Robotics Engineer and Founder of Cogent. Please try again later or browse the site!",
                sources: ['System Fallback']
            });
        }

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
