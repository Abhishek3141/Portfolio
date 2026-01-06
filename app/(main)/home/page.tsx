"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Trophy, Star, Activity, Code, Cpu, Rocket, ChevronDown, ChevronUp, Github, Linkedin } from "lucide-react"
import { PROJECTS_DATA } from "@/lib/data"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Image from "next/image"

export default function HomePage() {
    const featuredProjects = PROJECTS_DATA.filter(p => ['cogent', 'ftc-robotics', 'athlynk'].includes(p.slug))
    const [expandedProject, setExpandedProject] = useState<string | null>(null)

    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12 md:py-20">
                <div className="flex flex-col items-start gap-6 flex-1 order-2 lg:order-1">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl max-w-4xl">
                        Building <span className="text-primary">Intelligent Systems</span> for the Real World.
                    </h1>
                    <p className="max-w-[700px] text-xl text-muted-foreground leading-relaxed">
                        I'm Abhishek Krishnan—a student, founder, and robotics engineer. I don't just write code; I build full-stack platforms, autonomous robots, and AI tools that solve tangible problems.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2">
                        <Button asChild size="lg" className="rounded-full shadow-lg h-12 px-8 text-lg">
                            <Link href="/projects">
                                Explore Work <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-8 text-lg">
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </div>
                    {/* Social Links */}
                    <div className="flex items-center gap-4 pt-4">
                        <Link
                            href="https://github.com/Abhishek3141"
                            target="_blank"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="h-5 w-5" />
                            <span className="text-sm font-medium">GitHub</span>
                        </Link>
                        <span className="text-muted-foreground">•</span>
                        <Link
                            href="https://www.linkedin.com/in/abhishek-krishnan3141"
                            target="_blank"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="h-5 w-5" />
                            <span className="text-sm font-medium">LinkedIn</span>
                        </Link>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] shrink-0 order-1 lg:order-2"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl -rotate-6 scale-95" />
                    <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl rotate-3 scale-95" />
                    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border shadow-2xl">
                        <Image
                            src="/Portfolio Pic.png"
                            alt="Abhishek Krishnan"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            priority
                        />
                    </div>
                </motion.div>
            </section>

            {/* Values Section */}
            <section className="space-y-8">
                <div className="flex items-center gap-2">
                    <div className="h-px bg-border flex-1" />
                    <h2 className="text-lg font-semibold text-muted-foreground uppercase tracking-wider">Core Values</h2>
                    <div className="h-px bg-border flex-1" />
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="p-6 rounded-2xl bg-card border shadow-sm group hover:shadow-md transition-all">
                        <div className="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Rocket className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Entrepreneurship</h3>
                        <p className="text-muted-foreground">Founding Cogent and leading teams to turn ambitious ideas into viable, impactful products.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-card border shadow-sm group hover:shadow-md transition-all">
                        <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Cpu className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Engineering</h3>
                        <p className="text-muted-foreground">From autonomous FTC robots to ESP32 wearables, I bridge the gap between software and hardware.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-card border shadow-sm group hover:shadow-md transition-all">
                        <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Code className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Innovation</h3>
                        <p className="text-muted-foreground">Constantly exploring the edge of AI and Space Tech (AstroPi) to solve new challenges.</p>
                    </div>
                </div>
            </section>

            {/* Featured Projects Showcase */}
            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight">Select Works</h2>
                    <Link href="/projects" className="text-sm font-medium text-primary hover:underline">
                        View Archive
                    </Link>
                </div>

                <div className="space-y-6">
                    {featuredProjects.map((project) => (
                        <div key={project.slug} className="group rounded-2xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all">
                            <div
                                className="p-6 md:p-8 cursor-pointer"
                                onClick={() => setExpandedProject(expandedProject === project.slug ? null : project.slug)}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-2xl font-bold">{project.title}</h3>
                                            {project.slug === 'ftc-robotics' && <span className="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold">Record Holder</span>}
                                            {project.slug === 'cogent' && <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">LaunchX</span>}
                                        </div>
                                        <p className="text-lg text-muted-foreground">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-2 rounded-full hover:bg-muted transition-colors">
                                        {expandedProject === project.slug ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                    </div>
                                </div>
                            </div>

                            <AnimatePresence>
                                {expandedProject === project.slug && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="border-t bg-muted/30"
                                    >
                                        <div className="p-6 md:p-8 pt-4 space-y-4">
                                            <p className="leading-relaxed">{project.fullDescription}</p>

                                            {project.highlights && (
                                                <div className="grid sm:grid-cols-2 gap-3">
                                                    {project.highlights.map((h, i) => (
                                                        <div key={i} className="flex items-center gap-2 text-sm font-medium">
                                                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                            {h}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="pt-4">
                                                <Button asChild size="sm">
                                                    <Link href={`/projects/${project.slug}`}>
                                                        View Full Interactive Case Study <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
