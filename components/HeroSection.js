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
        <br className="hidden md:block" /> guarantee if {`you're`}
        <br className="hidden md:block" /> not happy!
      </p>
    ),
  },
  {
    imgUrl: "/imgs/star.svg",
    Text: (
      <p className="">
        Over 10 years <br className="hidden md:block" /> experience in web{" "}
        <br className="hidden md:block" /> and marketing
      </p>
    ),
  },
  {
    imgUrl: "/imgs/rocket.svg",
    Text: (
      <p className="">
        Designed within <br className="hidden md:block" />3 days and built
        <br className="hidden md:block" /> within a week!
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
    <div className="w-full max-w-864 xl:max-w-1080 mx-auto flex gap-5 relative z-[1] pt-[165px]  px-10 lg:px-0">
      <motion.div
        variants={cont}
        animate="show"
        initial="hidden"
        className="text-white font-black leading-none uppercase items-start flex flex-col xl:text-7xl w-max "
      >
        <motion.span
          variants={item}
          key={11}
          className="pb-2 text-[32px] md:text-[61px] xl:text-7xl"
        >
          Get a custom
        </motion.span>
        <motion.span
          variants={item}
          key={22}
          className="text-[52px] md:text-[100px] xl:text-[118px] text-grn"
        >
          Website
        </motion.span>
        <motion.span
          variants={item}
          key={33}
          className="text-[52px] md:text-[100px] xl:text-[118px] text-grn pb-4"
        >
          Designed
        </motion.span>
        <motion.span
          variants={item}
          key={44}
          className="text-4xl md:text-[59px] xl:text-7xl pb-6"
        >
          WITHIN 7 DAYS
        </motion.span>

        <motion.div
          initial={{ opacity: 0, left: "100vw" }}
          animate={{ opacity: 1, left: "50%" }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col md:flex-row font-medium text-[10px] leading-normal xl:text-xs xl:leading-[19px] gap-6 pb-5 w-full"
        >
          {parts.map((p, i) => (
            <div className="flex gap-[15px]   " key={i}>
              <Image src={p.imgUrl} alt="icon" layout="fixed" width={26} height={26} />
              {p.Text}
            </div>
          ))}
        </motion.div>
        <Button href="/" styling="grn" text="order now" />
      </motion.div>
      <div className="hidden lg:block w-[85%] absolute top-1/2 pt-[165px] transform -translate-y-1/2 left-[60%] 2xl:w-[45%]">
        <Image
          priority={true}
          src="/imgs/LAPTOP1.png"
          alt="laptop"
          layout="responsive"
          width={1944}
          height={1154}
        />
      </div>
    </div>
  );
}
