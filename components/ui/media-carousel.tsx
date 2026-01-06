"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export interface MediaItem {
    type: 'youtube' | 'image' | 'placeholder'
    src?: string
    alt?: string
    title?: string
    description?: string
}

interface MediaCarouselProps {
    items: MediaItem[]
}

export function MediaCarousel({ items }: MediaCarouselProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [direction, setDirection] = React.useState(0)

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    }

    const swipeConfidenceThreshold = 10000
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity
    }

    const paginate = (newDirection: number) => {
        setDirection(newDirection)
        let newIndex = currentIndex + newDirection
        if (newIndex < 0) newIndex = items.length - 1
        if (newIndex >= items.length) newIndex = 0
        setCurrentIndex(newIndex)
    }

    return (
        <div className="relative w-full space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-black shadow-lg">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x)
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1)
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1)
                            }
                        }}
                        className="absolute inset-0 w-full h-full flex items-center justify-center bg-background"
                    >
                        {items[currentIndex].type === 'youtube' ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${items[currentIndex].src}`}
                                title={items[currentIndex].title}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : items[currentIndex].type === 'image' ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={items[currentIndex].src}
                                alt={items[currentIndex].alt || ""}
                                className="w-full h-full object-cover"
                                draggable={false}
                            />
                        ) : (
                            <div className="flex flex-col items-center justify-center p-6 text-center select-none">
                                <span className="text-4xl mb-4">🖼️</span>
                                <h4 className="text-xl font-semibold mb-2">{items[currentIndex].title}</h4>
                                <p className="text-muted-foreground">{items[currentIndex].description}</p>
                                <p className="text-sm text-muted-foreground mt-4 italic opacity-70">(Content Coming Soon)</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Caption & Controls */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-2">
                <div className="text-center md:text-left flex-1">
                    {items[currentIndex].title && (
                        <h3 className="font-semibold text-lg">{items[currentIndex].title}</h3>
                    )}
                    {items[currentIndex].description && (
                        <p className="text-sm text-muted-foreground">{items[currentIndex].description}</p>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => paginate(-1)}>
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="flex gap-1.5">
                        {items.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1)
                                    setCurrentIndex(idx)
                                }}
                                className={`h-1.5 rounded-full transition-all ${idx === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30 w-1.5"
                                    }`}
                            />
                        ))}
                    </div>
                    <Button variant="outline" size="icon" onClick={() => paginate(1)}>
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
