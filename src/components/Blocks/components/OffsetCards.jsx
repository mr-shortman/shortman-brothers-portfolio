import React, { useState, useEffect } from "react";
import SectionHeader from "../../SectionHeader";
import { motion, transform } from "framer-motion";
import { slideIn } from "../../../utils/motion";
import Lottie from "lottie-react";
import { ball_on_ladder } from "../../../assets";

// slideIn(
//   idx % 2 === 1 ? "right" : "left",
//   "spring",
//   idx * 0.5,
//   0.5
// )

const cardTransformVariants = (mobile) => ({
  closed: {
    width: mobile ? "100%" : "70%",
  },
  open: {
    width: "100%",
  },
});

const OffsetCard = ({
  title,
  label,
  text,
  image,
  idx,
  cardOpenCb,
  openCard,
  isMobile,
}) => {
  const isOpen = openCard === idx;
  return (
    <motion.div
      variants={cardTransformVariants(isMobile)}
      animate={isOpen ? "open" : "closed"}
      key={title}
      className={`group flex flex-col  lg:flex-row self-start h-full
      ${idx % 2 === 1 ? " lg:self-end" : "lg:self-start"} 
      
      ${isOpen ? "gap-10" : "gap-5"}
      transition-all duration-300 cursor-pointer w-full`}
      onClick={() => cardOpenCb(isOpen ? null : idx)}
    >
      <div className={`w-full ${isOpen ? "max-w-lg" : "max-w-xs"}   `}>
        <motion.img
          className={`rounded-3xl ${
            isOpen ? "h-52 md:h-80" : "h-40 md:h-52"
          }  object-cover w-full  shadow-lg shadow-white/20 group-hover:scale-[105%] transition-all duration-500`}
          src={`${image}`}
          alt={`${title}-image`}
        />
      </div>
      <div
        className={`w-full ${
          isOpen ? "max-w-lg" : "max-w-xs"
        }  flex flex-col justify-center items-start  `}
      >
        <span
          className={`text-sm uppercase text-black-200 group-hover:text-xs group-hover:text-secondary transition-all duration-300`}
        >
          {label}
        </span>
        <h4 className="font-black text-2xl tracking-widest transition-all duration-500 group-hover:text-black-200 group-hover:ml-1">
          {title}
        </h4>
        <p
          className={`mt-2 group-hover:scale-[105%] group-hover:translate-x-2 group-hover:text-white ${
            isOpen ? "text-white text-lg" : "text-secondary text-sm"
          } transition-all duration-500`}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
};

function OffsetCards({ data }) {
  const [openCard, setopenCard] = useState(null);
  const cardOpenCb = (idx) => setopenCard(idx);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth <= 600) {
        setIsMobile(true);
      }
      if (window.innerWidth >= 600) {
        setIsMobile(false);
      }
      return true;
    };
    window.addEventListener("resize", checkSize, true);
    checkSize();
    return () => {
      window.removeEventListener("resize", checkSize, true);
    };
  }, [isMobile]);

  return (
    <div className={`text-white relative`}>
      <SectionHeader label={data?.label} title={data?.heading} />
      {/* Cards */}
      <div className="flex flex-col gap-20 mt-16 w-full max-w-5xl">
        {data?.cards?.map((card, idx) => (
          <OffsetCard
            isMobile={isMobile}
            {...card}
            idx={idx}
            openCard={openCard}
            cardOpenCb={cardOpenCb}
          />
        ))}
      </div>
    </div>
  );
}

export default OffsetCards;
