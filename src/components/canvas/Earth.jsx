import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader/Loader";
import Spline from "@splinetool/react-spline";

const EarthCanvas = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Spline scene="https://prod.spline.design/pC3mHkDQ5H6CdjIg/scene.splinecode" />
    </Suspense>
  );
};

export default EarthCanvas;
