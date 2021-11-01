import React from "react";
import { Canvas } from '@react-three/fiber';
import './Animated.css';
import Kick from './Kick';
import { OrbitControls } from '@react-three/drei';

const Animated = () => {
    return (
<<<<<<< HEAD
        <Canvas className="container">
        
            <OrbitControls enableZoom={false} minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} maxAzimuthAngle={Math.PI/15} minAzimuthAngle={-Math.PI/6} />  {/* to restrict the movements */}
            <directionalLight intensity={0.5} />
            <spotLight position={[2,2,0]} angle={Math.PI / 2} intensity={0.2} />  {/* The light direction can be adjusted by changing the position and angle */}
            <Kick />  {/* Has the bot */}
                
        </Canvas>
    
=======
        <div className="container">
            <Canvas>
                <Suspense fallback={<LoadingSpinner />}>   {/* Calls the file loading Spinner that displays a loading spinner */}
                    <OrbitControls enableZoom={false} minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} maxAzimuthAngle={Math.PI/15} minAzimuthAngle={-Math.PI/6} />  {/* to restrict the movements */}
                    <directionalLight intensity={0.5} />
                    <spotLight position={[2,2,0]} angle={Math.PI / 2} intensity={0.2} />  {/* The light direction can be adjusted by changing the position and angle */}
                    <Kick /> {/* Has the bot */}
                </Suspense>
            </Canvas>
        </div>
>>>>>>> a1abcc435bbea9b12bc81934cd2905383a12d690
    );
};

export default Animated;