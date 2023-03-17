import React, { useState } from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../../style";
import { textVariant } from "../../../utils/motion";

// Created Github Account & mini profile
import { github } from "../../../assets";

const TimeLineComponent = ({ data }) => {
  const [activeItem, setActiveItem] = useState(0);
  const isActive = (idx) => activeItem === idx;
  const imageVariants = (idx, direction) => {
    const TRANSITION = {
      duration: 0.8,
    };
    const hidden = {
      in: {
        hidden: {
          x: 500 * idx,
          transition: TRANSITION,
        },
      },
      out: {
        hidden: {
          x: -500 * idx + 1,
          transition: TRANSITION,
        },
      },
    };
    return {
      hidden: hidden[direction],
      visible: {
        x: -460 * idx,
        transition: TRANSITION,
      },
    };
  };
  return (
    <div className="flex justify-center lg:justify-between flex-col lg:flex-row gap-20 items-center">
      {/* Image */}
      <div className="w-full  mx-auto">
        <div className="mx-auto overflow-hidden relative bg-black-200 max-w-xl w-full h-[550px] rounded-[150px] px-10  py-10 flex items-center ">
          <div className=" flex ">
            {data?.map((item, idx) => (
              <motion.img
                key={item?.title}
                src={item?.image}
                alt={item?.title}
                animate={isActive(idx) ? "visible" : "hidden"}
                variants={imageVariants(idx, isActive(idx) ? "out" : "in")}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col items-center gap-10 justify-between w-full py-20 max-w-lg md:max-w-xl">
        {data?.map((item, idx) => (
          <div
            key={`timeline-content-${idx}`}
            className="flex justify-betwee items-start gap-5 cursor-pointer rounded-lg group"
            onClick={() => setActiveItem(idx)}
          >
            {/* Number */}
            <motion.p
              className={`rounded-full text-center  transition-all duration-700 ${
                idx === activeItem
                  ? "bg-black-200  text-neutral-600"
                  : "bg-black-100 text-white group-hover:bg-white/10"
              } text-2xl md:text-4xl  font-bold p-4 h-max`}
            >
              <motion.div className="w-full h-full bg-black-200" />
              {idx + 1}
            </motion.p>

            <div className="flex flex-col gap-2 w-full">
              {/* Label */}
              <span
                className={`text-xs  transition-all duration-700 w-max px-4 py-1 rounded-2xl ${
                  idx === activeItem
                    ? "text-white bg-black/50"
                    : "text-secondary"
                }`}
              >
                {item?.label}
              </span>
              {/* Text */}
              <p
                className={`text-sm ${
                  idx === activeItem ? "text-white " : "text-secondary"
                } transition-all duration-700`}
              >
                {item?.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Timeline({ data }) {
  return (
    // <>
    //   <motion.div variants={textVariant()}>
    //     <p className={styles.sectionSubText}>{data?.label}</p>
    //     <h2 className={styles.sectionHeadText}>{data?.header}</h2>
    //   </motion.div>
    //   coming soon... In Arbeit
    //   <div className="mt-20 flex flex-col ">
    //     <TimeLineComponent data={data?.timeline} />
    //   </div>
    // </>
    null
  );
}
