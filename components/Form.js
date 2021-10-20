import React from "react";
import Button from "./Button";
import FormInput from "./FormInput";
import Image from "next/image";

export default function Form() {
  return (
    <div className="bg-purp relative py-24">
      <div className="absolute left-3/4 top-1/2 transform -translate-y-1/2">
        <Image src="/imgs/nz-map.png" layout="fixed" width={276} height={392} alt="NZ" />
      </div>
      <div className=" max-w-1080 mx-auto flex gap-[30px] ">
        <div className="grid grid-cols-1 grid-rows-4 gap-y-[30px] max-w-[400px] w-full flex-shrink-0 pt-4">
          <FormInput plchldr="Name" />
          <FormInput plchldr="Phoe Number / Email" />
          <FormInput plchldr="How can we help?" />
          <Button full text="Get in touch now" styling="grn" />
        </div>
        <div className=" text-white uppercase">
          <p className="max-w-[582px] font-black text-[60px] leading-tight ">
            Do you have some questions for us?
          </p>
          <p className="text-xl font-semibold">We are based in Tauranga, New zealand.</p>
          <p className="max-w-[582px] font-black  text-ylw text-[56px] leading-none pt-3">
            0800 726 543
          </p>
          <p className="max-w-[582px] font-semibold text-ylw text-xl underline   ">
            hello@webignite.nz
          </p>
        </div>
      </div>
    </div>
  );
}
