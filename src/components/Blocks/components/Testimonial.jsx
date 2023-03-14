import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../../style";
import { SectionWrapper } from "../../../hoc";
import { fadeIn, textVariant } from "../../../utils/motion";

const TestimonialCard = ({ index, author, text, subtitle, image }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1 ">
        <p className="text-white tracking-wider text-[18px]">{text}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">{`@`}</span> {author}
            </p>
            <p className="mt-1 text-secondary text-[12px]">{subtitle}</p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${author}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = ({ data }) => {
  const { testimonials } = data;
  return (
    <div className="mt-12 bg-black-100/50 rounded-[20px]">
      <div
        className={`${styles.padding} bg-black-200/75 rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Was andere sagen</p>
          <h2 className={`${styles.sectionHeadText} `}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-8`}>
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={`${testimonial.name}`}
            index={idx}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
