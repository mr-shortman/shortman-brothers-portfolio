import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../../style";
import { github, link } from "../../../assets";
import { fadeIn, textVariant } from "../../../utils/motion";
import Image from "next/image";

const ProjectCard = ({ index, name, description, tags, image, links }) => {
  const tagColors = [
    "blue-text-gradient",
    "green-text-gradient",
    "pink-text-gradient",
  ];
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="group"
    >
      <Tilt
        options={{
          max: 20,
          scale: 1.05,
          speed: 250,
        }}
        className={` bg-tertiary/75 p-5 rounded-2xl sm:w-[360px] w-full`}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover rounded-2xl shadow-lg shadow-black/10 "
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {links?.github ? (
              <div
                onClick={() => window.open(links.github, "_blank")}
                className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={github.src}
                  width={26}
                  height={26}
                  alt={"github"}
                  className="object-contain"
                />
              </div>
            ) : null}
            {links?.live ? (
              <div
                onClick={() => window.open(links.live, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <Image
                  src={link.src}
                  width={26}
                  height={26}
                  alt={"live"}
                  className="object-contain"
                />
              </div>
            ) : null}
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-white group-hover:text-secondary transition-colors duration-300 font-bold text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary group-hover:text-white transition-colors duration-300 text-[14px]">
            {description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags
            ? tags.map((tag) => (
                <p
                  key={tag}
                  className={`text-[14px]  ${
                    tagColors[Math.floor(Math.random() * tagColors.length)]
                  }`}
                >
                  {tag}
                </p>
              ))
            : null}
        </div>
      </Tilt>
    </motion.div>
  );
};

function ProjectShowcase({ data }) {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{data?.label}</p>
        <h2 className={styles.sectionHeadText}>{data?.header}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          {data?.description}
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 items-center">
        {data?.projects?.map((project, idx) => (
          <ProjectCard key={`project-${idx}`} {...project} index={idx} />
        ))}
        <div className="text-secondary/50  cursor-wait">
          More projects and live <br /> preview coming soon...
        </div>
      </div>
    </>
  );
}

export default ProjectShowcase;
