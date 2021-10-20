import React from "react";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
const parts = [
  {
    imgUrl: "/imgs/cash.svg",
    Text: (
      <p className="">
        100% money back
        <br /> guarantee if {`you're`}
        <br /> not happy!
      </p>
    ),
  },
  {
    imgUrl: "/imgs/star.svg",
    Text: (
      <p className="">
        Over 10 years <br /> experience in web <br /> and marketing
      </p>
    ),
  },
  {
    imgUrl: "/imgs/rocket.svg",
    Text: (
      <p className="">
        Designed within <br />3 days and built
        <br /> within a week!
      </p>
    ),
  },
];
export default function HeroSection() {
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
    <div className="max-w-1080 mx-auto flex gap-9 relative z-[1] xl:pt-10 ">
      <motion.div
        variants={cont}
        animate="show"
        initial="hidden"
        className="text-white font-black leading-none uppercase items-start flex flex-col xl:text-7xl w-max "
      >
        <motion.span variants={item} key={11} className="pb-2">
          Get a custom
        </motion.span>
        <motion.span
          variants={item}
          key={22}
          className="text-[118px] text-transparent ylw-shadow "
        >
          {" "}
          Website
        </motion.span>
        <motion.span variants={item} key={33} className="text-[118px]  ylw-shadow">
          Setup
        </motion.span>
        <motion.span variants={item} key={44} className="text-5xl pb-6">
          for you, fast!
        </motion.span>

        <motion.div
          initial={{ opacity: 0, left: "100vw" }}
          animate={{ opacity: 1, left: "50%" }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex font-medium text-xs leading-[19px] gap-6 pb-5"
        >
          {parts.map((p, i) => (
            <div className="flex gap-[17.5px]" key={i}>
              <Image src={p.imgUrl} alt="icon" layout="fixed" width={26} height={26} />
              {p.Text}
            </div>
          ))}
        </motion.div>
        <Button href="/" styling="grn" text="order now" />
      </motion.div>
      <motion.div className="w-[71%] absolute top-[-10%] left-[50%]">
        <Image
          priority={true}
          src="/imgs/LAPTOP1.png"
          alt="laptop"
          layout="responsive"
          width={767}
          height={586}
        />
      </motion.div>
    </div>
  );
}
