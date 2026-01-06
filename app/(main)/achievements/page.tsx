"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ACHIEVEMENTS_DATA } from "@/lib/data"
import { Trophy, Award, Star, ExternalLink, ImageIcon, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function AchievementsPage() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && selectedIndex !== null) {
                setSelectedIndex(null)
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedIndex])

    return (
        <div className="space-y-12 pb-16">
            {/* Header */}
            <div className="text-center space-y-4 py-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border border-yellow-500/30 mb-4"
                >
                    <Trophy className="h-10 w-10 text-yellow-500" />
                </motion.div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600">
                    Achievements
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A collection of milestones, records, and recognition
                </p>
            </div>

            {/* Trophy Podium Layout */}
            <div className="max-w-5xl mx-auto space-y-6">
                {ACHIEVEMENTS_DATA.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => setSelectedIndex(index)}
                        className="group relative bg-card border border-border hover:border-yellow-500/50 rounded-xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
                    >
                        {/* Gold accent on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:via-yellow-500/10 group-hover:to-yellow-500/5 rounded-xl transition-all duration-500" />

                        <div className="relative flex flex-col md:flex-row gap-6 items-start">
                            {/* Icon/Badge */}
                            <div className="shrink-0">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border border-yellow-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Award className="h-8 w-8 md:h-10 md:w-10 text-yellow-500" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-3">
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-yellow-500 transition-colors">
                                            {achievement.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Star className="h-4 w-4 text-yellow-500" />
                                            <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                                                {achievement.organization}
                                            </span>
                                            <span className="text-muted-foreground">•</span>
                                            <span className="text-muted-foreground">{achievement.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    {achievement.description}
                                </p>

                                {/* View Details CTA */}
                                <div className="flex items-center gap-2 text-sm font-medium text-yellow-600 dark:text-yellow-400 group-hover:gap-3 transition-all">
                                    <span>View Details</span>
                                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-3xl bg-card border border-yellow-500/30 rounded-2xl shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col md:flex-row max-h-[85vh]">
                                {/* Left: Image/Visual */}
                                <div className="md:w-2/5 bg-muted border-b md:border-b-0 md:border-r border-border relative min-h-[200px]">
                                    {ACHIEVEMENTS_DATA[selectedIndex].image ? (
                                        ACHIEVEMENTS_DATA[selectedIndex].image === "placeholder" ? (
                                            <div className="absolute inset-0 flex items-center justify-center flex-col text-muted-foreground p-6 text-center">
                                                <ImageIcon className="h-16 w-16 mb-3 opacity-50" />
                                                <span className="text-sm font-medium">Image Coming Soon</span>
                                            </div>
                                        ) : (
                                            <div className="absolute inset-0">
                                                <img
                                                    src={ACHIEVEMENTS_DATA[selectedIndex].image!}
                                                    alt={ACHIEVEMENTS_DATA[selectedIndex].title}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        )
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-600/10 flex items-center justify-center">
                                            <Trophy className="h-24 w-24 text-yellow-500/30" />
                                        </div>
                                    )}
                                </div>

                                {/* Right: Content */}
                                <div className="p-8 md:w-3/5 flex flex-col overflow-y-auto">
                                    <div className="space-y-6">
                                        {/* Header */}
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Award className="h-5 w-5 text-yellow-500" />
                                                <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-wider">
                                                    {ACHIEVEMENTS_DATA[selectedIndex].organization}
                                                </span>
                                            </div>
                                            <h2 className="text-3xl font-extrabold mb-2">
                                                {ACHIEVEMENTS_DATA[selectedIndex].title}
                                            </h2>
                                            <p className="text-sm text-muted-foreground">
                                                {ACHIEVEMENTS_DATA[selectedIndex].date}
                                            </p>
                                        </div>

                                        {/* Description */}
                                        <div className="prose prose-sm dark:prose-invert max-w-none">
                                            <p className="text-base leading-relaxed">
                                                {ACHIEVEMENTS_DATA[selectedIndex].description}
                                            </p>
                                        </div>

                                        {/* Link */}
                                        {ACHIEVEMENTS_DATA[selectedIndex].link && (
                                            <div className="pt-4 border-t border-border">
                                                <Link
                                                    href={ACHIEVEMENTS_DATA[selectedIndex].link!}
                                                    target="_blank"
                                                    className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors font-semibold"
                                                >
                                                    <span>View Official Record</span>
                                                    <ExternalLink className="h-4 w-4" />
                                                </Link>
                                            </div>
                                        )}

                                        {/* Close button */}
                                        <button
                                            onClick={() => setSelectedIndex(null)}
                                            className="mt-6 w-full py-3 px-4 bg-muted hover:bg-muted/80 rounded-lg font-medium transition-colors"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
