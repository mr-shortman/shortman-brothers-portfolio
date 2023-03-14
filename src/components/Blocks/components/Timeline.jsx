import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../../../style";
import { textVariant } from "../../../utils/motion";
import Tilt from "react-tilt";

const TimeLineComponent = () => {
  const data = [
    {
      label: "Label here",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio, non quos quam nemo officia aliquid? Quibusdam ducimus quam neque veniam totam et maiores adipisci, nobis facilis, ab, doloremque iusto.",
      image:
        "https://cdn.pixabay.com/photo/2016/09/20/11/27/phone-1682317_960_720.png",
    },
    {
      label: "Label here",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio, non quos quam nemo officia aliquid? Quibusdam ducimus quam neque veniam totam et maiores adipisci, nobis facilis, ab, doloremque iusto.",
      image:
        "https://cdn.pixabay.com/photo/2016/09/20/11/27/phone-1682317_960_720.png",
    },
    {
      label: "Label here",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio, non quos quam nemo officia aliquid? Quibusdam ducimus quam neque veniam totam et maiores adipisci, nobis facilis, ab, doloremque iusto.",
      image:
        "https://cdn.pixabay.com/photo/2016/09/20/11/27/phone-1682317_960_720.png",
    },
    {
      label: "Label here",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas odio, non quos quam nemo officia aliquid? Quibusdam ducimus quam neque veniam totam et maiores adipisci, nobis facilis, ab, doloremque iusto.",
      image:
        "https://cdn.pixabay.com/photo/2016/09/20/11/27/phone-1682317_960_720.png",
    },
  ];
  return (
    <div className="flex">
      {/* Image */}
      <div className="w-full">
        <div className="bg-black-200/50 max-w-lg w-full rounded-[200px] h-full">
          <Tilt>
            <img className="mx-auto" src={data[0].image} alt="" />
          </Tilt>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col items-center justify-between w-full py-20">
        {data.map((item, idx) => (
          <div key={`timeline-content-${idx}`} className="flex gap-5">
            {/* Number */}
            <p className="rounded-full text-center bg-black-100 text-2xl text-white font-bold p-4 h-max">
              {idx + 1}
            </p>

            <div className="flex flex-col gap-2">
              {/* Label */}
              <span className="text-xs text-secondary">{item?.label}</span>
              {/* Text */}
              <p className="text-white text-sm">{item?.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function Timeline({ data }) {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Was ich bisher gemacht habe</p>
        <h2 className={styles.sectionHeadText}>Arbeitserfahrung.</h2>
      </motion.div>
      coming soon... In Arbeit
      <div className="mt-20 flex flex-col ">
        <TimeLineComponent data={data?.timeline} />
      </div>
    </>
  );
}

export default Timeline;
