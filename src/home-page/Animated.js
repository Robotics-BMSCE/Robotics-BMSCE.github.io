import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import './Animated.css';
import Kick from './Kick';
import { OrbitControls } from "@react-three/drei";
import LoadingSpinner from '../helpers/LoadingSpinner';

const Animated = () => {
    return (
        <div className="container">
            <Canvas>
                <Suspense fallback={<LoadingSpinner />}>
                    <OrbitControls enableZoom={false} minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} maxAzimuthAngle={Math.PI/15} minAzimuthAngle={-Math.PI/6} />
                    <directionalLight intensity={0.5} />
                    <spotLight position={[2,2,0]} angle={Math.PI / 2} intensity={0.2} />
                    <Kick />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Animated;