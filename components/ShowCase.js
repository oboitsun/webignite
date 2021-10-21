import React from "react";
import CaseCard from "./CaseCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const cases = [
  {
    imgSrc: "/imgs/pic1.png",
    name: "Case 1",
    btn: { text: "learn more", styling: "grn", href: "/" },
  },
  {
    imgSrc: "/imgs/pic2.png",
    name: "Case 2",
    btn: { text: "learn more", styling: "ylw", href: "/" },
  },
  {
    imgSrc: "/imgs/pic3.png",
    name: "Case 3",
    btn: { text: "learn more", styling: "grn", href: "/" },
  },
  {
    imgSrc: "/imgs/pic4.png",
    name: "Case 4",
    btn: { text: "learn more", styling: "ylw", href: "/" },
  },
  {
    imgSrc: "/imgs/pic5.png",
    name: "Case 5",
    btn: { text: "learn more", styling: "grn", href: "/" },
  },
  {
    imgSrc: "/imgs/pic6.png",
    name: "Case 6",
    btn: { text: "learn more", styling: "ylw", href: "/" },
  },
  {
    imgSrc: "/imgs/pic7.png",
    name: "Case 7",
    btn: { text: "learn more", styling: "grn", href: "/" },
  },
  {
    imgSrc: "/imgs/pic1.png",
    name: "and more projects to come ",
    btn: { text: "order now", styling: "ylw", href: "/" },
    hovered: true,
  },
];
export default function ShowCase() {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

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
  const item = { show: { opacity: 1 }, hidden: { opacity: 0 } };

  return (
    <motion.section
      ref={ref}
      variants={cont}
      animate={inView ? "show" : "hidden"}
      initial="hidden"
      className="w-full grid grid-cols-2 grid-rows-4 lg:grid-rows-2  lg:grid-cols-4"
    >
      {cases.map((c, i) => (
        <motion.div
          variants={item}
          key={i}
          className={`w-full h-[50vw] lg:h-[25vw]  relative ${
            i === cases.length - 1 && "col-span-2 lg:col-span-1"
          } ${i === cases.length - 2 && "hidden lg:block"}`}
        >
          <CaseCard data={c} />
        </motion.div>
      ))}
    </motion.section>
  );
}
