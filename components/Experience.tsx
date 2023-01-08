import React from "react";
import { motion } from "framer-motion";
import {ExperienceCard} from "../components"

type Props = {};

export default function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen max-w-full p-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] dark:text-gray-500 text-violet-600 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory ">
        {/* experience cards */}
        <ExperienceCard />
        {/* experience cards */}
        <ExperienceCard />
        {/* experience cards */}
        <ExperienceCard />
        {/* experience cards */}
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
