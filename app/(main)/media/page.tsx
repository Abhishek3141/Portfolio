"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Newspaper, ExternalLink, Quote, Sparkles } from "lucide-react"
import Link from "next/link"

export default function MediaPage() {
    // Load Instagram embed script
    useEffect(() => {
        const script = document.createElement('script')
        script.src = "//www.instagram.com/embed.js"
        script.async = true
        document.body.appendChild(script)

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    return (
        <div className="space-y-6 pb-16">
            {/* Header */}
            <div className="text-center space-y-2 py-4">
                <h1 className="text-3xl font-bold">Media & Press</h1>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto">

                {/* LEFT: Article Preview Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-gradient-to-br from-primary/5 via-card to-primary/10 border-2 border-primary/30 rounded-2xl overflow-hidden shadow-xl"
                >
                    {/* Header */}
                    <div className="p-6 border-b border-primary/20 bg-gradient-to-r from-primary/15 to-transparent">
                        <div className="flex items-center gap-2 mb-3">
                            <Newspaper className="h-6 w-6 text-primary" />
                            <span className="text-sm font-bold text-primary uppercase tracking-wider">Featured Article</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-1">Stay Chill, Stay Nerdy</h2>
                        <p className="text-sm text-muted-foreground">LaunchX Command Post Interview</p>
                    </div>

                    {/* Article Preview Content */}
                    <div className="p-6 space-y-6">
                        {/* Quote Block */}
                        <div className="relative pl-6 border-l-4 border-primary/50">
                            <Quote className="absolute -left-3 -top-2 h-6 w-6 text-primary/30 bg-card" />
                            <p className="text-lg italic text-muted-foreground leading-relaxed">
                                "Abhishek on his LaunchX startup Cogent, obsessive ambition, and balancing school and startup life"
                            </p>
                        </div>

                        {/* Key Topics */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                                <Sparkles className="h-4 w-4" />
                                Topics Covered
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {["Building Cogent", "Entrepreneurship", "LaunchX Journey", "School-Startup Balance", "Ambition & Drive"].map((topic) => (
                                    <span key={topic} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-base text-muted-foreground leading-relaxed">
                            An in-depth interview exploring the journey of building a startup while navigating high school, the LaunchX entrepreneurship experience, and the mindset behind obsessive ambition.
                        </p>

                        {/* CTA Button */}
                        <Link
                            href="https://www.launchx.com/command-post/articles/stay-chill-stay-nerdy-abhishek-ramshanker-on-his-launchx-startup-cogent-obsessive-ambition-and-balancing-school-and-startup-life"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Read Full Article <ExternalLink className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>

                {/* RIGHT: Podcasts + Instagram */}
                <div className="space-y-4">

                    {/* Apple Podcasts - Fueling Tomorrow's Entrepreneurs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-card border border-border rounded-xl p-4 shadow-md"
                    >
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <span>🎙️</span>
                            <span>Fueling Tomorrow's Entrepreneurs</span>
                        </h3>
                        <iframe
                            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                            frameBorder="0"
                            height="175"
                            style={{ width: '100%', overflow: 'hidden', borderRadius: '10px' }}
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                            src="https://embed.podcasts.apple.com/us/podcast/stay-chill-stay-nerdy-abhishek-on-his-launchx-startup/id1773055733?i=1000684480978&theme=auto"
                        />
                    </motion.div>

                    {/* Spotify 1 - The Innovator's Playbook */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-card border border-border rounded-xl p-4 shadow-md"
                    >
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <span>🎧</span>
                            <span>The Innovator's Playbook</span>
                        </h3>
                        <iframe
                            style={{ borderRadius: '10px' }}
                            src="https://open.spotify.com/embed/episode/5H3sDoMZM2DxOLvQQTTxGV?utm_source=generator"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Spotify 2 - The Innovator's Playbook (Part 2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-card border border-border rounded-xl p-4 shadow-md"
                    >
                        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                            <span>🎧</span>
                            <span>Fueling Tomorrow's Entrepreneurs (Part 2)</span>
                        </h3>
                        <iframe
                            style={{ borderRadius: '10px' }}
                            src="https://open.spotify.com/embed/episode/4wrE3MYBdtQifX0MmJ1blS?utm_source=generator"
                            width="100%"
                            height="152"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Instagram Post */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-card border border-border rounded-xl p-4 shadow-md flex justify-center"
                    >
                        <blockquote
                            className="instagram-media"
                            data-instgrm-captioned
                            data-instgrm-permalink="https://www.instagram.com/reel/DJrKquKOUl7/?utm_source=ig_embed&utm_campaign=loading"
                            data-instgrm-version="14"
                            style={{
                                background: '#FFF',
                                border: 0,
                                borderRadius: '3px',
                                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                                margin: '1px',
                                maxWidth: '540px',
                                minWidth: '326px',
                                padding: 0,
                                width: '99.375%'
                            }}
                        />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
