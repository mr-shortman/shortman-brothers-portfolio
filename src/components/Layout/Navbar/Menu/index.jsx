import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NAVIGATOR = [
  {
    label: "Home",
    path: "/",
    color: "#ffffff",
    bg: "#000000",
  },
  {
    label: "Pablo",
    path: "/pablo",
    color: "#ffffff",
    bg: "#562222",
  },
  {
    label: "Vico",
    path: "/vico",
    color: "#ffffff",
    bg: "#236DDD",
  },
  {
    label: "blogs",
    path: "/",
    color: "#ffffff",
    bg: "#C93E3E",
  },
  {
    label: "über",
    path: "/",
    color: "#ffffff",
    bg: "#894BEF",
  },
  {
    label: "coming soon...",
    path: "/",
    color: "#000000",
    bg: "#FFFFFF",
  },
];

const TRANSITION_DELAY = 0.25;
const TRANSITION_DURATION = 1;

const menuBackgroundVariant = {
  open: {
    position: "fixed",
    display: "block",
    x: 0,
    zIndex: 999,
    transition: {
      duration: TRANSITION_DURATION,
      delay: 0,
    },
  },
  closed: {
    position: "static",
    display: "none",
    x: -500,
    zIndex: -1,
    transition: {
      duration: TRANSITION_DURATION,
      delay: 12,
    },
  },
};

const gridBoxVariants = [
  // 1
  {
    open: {
      x: 0,
      transition: {
        duration: TRANSITION_DURATION,
      },
    },
    closed: {
      x: -3000,
      transition: {
        duration: TRANSITION_DURATION,
        delay: TRANSITION_DURATION,
      },
    },
  },

  // 2
  {
    open: {
      x: 0,
      transition: {
        duration: TRANSITION_DURATION,
        delay: TRANSITION_DELAY,
      },
    },
    closed: {
      x: 3000,
      transition: {
        duration: TRANSITION_DURATION,
        delay: TRANSITION_DELAY + TRANSITION_DURATION,
      },
    },
  },

  // 3
  {
    open: {
      x: 0,
      transition: {
        duration: TRANSITION_DURATION,
        delay: TRANSITION_DELAY * 2,
      },
    },
    closed: {
      x: 3000,
      transition: {
        duration: TRANSITION_DURATION,
        delay: TRANSITION_DELAY * 2 + TRANSITION_DURATION,
      },
    },
  },

  // 4
  {
    open: {
      y: 0,
      transition: {
        duration: TRANSITION_DURATION,
        delay: TRANSITION_DELAY * 3,
      },
    },
    closed: {
      y: 1000,
      transition: {
        duration: TRANSITION_DURATION,
        delay: TRANSITION_DELAY * 3 + TRANSITION_DURATION,
      },
    },
  },

  // 5
  {
    open: {
      x: 0,
      transition: {
        duration: TRANSITION_DURATION,
        delay: TRANSITION_DELAY * 4,
      },
    },
    closed: {
      x: -1000,
      transition: {
        duration: TRANSITION_DURATION,
        delay: TRANSITION_DELAY * 4 + TRANSITION_DURATION,
      },
    },
  },

  // 6
  {
    open: {
      x: 0,
      transition: {
        duration: TRANSITION_DURATION,
        delay: TRANSITION_DELAY * 5,
      },
    },
    closed: {
      x: -1000,
      transition: {
        duration: TRANSITION_DURATION,
        delay: TRANSITION_DELAY * 5 + TRANSITION_DURATION,
      },
    },
  },
];

const menuCloseButtonVariants = {
  open: {
    scale: 1,
    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY * 5 + TRANSITION_DELAY,
    },
  },
  closed: {
    scale: 0,
    transition: {
      duration: TRANSITION_DURATION,
      delay: 0,
    },
  },
};

const blurBackgroundVariants = {
  open: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    borderRadius: "0%",

    transition: {
      duration: TRANSITION_DURATION,
      delay: 0,
    },
  },
  closed: {
    visibility: "hidden",
    opacity: 0,
    scale: 0,
    borderRadius: "100%",

    transition: {
      duration: TRANSITION_DURATION,
      delay: TRANSITION_DELAY * 5 + TRANSITION_DURATION,
    },
  },
};

