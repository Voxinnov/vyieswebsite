import React from 'react';

interface SceneContainerProps {
    children?: React.ReactNode;
    className?: string;
    cameraPosition?: [number, number, number];
}

export const SceneContainer: React.FC<SceneContainerProps> = ({
    className = "absolute inset-0 pointer-events-none z-0"
}) => {
    return (
        <div className={className} />
    );
};
