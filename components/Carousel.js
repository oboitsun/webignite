import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "./Button";

const comments = [
  {
    author: "Morgan Engineering",
    cmnt: "Web Ignite helped me build a website that reflected our business well.",
    avatar: "/imgs/pic6.png",
    bg: "bg-purp",
  },
  {
    author: "Maui Sheep Milk",
    cmnt: "We had a great experience with the website we had done from the team at Web Ignite",
    avatar: "/imgs/pic2.png",
    bg: "bg-ylw",
  },
  {
    author: "City Sanctuary",
    cmnt: "I highly recommend their team for a website that looks great at an affordable price.",
    avatar: "/imgs/pic3.png",
    bg: "bg-grn",
  },
];
export default function Carousel() {
  return (
    <>
      <div className=" mx-auto relative z-[1] ">
        <Swiper
          className="hidden lg:block max-w-1080 mx-auto  carousel"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {comments.map((c, i) => (
            <SwiperSlide key={i} className="w-max">
              <div className="relative  pb-10">
                <div className={`carousel-avatar ${c.bg}`}>
                  <img className="w-full top-0 left-0" src={c.avatar} alt={c.author} />
                </div>
                <div className="w-full max-w-[280px] bg-white relative rounded-[20px] min-h-[250px] h-auto mx-auto pt-20 pb-5 px-5 flex flex-col justify-end items-center">
                  <p className="text-center font-semibold text-sm my-auto">“{c.cmnt}”</p>
                  <Button text="order now" styling="grn" full href={c.href} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* mob version*/}
        <Swiper
          className="lg:hidden  mx-auto  carousel packages mob"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1.2}
          loop={true}
          centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {comments.map((c, i) => (
            <SwiperSlide key={i} className="w-max ">
              <div className="relative  pb-10">
                <div className={`carousel-avatar ${c.bg}`}>
                  <img className="w-full top-0 left-0" src={c.avatar} alt={c.author} />
                </div>
                <div className="w-full  bg-white relative rounded-[20px] min-h-[250px] h-auto mx-auto pt-20 pb-5 px-5 flex flex-col justify-end items-center">
                  <p className="text-center font-semibold text-sm my-auto">“{c.cmnt}”</p>
                  <Button text="order now" styling="grn" full href={c.href} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
