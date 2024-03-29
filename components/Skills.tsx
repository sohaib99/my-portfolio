import React from "react";
import { Skillcomp } from "../components";
import { motion } from "framer-motion";
import { Experience, Project, Skill, Social, PageInfo } from "../typings";

type Props = { skills: Skill[] };

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row
     max-w-[2000px] xl:p-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] dark:text-gray-500 text-violet-600 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase traking-[3px] dark:text-gray-500 text-sm">
        Hover over skills for current Proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills?.slice(0,skills.length/2).map((skill) => (
          <Skillcomp key={skill.id} skill={skill} />
        ))}
        {skills?.slice(skills.length/2,skills.length).map((skill) => (
          <Skillcomp key={skill.id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills
      
