import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import PageProgressNavBar from "./PageProgressNavBar";
import MouseBlob from "./MouseBlob";

const Layout = ({ children, pageTitle }) => (
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
    {/* <Navbar pageTitle={pageTitle} /> */}
    <PageProgressNavBar />
    <MouseBlob />
    <main className="z-20 min-h-screen">{children}</main>
  </motion.div>
);
export default Layout;
