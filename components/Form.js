import React from "react";
import Button from "./Button";
import FormInput from "./FormInput";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Form() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const cont = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };
  const item = { show: { y: 0, opacity: 1 }, hidden: { y: -100, opacity: 0 } };
  return (
    <div className="bg-purp relative py-24">
      <div className="absolute left-3/4 top-1/2 transform -translate-y-1/2">
        <Image src="/imgs/nz-map.png" layout="fixed" width={276} height={392} alt="NZ" />
      </div>
      <div className=" max-w-1080 mx-auto flex gap-[30px] ">
        <div className="grid grid-cols-1 grid-rows-4 gap-y-[30px] max-w-[400px] w-full flex-shrink-0 pt-4">
          <FormInput plchldr="Name" />
          <FormInput plchldr="Phoe Number / Email" />
          <FormInput plchldr="How can we help?" />
          <Button full text="Get in touch now" styling="grn" />
        </div>
        <motion.div
          variants={cont}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={ref}
          className=" text-white uppercase"
        >
          <motion.p
            variants={item}
            key={1}
            className="max-w-[582px] font-black text-[60px] leading-tight "
          >
            Do you have some questions for us?
          </motion.p>
          <motion.p variants={item} key={11} className="text-xl font-semibold">
            We are based in Tauranga, New zealand.
          </motion.p>
          <motion.p
            variants={item}
            key={12}
            className="max-w-[582px] font-black  text-ylw text-[56px] leading-none pt-3"
          >
            0800 726 543
          </motion.p>
          <motion.p
            variants={item}
            key={13}
            className="max-w-[582px] font-semibold text-ylw text-xl underline   "
          >
            hello@webignite.nz
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
