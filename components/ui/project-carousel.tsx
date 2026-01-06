"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectFeature {
    title: string
    description: string
}

interface ProjectCarouselProps {
    items: ProjectFeature[]
}

export function ProjectCarousel({ items }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [direction, setDirection] = React.useState(0) // -1 for left, 1 for right

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8
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
        <div className="relative w-full overflow-hidden py-4">
            <div className="relative h-[300px] md:h-[250px] w-full flex items-center justify-center">
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
                        className="absolute w-full max-w-3xl px-4"
                    >
                        <Card className="bg-card border shadow-lg">
                            <CardContent className="flex flex-col items-center justify-center p-8 text-center space-y-4 h-full min-h-[220px]">
                                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                                    {items[currentIndex].title}
                                </h3>
                                <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                                    {items[currentIndex].description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-4 mt-4">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(-1)}
                    className="h-8 w-8 rounded-full"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex gap-2">
                    {items.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1)
                                setCurrentIndex(idx)
                            }}
                            className={`h-2 w-2 rounded-full transition-all ${idx === currentIndex ? "bg-primary w-4" : "bg-muted-foreground/30"
                                }`}
                        />
                    ))}
                </div>

                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => paginate(1)}
                    className="h-8 w-8 rounded-full"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
