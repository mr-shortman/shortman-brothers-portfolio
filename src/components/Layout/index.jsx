import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import PageProgressNavBar from "./PageProgressNavBar";
import MouseBlob from "./MouseBlob";

const Layout = ({ children }) => (
  <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}
    className="relative  bg-primary"
  >
    <Navbar />
    <PageProgressNavBar />
    <MouseBlob />
    <main className="z-20">{children}</main>
  </motion.div>
);
export default Layout;
