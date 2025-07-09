import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const ThreeCanvas = () => {
  return (
    <div className="w-full h-[400px] bg-black">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <OrbitControls enableZoom={false} />
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
