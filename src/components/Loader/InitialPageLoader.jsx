import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../style";
import { scaleUp, slideIn } from "../../utils/motion";

const InitialPageLoader = (props) => {
  return (
    <motion.div
      className="fixed bg-black-200 z-50 left-0 top-0 w-full h-full"
      initial={"hidden"}
      animate={"show"}
      variants={slideIn("left", "spring", 0, 2)}
      // animate="animation"
    ></motion.div>
  );
};

export default InitialPageLoader;
