import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

function AbstractShape() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.getElapsedTime();
            meshRef.current.rotation.x = time * 0.2;
            meshRef.current.rotation.y = time * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} position={[2, 0, 0]} scale={1.5}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#00f0ff"
                    roughness={0.1}
                    metalness={0.8}
                    wireframe={true}
                />
            </mesh>

            <mesh position={[-2, -1, -1]} scale={1}>
                <torusGeometry args={[0.8, 0.2, 16, 100]} />
                <meshStandardMaterial
                    color="#7000ff"
                    roughness={0.2}
                    metalness={1}
                />
            </mesh>

            <mesh position={[0, 2, -2]} scale={0.8}>
                <octahedronGeometry args={[1]} />
                <meshStandardMaterial
                    color="#3b82f6"
                    roughness={0}
                    metalness={0.5}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    );
}

export const HeroScene = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#7000ff" />

                <AbstractShape />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
};
