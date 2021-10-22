import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import ChoosePackageSection from "../components/ChoosePackageSection";
import Form from "../components/Form";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ShowCase from "../components/ShowCase";
import CarouselSection from "../components/CarouselSection";
import { motion } from "framer-motion";
import useInView from "react-cool-inview";
import HeaderModal from "../components/HeaderModal";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { observe, inView } = useInView({
    threshold: 0.2,
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e) => {
    if (e.target.scrollingElement.scrollTop < 10) setScrolled(false);
    if (e.target.scrollingElement.scrollTop >= 10) setScrolled(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="min-h-screen bg-purp overflow-x-hidden ">
      <Head>
        <title>Webignite - Home</title>
        <meta name="description" content="Webiginte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header fixed showMenu={showMenu} setShowMenu={setShowMenu} scrolled={scrolled} />
      <div className="w-full  relative h-[697px] lg:h-[753px] xl:h-[854px] maxh overflow-x-hidden hero-section">
        <HeroSection />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="w-full h-full absolute top-0 left-0 z-0"
        >
          <Image
            priority={true}
            objectFit="cover"
            layout="fill"
            width={1440}
            height={854}
            src="/imgs/comb-pattern.png"
            alt="pattern"
          />
        </motion.div>
        <motion.div className="absolute bottom-0 left-0 w-full h-10 lg:h-80  bg-gradient-to-t from-purp to-transparent"></motion.div>
      </div>
      <div ref={observe}>
        <ChoosePackageSection />
      </div>

      <ShowCase />
      <CarouselSection />
      <Form />

      <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      <HeaderModal showMenu={showMenu} setShowMenu={setShowMenu} scrolled={scrolled} />
    </div>
  );
}
