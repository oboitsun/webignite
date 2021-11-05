import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const packages = [
  {
    url: "/",
    heading: "Starter Site",
    price: "1000",
    descr:
      "A basic standard website that will get you up online and reflect your business.",
  },
  {
    url: "/",
    heading: "standard site",
    price: "1995",
    descr:
      "We spend more time on the design and functionality of your website to fit to your needs.",
  },
  {
    url: "/",
    heading: "Premium Site",
    price: "3500",
    descr:
      "We spend time doing a more custom design and solution to ensure your website is top level.",
  },
];
export default function Packages() {
  const types = {
    reg: {
      spacing: "py-8  text-white border-white border hover:text-black  hover:scale-110",
      heading: "",
      price: " text-[40px] leading-[48px] ",

      btn: "grn",
    },
    wide: {
      spacing: "py-10 bg-white hover:text-white hover:bg-ylw hover:scale-110 z-[2]",
      heading: " ",
      price: "text-ylw text-[56px] leading-[67px] group-hover:text-white",
      btn: "ylw",
    },
  };
  return (
    <>
      <div className="block lg:hidden mx-auto relative z-[1]  pb-10">
        <Swiper
          className=" carousel packages h-full "
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
        >
          {packages.map((p, i) => {
            const stl = types[i === 1 ? "wide" : "reg"];
            return (
              <SwiperSlide key={i} className="w-max px-10 py-10 ">
                <div className="h-80 flex items-center px-2">
                  <div
                    key={i}
                    className={`flex relative overflow-hidden flex-col items-center w-full   rounded-[20px]  ${stl.spacing} my-auto  `}
                  >
                    {i === 1 && (
                      <div className="bg-grn uppercase  text-[8px] leading-none -translate-x-1/2 -translate-y-1/2 transform -rotate-45 font-bold py-1.5 absolute top-8 left-8 px-10">
                        recommended
                      </div>
                    )}
                    <p className={`${stl.price} font-bold `}>
                      ${p.price}
                      <span className="text-sm">+GST</span>
                    </p>
                    <p
                      className={`${stl.heading} uppercase text-base leading-none font-bold pt-4 pb-2`}
                    >
                      {p.heading}
                    </p>
                    <div className="px-[30px] flex-grow-1 mt-auto">
                      <p className="text-xs font-semibold  text-center pb-5 ">
                        {p.descr}
                      </p>
                      <Button text="Order now" href="/" styling={stl.btn} full />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="hidden lg:flex justify-center items-center py-14">
        {packages.map((p, i) => {
          const stl = types[i === 1 ? "wide" : "reg"];
          const disableBorder = {
            0: "border-r-0 rounded-tr-none rounded-br-none ",
            1: "",
            2: "border-l-0 rounded-tl-none rounded-bl-none ",
          };
          return (
            <div
              key={i}
              className={`transition-all duration-500  flex flex-col items-center max-w-[288px] relative   overflow-hidden rounded-[20px] ${disableBorder[i]}  ${stl.spacing} my-auto  group`}
            >
              {i === 1 && (
                <div className="bg-grn uppercase text-white text-[8px] leading-none -translate-x-1/2 -translate-y-1/2 transform -rotate-45 font-bold py-1.5 absolute top-8 left-8 px-10 ">
                  recommended
                </div>
              )}
              <p className={`${stl.price} font-bold `}>
                ${p.price}
                <span className="text-sm">+GST</span>
              </p>
              <p
                className={`${stl.heading} uppercase text-base leading-none font-bold pt-4 pb-2`}
              >
                {p.heading}
              </p>
              <div className="px-[30px] flex-grow-1 mt-auto">
                <p className="text-xs font-semibold  text-center pb-5 text-current">
                  {p.descr}
                </p>
                <Button text="Order now" href="/" styling={stl.btn} full />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
