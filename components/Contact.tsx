import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  const {
    handleSubmit,
    register,
  } = useForm<Inputs>();
  const onSubmit = handleSubmit((formData) => {
    window.location.href= `mailto:sohaibahmed76@hotmail.com?subject=${formData.subject}&body= hi my name is ${formData.name}.${formData.message}(${formData.email})`;
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col items-center h-screen  p-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly max-w-7xl"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] dark:text-gray-500 text-violet-600 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className=" underline  dark:decoration-[#f7ab0a]/50 decoration-violet-800/50  ">
            lets Talk
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="dark:text-[#f7ab0a] text-violet-600 h-7 w-7 animate-pulse" />
            <p className="text-sm">+923040069741</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="dark:text-[#f7ab0a] text-violet-600 h-7 w-7 animate-pulse" />
            <p className="text-sm">
              CB194/4 ST.NO 5 JINNAH ROAD LALAZAR WAH CANTT
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="dark:text-[#f7ab0a] text-violet-600 h-7 w-7 animate-pulse" />
            <p className="text-sm">sohaibahmed76@hotmail.com</p>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="Email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className=" dark:bg-[#f7ab0a] bg-violet-500 py-5 px-10 rounded-md dark:text-black text-white font-bold "
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
