import React from "react";
import Image from "next/image";
import Button from "./Button";
export default function CaseCard({ data }) {
  return (
    <div className="w-full h-full relative group overflow-hidden">
      <div className="group-hover:scale-110 w-full h-full transition-transform">
        <Image src={data.imgSrc} alt={data.name} layout="fill" objectFit="cover" />
      </div>
      <div
        className={`case-card ${
          data?.hovered ? "opacity-100 " : "opacity-0"
        } bg-black group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto bg-opacity-70 `}
      >
        <p className="uppercase font-black text-2xl text-white pb-3 max-w-[265px] lg:max-w-[210px] text-center">
          {data.name}
        </p>
        <Button {...data.btn} />
      </div>
    </div>
  );
}
