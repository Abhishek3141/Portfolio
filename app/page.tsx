"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function LandingPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showUI, setShowUI] = useState(true)
  const [transitioning, setTransitioning] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if intro has been played this session
    const introPlayed = sessionStorage.getItem('introPlayed')
    if (introPlayed) {
      // Skip intro and go straight to home
      router.replace('/home')
    } else {
      setIsLoading(false)
    }
  }, [router])

  const handleEnter = () => {
    sessionStorage.setItem('introPlayed', 'true')
    setIsPlaying(true)
    setShowUI(false)
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0
      videoRef.current.play()
      videoRef.current.muted = false
    }
  }

  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 1
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 7 && !transitioning) {
      setTransitioning(true)
      // trigger gold flash and navigate
      setTimeout(() => {
        router.push('/home')
      }, 800) // wait a bit for the flash to peak
    }
  }

  if (isLoading) return null

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">

      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/intro.mp4"
        playsInline
        muted // Start muted for autoplay policies if needed, but we unmuted on click
        onLoadedMetadata={handleVideoLoad}
        onTimeUpdate={handleTimeUpdate}
      />

      {/* Overlay UI - Fades out when playing */}
      <AnimatePresence>
        {showUI && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="z-10 absolute inset-0 flex flex-col items-center justify-end pb-24 bg-black/30 backdrop-blur-[2px]"
          >
            <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              <div className="text-center space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg">
                  Abhishek Krishnan
                </h1>
                <p className="text-white/80 font-medium tracking-wide">Builder • Founder • Geek</p>
              </div>

              <Button
                onClick={handleEnter}
                size="lg"
                className="rounded-full px-8 py-6 text-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                Enter Portfolio
                <Play className="ml-3 h-5 w-5 fill-current opacity-80 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gold Flash Transition Overlay */}
      <AnimatePresence>
        {transitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-50 bg-[#FFD700] mix-blend-screen pointer-events-none"
            style={{ background: 'radial-gradient(circle at center, #ffeead 0%, #ffcc00 100%)' }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
