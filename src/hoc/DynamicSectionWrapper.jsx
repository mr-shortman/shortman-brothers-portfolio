import React from "react";

import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

function DynamicSectionWrapper({ children, id }) {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl w-full mx-auto  z-0 `}
    >
      <span className="hash-span" id={id}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
}

export default DynamicSectionWrapper;
