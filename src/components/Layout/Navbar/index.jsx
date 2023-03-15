import React, { useEffect, useState } from "react";
import Link from "next/link";
import { styles } from "../../../style";
import { navLinks } from "../../../constants";
import { logo, menu, close } from "../../../assets";
import Menu from "./Menu";
import { motion } from "framer-motion";

const Navbar = ({ pageTitle }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [background, setBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 250 ? setBackground(true) : setBackground(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      whileHover={{ background: "transparent" }}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent`}
    >
      <div
        className={`w-full bg-black blur-lg h-28 fixed -z-10 left-0 -top-10 transition-opacity duration-300 ${
          background ? "opacity-1" : "opacity-0"
        }`}
      ></div>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex w-full">
          <Menu />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            <span className="sm:block hidden">
              {"\u200b \u200b | " + pageTitle}
            </span>
          </p>
        </div>
        {/* <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(({ path, title }) => (
            <li
              key={`${path}`}
              className={`${
                active === title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(title)}
            >
              <Link href={`/${path}`}>{title}</Link>
            </li>
          ))}
        </ul> */}
        <div className="w-full" />
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex sm:hidden flex-col justify-end items-start gap-4">
              {navLinks.map((link) => (
                <li
                  key={`${link.id}`}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
