"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface ConnectionLineProps {
    start: [number, number, number]
    end: [number, number, number]
}

export function ConnectionLine({ start, end }: ConnectionLineProps) {
    const ref = useRef<THREE.Line>(null)

    const points = useMemo(() => {
        return [new THREE.Vector3(...start), new THREE.Vector3(...end)]
    }, [start, end])

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry().setFromPoints(points)
        return geo
    }, [points])

    return (
        <line geometry={geometry}>
            <lineBasicMaterial attach="material" color="#cbd5e1" linewidth={1} transparent opacity={0.5} />
        </line>
    )
}
