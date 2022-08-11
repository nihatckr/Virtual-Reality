import * as THREE from 'three'
import React, { Suspense, useState } from 'react'
import { Html, Preload, OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'

const store = [
    { name: 'Salon', color: 'lightpink', position: [10, 0, -15], url: 'hdri/a1.jpg', link: 1 },
    { name: 'Yatak Odası', color: 'lightblue', position: [15, 0, 0], url: 'hdri/a2.jpg', link: 0 },
    { name: 'Wc', color: 'lightblue', position: [15, 0, -30], url: 'hdri/a3.jpg', link: 2 },
    { name: 'Mutfak', color: 'lightblue', position: [15, 0, -40], url: 'hdri/a4.jpg', link: 3 },

]

function Dome({ name, position, texture, onClick }) {
    return (
        <group>
            <mesh>
                <sphereBufferGeometry args={[500, 60, 40]} />
                <meshBasicMaterial map={texture} side={THREE.BackSide} />
            </mesh>
            <mesh position={position}>
                <sphereGeometry args={[1.25, 32, 32]} />
                <meshBasicMaterial color="white" />
                <Html center>
                    <div onClick={onClick} >
                        <a href="#">{name}</a>
                    </div>
                </Html>
            </mesh>
        </group>
    )
}

function Portals() {
    const [which, set] = useState(0)
    const { link, ...props } = store[which]
    const maps = useLoader(THREE.TextureLoader, store.map((entry) => entry.url)) // prettier-ignore

    return <Dome onClick={() => set(link)} {...props} texture={maps[which]} />
}


const Scene = () => {
    return (
        <Canvas frameloop="demand" camera={{ position: [0, 0, 0.1] }}>
            <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} autoRotate={false} rotateSpeed={-0.5} />
            <Suspense fallback={null}>
                <Preload all />
                <Portals />
            </Suspense>
        </Canvas>
    )
}

export default Scene