import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProcessMob from "./ProcessMob";
export default function Process() {
  const { ref, inView } = useInView();
  const process = [
    {
      alt: "pay",
      w: 30,
      h: 30,
      src: "/imgs/wallet.svg",
    },
    {
      alt: "design",
      w: 30,
      h: 30,
      src: "/imgs/pencil.svg",
    },
    {
      alt: "development",
      w: 30,
      h: 18,
      src: "/imgs/brackets.svg",
    },

    {
      alt: "approve",
      w: 30,
      h: 28,
      src: "/imgs/thumbsup.svg",
    },
    {
      alt: "launch",
      w: 30,
      h: 30,
      src: "/imgs/play.svg",
    },
  ];
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
  const item = { show: { x: 0, opacity: 1 }, hidden: { x: -100, opacity: 0 } };

  return (
    <>
      <div
        id="process"
        ref={ref}
        className="lg:flex hidden w-full  items-center pt-10 pb-20 relative z-[1]"
      >
        <p className="text-[40px] leading-[48px] text-grn font-black uppercase flex-shrink-0 w-max pr-10">
          Process:
        </p>
        <motion.div
          variants={cont}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center justify-between flex-grow-1 w-full"
        >
          {process.map((p, i) => (
            <>
              <motion.div
                variants={item}
                key={p.alt}
                className="w-[50px] h-[50px] xl:w-[62px] xl:h-[62px] flex items-center justify-center rounded-full bg-grn relative"
              >
                <Image src={p.src} layout="fixed" width={p.w} height={p.h} alt={p.alt} />
                <p className="text-white pt-1 uppercase font-semibold absolute -bottom-8">
                  {p.alt}
                </p>
              </motion.div>

              {i < process.length - 1 && (
                <motion.div variants={item} key={i} className="px-6">
                  <Image
                    src="/imgs/arrow-right.svg"
                    layout="fixed"
                    width={28}
                    height={15}
                    alt="arrow"
                  />
                </motion.div>
              )}
            </>
          ))}
        </motion.div>
      </div>
      <ProcessMob />
    </>
  );
}
