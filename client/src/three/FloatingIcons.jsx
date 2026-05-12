import { Float, Html } from "@react-three/drei";

import {
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import {
  SiMongodb,
  SiJavascript,
  SiExpress,
} from "react-icons/si";

const FloatingIcons = () => {
  return (
    <>

         {/* NODE */}

      <Float
        speed={2.5}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Html position={[7, 1, -2]}>
          <div className="text-green-500 text-6xl drop-shadow-[0_0_20px_#22c55e]">
            <FaNodeJs />
          </div>
        </Html>
      </Float>

      {/* REACT */}

      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Html position={[-4, 2, -2]}>
          <div className="text-cyan-400 text-6xl drop-shadow-[0_0_20px_#22d3ee]">
            <FaReact />
          </div>
        </Html>
      </Float>

   {/* JAVASCRIPT */}

      <Float
        speed={2.2}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Html position={[3, -3, -2]}>
          <div className="text-yellow-300 text-5xl drop-shadow-[0_0_20px_#fde047]">
            <SiJavascript />
          </div>
        </Html>
      </Float>

      {/* MONGODB */}

      <Float
        speed={3}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Html position={[-3, -2, -2]}>
          <div className="text-green-400 text-5xl drop-shadow-[0_0_20px_#4ade80]">
            <SiMongodb />
          </div>
        </Html>
      </Float>

      {/* EXPRESS */}

      <Float
        speed={2.8}
        rotationIntensity={1}
        floatIntensity={2}
      >
        <Html position={[0, 3, -3]}>
          <div className="text-white text-5xl drop-shadow-[0_0_20px_#ffffff]">
            <SiExpress />
          </div>
        </Html>
      </Float>

    </>
  );
};

export default FloatingIcons;