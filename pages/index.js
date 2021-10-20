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

export default function Home() {
  const { observe, inView } = useInView({
    threshold: 0.4,
    onEnter: ({ unobserve }) => {
      unobserve();
    },
  });
  return (
    <div className="min-h-screen bg-purp">
      <Head>
        <title>Webignite - Home</title>
        <meta name="description" content="Webiginte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full  relative h-[854px] maxh overflow-hidden">
        <Header />
        <HeroSection />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="w-full h-full absolute top-0 left-0 z-0"
        >
          <Image
            priority={true}
            layout="responsive"
            width={1440}
            height={854}
            src="/imgs/comb-pattern.png"
            alt="pattern"
          />
        </motion.div>
        <motion.div
          initial={{ height: 800 }}
          animate={{ height: 320 }}
          transition={{ duration: 1.5, delay: 0 }}
          className="absolute bottom-0 left-0 w-full  bg-gradient-to-t from-purp to-transparent"
        ></motion.div>
      </div>
      <div ref={observe}>
        <ChoosePackageSection />
      </div>
      {inView && (
        <>
          {" "}
          <ShowCase />
          <CarouselSection />
          <Form />
        </>
      )}
      <Header />
    </div>
  );
}
