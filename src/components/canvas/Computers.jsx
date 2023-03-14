import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader/Loader";
import Spline from "@splinetool/react-spline";

function ComputersCanvas() {
  return null;
}

// const Computers = ({ isMobile }) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");
//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={isMobile ? 0.7 : 1}
//         position={isMobile ? [0, -3, -2.2] : [-5, -4, -2]}
//         rotation={[-0.01, -0.6, -0.1]}
//         projection={{ angle: 260 }}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   // Is Mobile Screen State
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Check Media Query
//     const mediaQuery = window.matchMedia(`(max-width: 500px)`);
//     setIsMobile(mediaQuery.matches);
//     const handleMediaQueryChange = (e) => setIsMobile(e.matches);
//     mediaQuery.addEventListener("change", handleMediaQueryChange);
//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//           // enableRotate={false}
//         />
//         <Computers isMobile={isMobile} />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

export default ComputersCanvas;
