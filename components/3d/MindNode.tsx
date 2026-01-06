"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Html, Text } from "@react-three/drei"
import * as THREE from "three"
import { useRouter } from "next/navigation"

interface MindNodeProps {
    position: [number, number, number]
    label: string
    route?: string // Route to navigate to
    isCenter?: boolean
    onClick?: () => void
}

export function MindNode({ position, label, route, isCenter = false, onClick }: MindNodeProps) {
    const meshRef = useRef<THREE.Mesh>(null)
    const [hovered, setHovered] = useState(false)
    const router = useRouter()

    useFrame((state) => {
        if (!meshRef.current) return
        // Floating animation
        const time = state.clock.getElapsedTime()
        meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.1
    })

    const handleClick = (e: any) => {
        e.stopPropagation()
        if (onClick) onClick()
        if (route) {
            // Simple zoom effect logic could go here, but for now direct push
            router.push(route)
        }
    }

    const color = isCenter ? "#112211" : (hovered ? "#228B22" : "#ffffff") // Forest Green hover
    const scale = isCenter ? 1.5 : (hovered ? 1.2 : 1)

    return (
        <group position={position}>
            <mesh
                ref={meshRef}
                onClick={handleClick}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                scale={scale}
            >
                <sphereGeometry args={[isCenter ? 0.8 : 0.5, 32, 32]} />
                <meshStandardMaterial
                    color={color}
                    emissive={hovered ? "#228B22" : "#000000"}
                    emissiveIntensity={hovered ? 0.5 : 0}
                    roughness={0.1}
                    metalness={0.1}
                />
            </mesh>

            {/* Label */}
            <Html position={[0, isCenter ? 1.2 : 0.8, 0]} center distanceFactor={10} style={{ pointerEvents: 'none' }}>
                <div className={`px-2 py-1 rounded bg-background/80 backdrop-blur-sm border ${hovered ? 'border-primary text-primary' : 'border-border text-foreground'} transition-colors whitespace-nowrap text-sm font-medium select-none shadow-sm`}>
                    {label}
                </div>
            </Html>
        </group>
    )
}
