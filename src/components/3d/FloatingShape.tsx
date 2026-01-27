import { useRef } from 'react';
import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingShapeProps {
    position?: [number, number, number];
    rotation?: [number, number, number];
    scale?: number;
    color?: string;
    shape?: 'box' | 'sphere' | 'torus' | 'octahedron' | 'capsule' | 'icosahedron';
    speed?: number;
    rotationIntensity?: number;
    floatIntensity?: number;
    wireframe?: boolean;
}

export const FloatingShape = ({
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = 1,
    color = "#00f0ff",
    shape = 'box',
    speed = 1,
    rotationIntensity = 1,
    floatIntensity = 1,
    wireframe = false
}: FloatingShapeProps) => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((_state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2 * speed;
            meshRef.current.rotation.y += delta * 0.3 * speed;
        }
    });

    const getGeometry = () => {
        switch (shape) {
            case 'box': return <boxGeometry args={[1, 1, 1]} />;
            case 'sphere': return <sphereGeometry args={[1, 32, 32]} />;
            case 'torus': return <torusGeometry args={[0.8, 0.2, 16, 100]} />;
            case 'octahedron': return <octahedronGeometry args={[1]} />;
            case 'capsule': return <capsuleGeometry args={[0.5, 1, 4, 8]} />;
            case 'icosahedron': return <icosahedronGeometry args={[1, 0]} />;
            default: return <boxGeometry args={[1, 1, 1]} />;
        }
    };

    return (
        <Float speed={speed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity}>
            <mesh
                ref={meshRef}
                position={position}
                rotation={rotation as any}
                scale={scale}
            >
                {getGeometry()}
                <meshStandardMaterial
                    color={color}
                    wireframe={wireframe}
                    roughness={0.1}
                    metalness={0.8}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    );
};
