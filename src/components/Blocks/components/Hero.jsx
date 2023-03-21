import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import { styles } from "../../../style";
import { slideIn } from "../../../utils/motion";
import { web_developer } from "../../../assets";

const TRANSITION_DURATION = 0.5;
const TRANSITION_DELAY = 0.5;

const lineVariant = {
  hidden: {
    opacity: 0,
    y: 200,
    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY * 5,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY * 5,
    },
  },
};

const dotVariant = {
  hidden: {
    scale: 0,
    y: 20,
    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY * 6,
    },
  },
  show: {
    scale: 1,
    y: 0,
    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY * 6,
    },
  },
};

const whiteTextVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY,
    },
  },
};

const colorTextVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY * 2,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY * 2,
    },
  },
};

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.45],
      type: "stop",
      frames: [0],
    },
    {
      visibility: [0.45, 1],
      type: "seek",
      frames: [0, 20],
    },
  ],
};

function Hero({ data }) {
  return (
    <section
      className={`relative w-full  bg-cover bg-no-repeat flex justify-end h-screen`}
    >
      <Lottie
        animationData={web_developer}
        loop={true}
        className="w-full max-w-6xl opacity-10 right-0 absolute  bottom-0 md:top-0 "
      />
      <div className="w-full h-full bg-gradient-to-b from-black via-transparent to-transparent absolute z-0 top-0 left-0" />

      <div
        className={`${styles.padding} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex justify-center flex-col items-center mt-5">
          <motion.div
            initial="hidden"
            animate={"show"}
            variants={dotVariant}
            className="w-5 h-5 rounded-full bg-[#fec046]"
          />
          <motion.div
            initial="hidden"
            animate={"show"}
            variants={lineVariant}
            className="w-1 sm-h-80 h-40 violet-gradient"
          />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white max-w-md`}>
            <motion.span
              initial="hidden"
              animate={"show"}
              variants={whiteTextVariants}
            >
              {data?.title}
            </motion.span>
            {/* <br /> */}
            <motion.span
              initial="hidden"
              animate={"show"}
              variants={colorTextVariants}
              className="blue-text-gradient ml-3"
            >
              {data?.clrTitle}
            </motion.span>
          </h1>
          <motion.p
            variants={slideIn(
              "left",
              "spring",
              TRANSITION_DELAY * 4,
              TRANSITION_DURATION
            )}
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            {data?.description}
          </motion.p>
        </div>
      </div>
      {/* <motion.div initial="hidden" animate={"show"} variants={graph3dVariants}>
        <LoadLazy3D delay={5000}>
          <Suspense fallback={<div>Loading...</div>}>
            <Spline
              scene={`${data?.splineScene ? data.splineScene : fallbackScene}`}
              className="absolute top-40 right-0 lg:-right-96 md:-right-40 w-full md:w-1/2 scale-50  md:scale-75 lg:scale-100"
            />
          </Suspense>
        </LoadLazy3D>
      </motion.div> */}

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
