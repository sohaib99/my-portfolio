import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
    snap-mandatory dark:bg-[#292929] bg-slate-400 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src="https://media.licdn.com/dms/image/C4D03AQHIxPryF0RZPA/profile-displayphoto-shrink_200_200/0/1663925871042?e=1678320000&v=beta&t=eHHQeTFtDgjj6Ru62L6lel4i9_BIXMUsmQOfMvjPodY"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Graduate Student</h4>
        <p className="font-bold text-2xl mt-1">comsats</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
          />
          {/* tech used */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
          />
          {/* tech used */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 dark:text-gray-300 ">
          started... - ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summery points summery points summery points </li>
          <li>summery points summery points summery points </li>
          <li>summery points summery points summery points </li>
          <li>summery points summery points summery points </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
