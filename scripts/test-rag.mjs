import fs from 'fs';
import path from 'path';

// CONFIG
const OLLAMA_BASE_URL = 'http://localhost:11434';
const OLLAMA_EMBED_MODEL = "all-minilm";
const DOCS_DIR = './rag_docs';

async function generateEmbedding(text) {
    try {
        console.log(`Generating embedding for: "${text.substring(0, 30)}..."`);
        const response = await fetch(`${OLLAMA_BASE_URL}/api/embed`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: OLLAMA_EMBED_MODEL,
                input: text
            })
        });

        if (!response.ok) {
            console.error(`Ollama Embed Error: ${response.status} ${response.statusText}`);
            const txt = await response.text();
            console.error(txt);
            return null;
        }

        const data = await response.json();
        return data.embeddings ? data.embeddings[0] : null;
    } catch (e) {
        console.error("Embedding fetch failed:", e.message);
        return null;
    }
}

function cosineSimilarity(a, b) {
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

(async () => {
    console.log("--- STARTING RAG TEST ---");

    // 1. Read and Chunk
    if (!fs.existsSync(DOCS_DIR)) {
        console.error("Docs dir not found!");
        process.exit(1);
    }

    const store = [];
    const files = fs.readdirSync(DOCS_DIR);
    console.log(`Found files: ${files}`);

    for (const file of files) {
        if (!file.endsWith('.md')) continue;
        const content = fs.readFileSync(path.join(DOCS_DIR, file), 'utf-8');

        // TEST SPLIT LOGIC
        // Using the same regex as the app
        const chunks = content.split(/\r?\n\s*\r?\n/).filter(c => c.trim().length > 10).map(c => c.trim());

        console.log(`File: ${file} | Chunks found: ${chunks.length}`);
        if (chunks.length === 1) {
            console.warn("WARNING: Only 1 chunk found! Regex might be failing.");
            console.log("Sample content preview:", content.substring(0, 100).replace(/\n/g, '\\n'));
        }

        for (const [i, chunk] of chunks.entries()) {
            console.log(`  Processing Chunk ${i + 1}/${chunks.length} (${chunk.length} chars)`);
            const embedding = await generateEmbedding(chunk);
            if (embedding) {
                store.push({ text: chunk, embedding });
            } else {
                console.error(`  FAILED to embed chunk ${i + 1}`);
            }
        }
    }

    console.log(`\nStore initialized with ${store.length} chunks.`);

    // 2. Test Query
    const query = "What is cogent?";
    console.log(`\nTesting Query: "${query}"`);
    const queryEmbed = await generateEmbedding(query);

    if (!queryEmbed) {
        console.error("Failed to embed query.");
        process.exit(1);
    }

    // 3. Score
    const scored = store.map(doc => ({
        text: doc.text,
        score: cosineSimilarity(queryEmbed, doc.embedding)
    }));

    scored.sort((a, b) => b.score - a.score);

    console.log("\n--- Retrieval Results ---");
    scored.slice(0, 10).forEach((d, i) => {
        console.log(`Rank ${i + 1}: Score ${d.score.toFixed(4)}`);
        console.log(`Preview: ${d.text.substring(0, 100).replace(/\n/g, ' ')}...`);
        if (d.text.toLowerCase().includes("cogent")) {
            console.log(">>> THIS IS A COGENT CHUNK <<<");
        }
        console.log("---");
    });

})();
