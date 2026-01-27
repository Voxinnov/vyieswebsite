import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';


interface SceneContainerProps {
    children: React.ReactNode;
    className?: string;
    cameraPosition?: [number, number, number];
}

export const SceneContainer = ({
    children,
    className = "absolute inset-0 pointer-events-none z-0",
    cameraPosition = [0, 0, 5]
}: SceneContainerProps) => {
    return (
        <div className={className}>
            {/* <Canvas camera={{ position: cameraPosition }} dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7000ff" />
                    {children}
                </Suspense>
            </Canvas> */}
        </div>
    );
};
