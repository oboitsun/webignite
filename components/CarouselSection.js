import React from "react";
import Carousel from "./Carousel";

export default function CarouselSection() {
  return (
    <section id="testimonials" className="relative py-20 xl:py-[100px] xl:pb-40">
      <div className="absolute top-0 left-0 z-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          objectFit="cover"
          layout="fill"
          width={1440}
          height={854}
          src="/imgs/comb-pattern.png"
          alt="pattern"
        />
      </div>
      <div className="w-2/3 md:w-5/6 lg:max-w-864 mx-auto text-center text-white uppercase pb-[60px] relative z-[1]">
        <p className="text-[26px] lg:text-[32px] leading-tight xl:text-[40px]  xl:leading-[48px] xl:pb-4 font-black ">
          What do clients have to say about us?
        </p>
        <p className="text-[10px] lg:text-sm xl:text-[20px] leading-tight font-semibold">
          We will keep working on your website until you are 100% satisfied - no buts.
        </p>
      </div>
      <Carousel />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-purp to-transparent"></div>
    </section>
  );
}