function Menu() {
  const [showMenu, setShowMenu] = useState("closed");
  return (
    <>
      <div className="flex stroke-black-200 ">
        {/* S */}
        <div className="relative group">
          <motion.svg
            className="h-6 absolute -left-8 group-hover:opacity-0 transition-opacity duration-300"
            viewBox="0 0 106 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M95.7585 30.5C95.6829 23.6667 93.6713 10 86.2298 10C78.7883 10 74.2054 10 72.8442 10H19.5287C11.1343 11.5 5.46248 41.5 17.2599 51.5H90.0867C95.7585 51.5 101.43 92 86.2298 92H17.2599C14.9156 89.3333 10 82.5 10 76L10 74.5"
              stroke-width="20"
            />
          </motion.svg>
          <motion.svg
            className="h-6 absolute -left-14 group-hover:opacity-100 opacity-0 transition-opacity duration-300"
            viewBox="0 0 210 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M199 31.0001C198.833 24.1668 194.4 10.5001 178 10.5001C161.6 10.5001 151.5 10.5001 148.5 10.5001H30.9999C12.4999 12.0001 -5.81741e-05 42.0001 25.9999 52.0001H186.5C199 52.0001 211.5 92.5001 178 92.5001H25.9999C20.8332 89.8335 10 83.0001 10 76.5001L10 75.0001"
              stroke-width="20"
            />
          </motion.svg>
        </div>

        {/* B */}
        <motion.svg
          className={"h-6"}
          viewBox="0 0 164 166"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.rect
            y="166"
            width="166"
            height="164"
            rx="40"
            transform="rotate(-90 0 166)"
            fill="white"
          />
          <motion.path
            d="M50 47.9454V38M50 47.9454H107.378C115.784 51.2605 129.087 64.4546 115.053 86.7322H50M50 47.9454V86.7322M115.784 87.2295C134.423 104.634 123.459 125.519 115.053 129H50V86.7322"
            stroke="#333333"
            stroke-width="20"
          />
        </motion.svg>
      </div>

      {/* Menu Open */}
      {showMenu === "open" ? (
        <motion.div
          className={`fixed w-full h-full left-0 top-0 z-50  text-white/50`}
          // variants={menuBackgroundVariant}
          // initial="closed"
          // animate={showMenu}
        >
          <motion.div
            className="absolute -z-10 w-full h-full left-0 top-0 mouse-blob-blur "
            variants={blurBackgroundVariants}
            initial="closed"
            animate={showMenu}
          />

          <motion.div className="menu-nav-grid flex flex-col md:grid h-full">
            <div className="scale-[25%] left-20 md:scale-100 group absolute max-w-xs top-1/2 md:left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full hover:rotate-12 transition-all duration-300">
              <motion.svg
                className="w-full"
                onClick={() => setShowMenu("closed")}
                whileTap={{ scale: 0.9 }}
                variants={menuCloseButtonVariants}
                initial="closed"
                animate={showMenu}
                viewBox="0 0 307 307"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <motion.circle
                  cx="153.5"
                  cy="153.5"
                  r="153.5"
                  className={
                    "fill-neutral-300 group-hover:fill-white transition-colors duration-700"
                  }
                />
                <motion.path
                  d="M217.638 122.75C217.524 112.5 214.507 92 203.345 92C192.182 92 185.308 92 183.266 92H103.293C90.7015 94.25 82.1937 139.25 99.8899 154.25H209.13C217.638 154.25 226.146 215 203.345 215H99.8899C96.3734 211 89 200.75 89 191L89 188.75"
                  stroke="black"
                  stroke-width="20"
                />
                <motion.path
                  d="M98 238L140 68L151 238L193 68L209 238"
                  stroke="black"
                  stroke-width="10"
                  stroke-linejoin="round"
                />
              </motion.svg>
            </div>
            {/* Menu Content */}

            {NAVIGATOR.map((item, idx) => (
              <Link href={`${item.path}`} key={`menu-box-grid-item-${idx}`}>
                <motion.div
                  className={`h-full w-full menu-box-grid-item-${
                    idx + 1
                  }  hover:text-white hover:bg-white/10  text-5xl hover:text-8xl transition-colors duration-700  ${
                    showMenu ? "bg-opacity-20" : "bg-opacity-100"
                  } bg-black`}
                  // style={{
                  //   background: `${item.bg}`,
                  //   color: `${item.color}`,
                  // }}
                  variants={gridBoxVariants[idx]}
                  initial="closed"
                  animate={showMenu}
                  // whileHover={{ background: "#fec046", color: "#C1554E" }}
                >
                  <div className="flex w-full h-full jusitfy-center items-center cursor-pointer">
                    <h3 className="font-black tracking-widest text-center   w-fit mx-auto transition-all duration-700">
                      {` ${item.label}`}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      ) : null}
    </>
  );
}

export default Menu;
