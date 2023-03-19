import React from "react";
import Tilt from "react-tilt";
import { styles } from "../../../style";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";
import SectionHeader from "../../SectionHeader";

const Card = ({ index, name, icon, background }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 300,
          }}
          className="bg-tertiary dot-grid dot-grid-hover transition-all duration-300 bg-repeat rounded-[20px] py-5 px-12 min-h-[280px] flex items-center justify-evenly flex-col"
        >
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

function BasicCard({ data }) {
  return (
    <>
      <SectionHeader
        title={data?.header}
        label={data?.label}
        description={data?.description}
      />
      <div className="mt-20 flex flex-wrap gap-10  justify-center md:justify-start">
        {data?.cards?.map((service, idx) => (
          <Card key={`${service.name}`} index={idx} {...service} />
        ))}
      </div>
    </>
  );
}

export default BasicCard;
