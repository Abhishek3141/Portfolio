"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera, Stars, Float } from "@react-three/drei"
import { MindNode } from "./MindNode"
import { ConnectionLine } from "./ConnectionLine"
import { Suspense, useMemo } from "react"
import { Vector3 } from "three"

const NODES_DATA = [
    { id: "root", label: "Abhishek Krishnan", route: "/home", isCenter: true },
    { id: "about", label: "About", route: "/about" },
    { id: "projects", label: "Projects", route: "/projects" },
    { id: "education", label: "Education", route: "/education" },
    { id: "leadership", label: "Leadership", route: "/leadership" },
    { id: "media", label: "Media", route: "/media" },
    { id: "achievements", label: "Achievements", route: "/achievements" },
    { id: "contact", label: "Contact", route: "/contact" },
]

export function MindMapScene() {

    // Tree Layout Calculation
    const nodesWithPositions = useMemo(() => {
        const rootPos = new Vector3(0, -2.5, 0)

        return NODES_DATA.map((node, index) => {
            if (node.isCenter) return { ...node, position: [rootPos.x, rootPos.y, rootPos.z] as [number, number, number] }

            // Distribution for branches (surrounding the root but moving upwards)
            // We want a tree branching OUT and UP.
            const childIndex = index - 1
            const totalChildren = NODES_DATA.length - 1

            // Spread angle: Semi-circle or full circle around Y?
            // Let's do a spiral or cone distribution
            const height = 1.5 + (Math.floor(childIndex / 3) * 1.5) // Levels
            const radius = 2.5 + (Math.random() * 0.5)
            const angle = (childIndex / totalChildren) * Math.PI * 2

            const x = Math.cos(angle) * radius
            const y = rootPos.y + 2 + (childIndex % 2) * 1.5 // Staggered height
            const z = Math.sin(angle) * radius * 0.8 // Slightly flattened depth

            return { ...node, position: [x, y, z] as [number, number, number] }
        })
    }, [])

    return (
        <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950">
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 1, 12]} fov={45} />

                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} intensity={1.5} angle={0.3} penumbra={1} />
                    <pointLight position={[-10, 5, -10]} intensity={0.5} color="#22c55e" />

                    <Environment preset="night" />
                    <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

                    <OrbitControls
                        enablePan={false}
                        maxPolarAngle={Math.PI / 1.8}
                        minPolarAngle={Math.PI / 4}
                        maxDistance={15}
                        minDistance={5}
                        autoRotate
                        autoRotateSpeed={0.8}
                    />

                    <group position={[0, -0.5, 0]}>
                        {/* Draw Lines First (Behind nodes) */}
                        {nodesWithPositions.filter(n => !n.isCenter).map((node) => (
                            <ConnectionLine
                                key={`line-${node.id}`}
                                start={[0, -2.5, 0]} // Connect to root
                                end={node.position}
                            />
                        ))}

                        {/* Draw Nodes */}
                        {nodesWithPositions.map((node) => (
                            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} key={node.id}>
                                <MindNode
                                    position={node.position}
                                    label={node.label}
                                    route={node.route}
                                    isCenter={node.isCenter}
                                />
                            </Float>
                        ))}
                    </group>

                </Suspense>
            </Canvas>
        </div>
    )
}
