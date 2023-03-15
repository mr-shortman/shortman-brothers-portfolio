import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../../../style";
import { github, link } from "../../../assets";
import { fadeIn, textVariant } from "../../../utils/motion";

const ProjectCard = ({ index, name, description, tags, image, links }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 20,
          scale: 1.05,
          speed: 250,
        }}
        className={` bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full`}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-contain rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {links?.github ? (
              <div
                onClick={() => window.open(links.github, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt={"github"}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            ) : null}
            {links?.live ? (
              <div
                onClick={() => window.open(links.live, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={link}
                  alt={"live"}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            ) : null}
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags
            ? tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  {tag.name}
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
        <p className={styles.sectionSubText}>Meine Arbeit</p>
        <h2 className={styles.sectionHeadText}>Projekte.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          {data?.description}
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {data?.projects?.map((project, idx) => (
          <ProjectCard key={`project-${idx}`} {...project} index={idx} />
        ))}
      </div>
    </>
  );
}

export default ProjectShowcase;
