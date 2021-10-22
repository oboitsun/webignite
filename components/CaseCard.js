import React from "react";
import Image from "next/image";
import Button from "./Button";
export default function CaseCard({ data, clr, btn }) {
  return (
    <div className="w-full h-full relative group overflow-hidden">
      <div className="group-hover:scale-110 w-full h-full  transition-transform">
        <Image src={data.imgSrc} alt={data.name} layout="fill" objectFit="cover" />
      </div>
      <div
        className={`block case-card ${
          data?.hovered ? "opacity-100 " : "opacity-0"
        } bg-black group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto bg-opacity-70 `}
      >
        <p
          className={`uppercase font-black text-2xl  max-w-[265px] lg:max-w-[210px] text-center ${
            btn && "pb-6"
          }  ${clr ? "text-grn" : "text-ylw"}`}
        >
          {data.name}
        </p>
        {btn && <Button styling="ylw" />}
      </div>
    </div>
  );
}
