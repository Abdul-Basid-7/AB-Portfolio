import { Canvas, useFrame, useThree } from "@react-three/fiber";
import FloatingIcons from "./FloatingIcons";

import {
    Stars,
    Float,
} from "@react-three/drei";

import { useRef } from "react";

import * as THREE from "three";


function CameraController() {

    const { camera, mouse } = useThree();

    useFrame(() => {

        camera.position.x = THREE.MathUtils.lerp(
            camera.position.x,
            mouse.x * 1.5,
            0.05
        );

        camera.position.y = THREE.MathUtils.lerp(
            camera.position.y,
            mouse.y * 1.5,
            0.05
        );

        camera.lookAt(0, 0, 0);
    });

    return null;
}



const StarsBackground = () => {
    return (
        <div className="absolute inset-0 z-0">

            <Canvas camera={{ position: [0, 0, 5] }}>

                <FloatingIcons />
                <CameraController />

                {/* LIGHTING */}

                <ambientLight intensity={0.5} />

                <directionalLight
                    position={[2, 2, 5]}
                />

                {/* STARS */}

                <Stars
                    radius={100}
                    depth={50}
                    count={5000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={1}
                />

                

            </Canvas>

        </div>
    );
};

export default StarsBackground;