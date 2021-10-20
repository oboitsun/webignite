import Head from "next/head";
import Image from "next/image";
import ChoosePackageSection from "../components/ChoosePackageSection";
import Form from "../components/Form";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ShowCase from "../components/ShowCase";
import CarouselSection from "../components/CarouselSection";

export default function Home() {
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
        <div className="w-full h-full absolute top-0 left-0 z-0">
          <Image
            layout="responsive"
            width={1440}
            height={854}
            src="/imgs/comb-pattern.png"
            alt="pattern"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-purp to-transparent"></div>
      </div>
      <ChoosePackageSection />
      <ShowCase />
      <CarouselSection />
      <Form />
      <Header />
    </div>
  );
}
