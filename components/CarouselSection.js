import React from "react";
import Carousel from "./Carousel";
import Image from "next/image";

export default function CarouselSection() {
  return (
    <div className="relative py-[100px]">
      <div className="absolute top-0 left-0 z-0 w-full">
        <Image
          layout="responsive"
          width={1440}
          height={854}
          src="/imgs/comb-pattern.png"
          alt="pattern"
        />
      </div>
      <div className="max-w-1080 mx-auto text-center text-white uppercase pb-[60px] relative z-[1]">
        <p className="text-[40px]  leading-[48px] pb-4 font-black ">
          What do clients have to say about us?
        </p>
        <p className="text-[20px] leading-tight font-semibold">
          We will keep working on your website until you are 100% satisfied - no buts.
        </p>
      </div>
      <Carousel />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-purp to-transparent"></div>
    </div>
  );
}
