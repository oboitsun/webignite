import React from "react";
import Image from "next/image";
import Packages from "./Packages";
import Process from "./Process";
export default function ChoosePackageSection() {
  return (
    <section className="bg-purp pb-10">
      <div className="max-w-1080 mx-auto ">
        <div className="flex text-white items-center justify-between uppercase xl:pb-[60px]">
          <span className="font-black text-[40px] leading-[48px] max-w-[435px]">
            Choose Your web design package!
          </span>
          <span className="text-lg leading-tight font-semibold max-w-[411px]">
            All of our websites can also include an e-commerce store if needed.
          </span>
          <Image
            src="/imgs/stripe.png"
            alt="payment-stripe"
            layout="fixed"
            width={164}
            height={45}
          />
        </div>
        <Packages />
        <Process />
      </div>
    </section>
  );
}
