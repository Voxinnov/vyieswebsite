import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Connections({ points, color = "#00f0ff" }: { points: Float32Array; color?: string }) {
    const linesGeometry = useMemo(() => {
        const positions: number[] = [];
        const pointsArray = [];

        // Convert Float32Array to vector3 array for easier calculation
        for (let i = 0; i < points.length; i += 3) {
            pointsArray.push(new THREE.Vector3(points[i], points[i + 1], points[i + 2]));
        }

        // Connect close points
        const distanceThreshold = 1.2;

        for (let i = 0; i < pointsArray.length; i++) {
            for (let j = i + 1; j < pointsArray.length; j++) {
                const dist = pointsArray[i].distanceTo(pointsArray[j]);
                if (dist < distanceThreshold) {
                    positions.push(
                        pointsArray[i].x, pointsArray[i].y, pointsArray[i].z,
                        pointsArray[j].x, pointsArray[j].y, pointsArray[j].z
                    );
                }
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        return geometry;
    }, [points]);

    return (
        <lineSegments geometry={linesGeometry}>
            <lineBasicMaterial color={color} transparent opacity={0.15} />
        </lineSegments>
    );
}

function NetworkParticles(props: any) {
    const ref = useRef<any>(null);
    const count = 300;

    // Generate random points in a sphere manually to avoid dependency issues
    const [positions] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Random point in sphere
            const r = 4 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;
        }
        return [pos];
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Constant subtle background rotation
            ref.current.rotation.z += delta * 0.05;

            // Mouse interaction: rotate group based on mouse position
            // state.mouse.x/y are normalized coordinates (-1 to 1)
            const x = state.mouse.x * 0.2; // Max rotation X (radians)
            const y = state.mouse.y * 0.2; // Max rotation Y (radians)

            // Smoothly interpolate towards the target rotation
            ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, y, delta * 2);
            ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, x, delta * 2);
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]} ref={ref}>
            {/* The Points (Nodes) */}
            <Points positions={positions} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color={props.nodeColor || "#00f0ff"}
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>

            {/* The Lines (Connections) */}
            <Connections points={positions} color={props.lineColor || "#0066ff"} />
        </group>
    );
}

export const NetworkBackground = () => {
    return (
        <div className="absolute inset-0 h-full w-full bg-[#0a0a0a]">
            {/* Use default z-index (auto) or explicit 0, so it sits behind z-10 content but effectively visible */}
            {/* Note: Hero section has 'relative z-10' content. This background is 'absolute' in Hero. */}

            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <color attach="background" args={['#05050a']} />
                <ambientLight intensity={0.5} />
                <NetworkParticles nodeColor="#00f0ff" lineColor="#0066ff" />
            </Canvas>
        </div>
    );
};
