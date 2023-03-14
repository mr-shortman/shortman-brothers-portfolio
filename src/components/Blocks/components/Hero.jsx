import React, { Suspense } from "react";

import { motion } from "framer-motion";
import { styles } from "../../../style";
import { ComputersCanvas, D3Component } from "../../canvas";
import CanvasLoader from "../../Loader/Loader";

import { fallbackScene } from "../../../utils/spline";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Hero({ data }) {
  return (
    <section className={`relative w-full h-screen bg-cover bg-no-repeat `}>
      <div
        className={`${styles.padding} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex justify-center flex-col items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#fec046]" />
          <div className="w-1 sm-h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {data?.title}{" "}
            <span className="blue-text-gradient">{data?.clrTitle}</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {data?.description}
          </p>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          scene={`${data?.splineScene ? data.splineScene : fallbackScene}`}
          className="absolute top-40 right-0 lg:-right-96 md:-right-40 w-full md:w-1/2 scale-50  md:scale-75 lg:scale-100"
        />
      </Suspense>

      <div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
        <a href={`${data?.scrollCTA ? data.scrollCTA : "/"}`}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full  bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
