import React from "react";
import { motion } from "framer-motion";
import { Experience, Project, Skill, Social, PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = { projects: Project[] };

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen max-w-full p-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] dark:text-gray-500 text-violet-600 text-2xl">
        Projects
      </h3>
      <div className="flex w-full relative overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 dark:scrollbar-thumb-[#f7ab0a]/80 scrollbar-thumb-violet-800/80 ">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
            <motion.img
              className="w-[40rem] h-[40rem]"
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt="project pic"
            />
            <div className=" space-y-10 px-0 md:px-10 max-w-6xl ">
              <h4 className=" text-4xl font-semibold text-center  ">
                {" "}
                <span className="underline uppercase  dark:decoration-[#f7ab0a]/50 decoration-violet-800/50 ">
                  Case Study
                </span>{" "}
                {i + 1} of {projects.length}: {project.title}
              </h4>
              <div className="flex items-center justify-center space-x-2">
                {project.technologies.map((technology, i) => (
                  <img
                    className="h-5 w-5"
                    key={i}
                    alt={technology.title}
                    src={urlFor(technology.image).url()}
                  />
                ))}
              </div>
              <div>
                <p className=" text-md text-center md:text-left ">
                  {project?.summery}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] dark:bg-[#f7ab0a]/10 bg-violet-800/10 left-0 h-[500px] -skew-y-12 " />
    </motion.div>
  );
}

export default Projects;
