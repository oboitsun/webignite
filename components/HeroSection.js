import React from "react";
import Image from "next/image";
import Button from "./Button";
const parts = [
  {
    imgUrl: "/imgs/cash.svg",
    Text: (
      <p className="">
        100% money back
        <br /> guarantee if {`you're`}
        <br /> not happy!
      </p>
    ),
  },
  {
    imgUrl: "/imgs/star.svg",
    Text: (
      <p className="">
        Over 10 years <br /> experience in web <br /> and marketing
      </p>
    ),
  },
  {
    imgUrl: "/imgs/rocket.svg",
    Text: (
      <p className="">
        Designed within <br />3 days and built
        <br /> within a week!
      </p>
    ),
  },
];
export default function HeroSection() {
  return (
    <div className="max-w-1080 mx-auto flex gap-9 relative z-[1] xl:pt-10">
      <div className="text-white font-black leading-none uppercase items-start flex flex-col xl:text-7xl w-max ">
        <span className="pb-2">Get a custom</span>
        <span className="text-[118px] text-transparent ylw-shadow "> Website</span>
        <span className="text-[118px]  ylw-shadow">Setup</span>
        <span className="text-5xl pb-6">for you, fast!</span>

        <div className="flex font-medium text-xs leading-[19px] gap-6 pb-5">
          {parts.map((p, i) => (
            <div className="flex gap-[17.5px]" key={i}>
              <Image src={p.imgUrl} alt="icon" layout="fixed" width={26} height={26} />
              {p.Text}
            </div>
          ))}
        </div>
        <Button href="/" styling="grn" text="order now" />
      </div>
      <div className="w-[71%] absolute top-[-10%] left-[50%]">
        <Image
          src="/imgs/LAPTOP1.png"
          alt="laptop"
          layout="responsive"
          width={767}
          height={586}
        />
      </div>
    </div>
  );
}
