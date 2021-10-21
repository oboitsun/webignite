import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function ProcessMob() {
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
      alt: "launch",
      w: 30,
      h: 30,
      src: "/imgs/play.svg",
    },
    {
      alt: "approve",
      w: 30,
      h: 28,
      src: "/imgs/thumbsup.svg",
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
    <div
      id="process"
      ref={ref}
      className="w-full max-w-[375px] mx-auto flex  flex-col items-center lg:hidden  pt-10 pb-20 relative z-[1] overflow-x-hidden"
    >
      <div className="absolute lg:hidden block left-1/2 -translate-x-1/2 bottom-0 transform w-3/4 ">
        <Image
          src="/imgs/nz-map.png"
          layout="responsive"
          width={276}
          height={392}
          alt="NZ"
        />
      </div>
      <p className="text-[40px] leading-[48px] text-grn font-black uppercase flex-shrink-0 w-max pb-10">
        Process:
      </p>
      <motion.div
        variants={cont}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex items-center justify-center flex-wrap flex-grow-1 w-full gap-y-16"
      >
        {process.map((p, i) => (
          <>
            <motion.div
              variants={item}
              key={p.alt}
              className="w-[62px] h-[62px] flex items-center justify-center rounded-full bg-grn relative"
            >
              <Image src={p.src} layout="fixed" width={p.w} height={p.h} alt={p.alt} />
              <p className="text-white pt-1 uppercase font-semibold absolute top-[135%] -translate-y-1/2 transform  w-[145%] text-center break-all">
                {p.alt}
              </p>
            </motion.div>
            {i === 2 && (
              <motion.div
                variants={item}
                key={i}
                className={`absolute top-[63%] right-10 w-7`}
              >
                <img
                  className="transform rotate-[135deg]  "
                  src="/imgs/arrow-right.svg"
                  alt="arrow"
                />
              </motion.div>
            )}
            {i < process.length - 1 && (
              <motion.div
                variants={item}
                key={i}
                className={`px-6 ${i == 2 && "hidden"} ${
                  i === 3 && "rotate-180"
                } lg:block `}
              >
                <Image
                  className={i === 3 ? "" : "transform rotate-180"}
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
  );
}
