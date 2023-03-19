import React, { useEffect, useState } from "react";
import Link from "next/link";
import { styles } from "../../../style";
import { navLinks } from "../../../constants";
import { logo, menu, close } from "../../../assets";
import Menu from "./Menu";
import { motion } from "framer-motion";

const Navbar = ({ pageTitle }) => {
  return (
    <motion.nav
      whileHover={{ background: "transparent" }}
      className={`${styles.paddingX} w-full flex items-center justify-center py-5 fixed top-0 z-20 bg-transparent`}
    >
      <div
        className={`w-full bg-black blur-lg h-28 fixed -z-10 left-0 -top-10 transition-opacity duration-300 `}
      />
      <div className="flex w-full justify-center">
        <Menu />
      </div>
    </motion.nav>
  );
};

export default Navbar;
