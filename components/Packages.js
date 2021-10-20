import React from "react";
import Link from "next/link";
import Button from "./Button";
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
    heading: "Starter Site",
    price: "1000",
    descr:
      "A basic standard website that will get you up online and reflect your business.",
  },
  {
    url: "/",
    heading: "Starter Site",
    price: "1000",
    descr:
      "A basic standard website that will get you up online and reflect your business.",
  },
];
export default function Packages() {
  const types = {
    reg: {
      heading: "text-purp",
      price: "text-grn text-[40px] leading-[48px]",
      btn: "grn",
    },
    wide: {
      heading: "text-ylw",
      price: "text-ylw text-[64px] leading-[77px]",
      btn: "ylw",
    },
  };
  return (
    <div className="grid grid-cols-3 gap-10 grid-width">
      {packages.map((p, i) => {
        const stl = types[i === 1 ? "wide" : "reg"];
        return (
          <div
            key={i}
            className="flex flex-col items-center w-full pt-6 pb-[22px] shadow-cstm rounded-[20px] bg-white"
          >
            <p className={`${stl.heading} uppercase text-2xl leading-none font-black`}>
              {p.heading}
            </p>
            <div className="w-full h-px flex-shrink-0 bg-lghtGray my-6"></div>
            <p className={`${stl.price} font-bold `}>
              ${p.price}
              <span className="text-sm">+GST</span>
            </p>
            <div className="px-5 flex-grow-1 mt-auto">
              <p className="text-sm font-semibold text-black text-center pb-5 ">
                {p.descr}
              </p>
              <Button text="Order now" href="/" styling={stl.btn} full />
            </div>
          </div>
        );
      })}
    </div>
  );
}
