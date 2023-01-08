import { motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "../components";
import Image from "next/image";
import Link from "next/link";
import Images from "../img";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Sohaib",
      "Guy-who-loves-Coffee",
      "<But Loves ToCode/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center ">
      <BackgroundCircles />
      <Image
        className="relative object-cover w-32 h-32 mx-auto rounded-full "
        src={Images.Sohaib}
        alt="Sohaib Ahmed"
        width="500"
        height="500"
      />
      <div className="z-20 ">
        <h2 className="text-sm tracking-[15px] uppercase dark:text-gray-500 text-violet-600 ">
          Software Engineer
        </h2>
        <h1 className="px-10 text-5xl font-semibold lg:text-6xl ">
          <span className="mr-3 md:text-5xl">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="z-50 pt-5">
          <Link href= "#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href= "#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href= "#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href= "#projects">
            <button className="heroButton">Projects</button>
          </Link>
          
        </div>
      </div>
    </motion.div>
  );
}
