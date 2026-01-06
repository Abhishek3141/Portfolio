"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageSquare, X, Send, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
    role: 'user' | 'assistant'
    content: string
    sources?: string[]
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Hi! I'm Abhishek's digital twin. Ask me anything about his work or experience." }
    ])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const handleSend = async () => {
        if (!input.trim() || loading) return

        const userMsg = input
        setInput("")
        setMessages(prev => [...prev, { role: 'user', content: userMsg }])
        setLoading(true)

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg })
            })

            const data = await res.json()

            if (data.reply) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.reply, sources: data.sources }])
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error." }])
            }

        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Network error. Please try again." }])
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
            {isOpen && (
                <Card className="w-[350px] h-[500px] flex flex-col mb-4 shadow-xl border-primary/20 animate-in fade-in slide-in-from-bottom-10 duration-300">
                    <CardHeader className="py-3 px-4 border-b flex flex-row items-center justify-between bg-primary/5">
                        <div className="flex items-center gap-2">
                            <Bot className="h-5 w-5 text-primary" />
                            <CardTitle className="text-sm font-medium">Ask Abhishek's AI</CardTitle>
                        </div>
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </CardHeader>

                    <CardContent className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                        {messages.map((m, i) => (
                            <div key={i} className={cn("flex flex-col gap-1 max-w-[85%]", m.role === 'user' ? "ml-auto items-end" : "items-start")}>
                                <div className={cn(
                                    "px-3 py-2 rounded-2xl text-sm",
                                    m.role === 'user'
                                        ? "bg-primary text-primary-foreground rounded-tr-sm"
                                        : "bg-muted text-foreground rounded-tl-sm"
                                )}>
                                    {m.content}
                                </div>
                                {m.sources && m.sources.length > 0 && (
                                    <div className="text-[10px] text-muted-foreground flex gap-1">
                                        <span>Source:</span>
                                        {m.sources.map(s => <span key={s} className="underline">{s}</span>)}
                                    </div>
                                )}
                            </div>
                        ))}
                        {loading && (
                            <div className="flex items-start gap-2 text-muted-foreground text-sm">
                                <Bot className="h-4 w-4" />
                                <span className="animate-pulse">Thinking...</span>
                            </div>
                        )}
                    </CardContent>

                    <CardFooter className="p-3 border-t">
                        <form onSubmit={(e) => { e.preventDefault(); handleSend() }} className="flex w-full items-center gap-2">
                            <Input
                                placeholder="Ask about my projects..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 h-9"
                            />
                            <Button type="submit" size="icon" className="h-9 w-9" disabled={loading}>
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}

            <Button
                onClick={() => setIsOpen(!isOpen)}
                className="h-12 w-12 rounded-full shadow-lg"
                size="icon"
            >
                <MessageSquare className="h-6 w-6" />
            </Button>
        </div>
    )
}
