import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { DarkModeButton } from "../components";
import Link from "next/link";
import { Experience, Project, Skill, Social, PageInfo } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* social */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            className="cursor-pointer"
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex space-x-2 flex-row items-center text-gray-300 cursor-pointer"
      >
        <Link
          href="#contact"
          className="text-sm text-gray-400 uppercase md:inline-flex "
        >
          Contact
        </Link>

        <DarkModeButton />
      </motion.div>
    </header>
  );
}
