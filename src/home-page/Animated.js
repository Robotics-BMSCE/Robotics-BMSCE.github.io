import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import './Animated.css';
import Kick from './Kick';
import { OrbitControls } from '@react-three/drei';

const Animated = () => {
    return (
        <div className="container">
            <Canvas>
                <Suspense fallback={<div>Please Reload</div>}>
                    <OrbitControls enableZoom={false} minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} maxAzimuthAngle={Math.PI/15} minAzimuthAngle={-Math.PI/6} />  {/* to restrict the movements */}
                    <directionalLight intensity={0.5} />
                    <spotLight position={[2,2,0]} angle={Math.PI / 2} intensity={0.2} />  {/* The light direction can be adjusted by changing the position and angle */}
                    <Kick /> {/* Has the bot */}
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Animated;
