import React from "react";
import CaseCard from "./CaseCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const cases = [
  {
    imgSrc: "/imgs/pic1.png",
    name: "John Darke",
    href: "http://www.johndarke.co.nz",
  },
  {
    imgSrc: "/imgs/pic2.png",
    name: "Maui Sheep Milk",
    href: "https://mauisheepmilk.co.nz",
  },
  {
    imgSrc: "/imgs/pic3.png",
    name: "City Sanctuary",
    href: "https://citysanctuary.co.nz",
  },
  {
    imgSrc: "/imgs/pic4.png",
    name: "Kakahi Waka Adventures",
    href: "http://kakahi-waka-adventures.webignite.nz",
  },
  {
    imgSrc: "/imgs/pic5.png",
    name: "McMasonry",
    href: "http://mcamasonry.webignite.nz",
  },
  {
    imgSrc: "/imgs/pic6.png",
    name: "Morgan Engineering",
    href: "https://morganengineering.net.nz",
  },
  {
    imgSrc: "/imgs/pic7.png",
    name: "Tony Murray Inspections",
    href: "https://www.tonymurrayinspections.co.nz",
  },
  {
    imgSrc: "/imgs/pic8.png",
    name: "And more projects to come",
    href: "https://kga.co.nz",
    btn: true,
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
      className="w-full grid grid-cols-2 grid-rows-4 lg:grid-rows-2  lg:grid-cols-4 "
    >
      {cases.map((c, i) => (
        <motion.div
          variants={item}
          key={i}
          className={`w-full h-[50vw] lg:h-[25vw]  relative ${
            i === cases.length - 1 && "col-span-2 lg:col-span-1"
          } ${i === cases.length - 2 && "hidden lg:block"}`}
        >
          <CaseCard data={c} clr={i % 2 === 0 && true} hovered={i === cases.length - 1} />
        </motion.div>
      ))}
    </motion.section>
  );
}
