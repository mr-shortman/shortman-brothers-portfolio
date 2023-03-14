import React from "react";
import { styles } from "../style";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

function SectionHeader({ label, title, description }) {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{label}</p>
        <h2 className={styles.sectionHeadText}>{title}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {description}
      </motion.p>
    </>
  );
}

export default SectionHeader;
