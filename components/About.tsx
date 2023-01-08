import Image from "next/image";
import React from "react";
import images from "../img";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}} 
    
    className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly ">
      <h3 className="absolute top-24 uppercase tracking-[20px] dark:text-gray-500 text-violet-600 text-2xl">
        About
      </h3>
      <motion.img
        className="flex flex-shrink-0 object-cover w-56 h-56 -mb-20 rounded-full md:mb-0 md:rounded-lg md:w-64 md:h-64 xl:h-[600px] xl:w-[500px] "
        src="https://media.licdn.com/dms/image/C4D03AQHIxPryF0RZPA/profile-displayphoto-shrink_200_200/0/1663925871042?e=1678320000&v=beta&t=eHHQeTFtDgjj6Ru62L6lel4i9_BIXMUsmQOfMvjPodY"
        alt="Sohaib Ahmed"
      />
      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline  dark:decoration-[#f7ab0a]/50 decoration-violet-800/50 ">
            little
          </span>{" "}
          background
        </h4>
        <p className="text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quibusdam vel, 
          velit ad deserunt laudantium esse magnam cumque voluptas incidunt doloremque quisquam? 
          Eius doloribus enim distinctio deleniti? Necessitatibus, mollitia doloribus! </p>
      </div>
    </motion.div>
  );
}
