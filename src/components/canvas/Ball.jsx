import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader/Loader";
import { AmbientLight } from "three";

const Ball = (props) => {
  const decal = useTexture(
    `http://localhost:3000/uploads/${props.icon}`
      ? props.icon
      : "http://localhost:3000/uploads/logo.svg"
  );
  // console.log(decal);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={`${props.color ? props.color : "#FF00FF"}`}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, color }) => (
  <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} />
      <Ball icon={icon} color={color} />
    </Suspense>
    <Preload all />
  </Canvas>
);

export default BallCanvas;
