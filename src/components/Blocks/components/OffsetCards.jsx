import React from "react";
import SectionHeader from "../../SectionHeader";
import { motion } from "framer-motion";
import { slideIn } from "../../../utils/motion";

const OffsetCard = ({ title, label, text, image, idx }) => (
  <motion.div
    variants={slideIn(
      idx % 2 === 1 ? "right" : "left",
      "spring",
      idx * 0.5,
      0.5
    )}
    key={title}
    className={`flex flex-col lg:flex-row group  w-max self-start gap-5 ${
      idx % 2 === 1 ? " lg:self-end" : "lg:self-start"
    } `}
  >
    <div className={`w-full max-w-xs   h-full`}>
      <motion.img
        className="rounded-3xl  object-cover w-full h-52 shadow-lg shadow-white/20 group-hover:scale-[105%] transition-all duration-500"
        src={`${image}`}
        alt={`${title}-image`}
      />
    </div>
    <div className="w-full max-w-xs  flex flex-col justify-center items-start  ">
      <span className={`text-sm uppercase text-black-200`}>{label}</span>
      <h4 className="font-black text-2xl tracking-widest transition-all duration-500 group-hover:text-secondary">
        {title}
      </h4>
      <p className="text-sm text-secondary mt-2 group-hover:scale-[105%] group-hover:translate-x-2 group-hover:text-white transition-all duration-500">
        {text}
      </p>
    </div>
  </motion.div>
);

function OffsetCards({ data }) {
  return (
    <div className="text-white">
      <SectionHeader label={data?.label} title={data?.heading} />
      {/* Cards */}
      <div className="flex flex-col gap-20 mt-16 w-full ">
        {data?.cards?.map((card, idx) => (
          <OffsetCard {...card} idx={idx} />
        ))}
      </div>
    </div>
  );
}

export default OffsetCards;
