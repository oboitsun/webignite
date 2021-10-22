import React from "react";
import Image from "next/image";
import Packages from "./Packages";
import Process from "./Process";
export default function ChoosePackageSection() {
  return (
    <section id="packages" className="bg-purp pb-10 pt-20 lg:pt-0">
      <div className=" max-w-864 xl:max-w-1080 mx-auto relative">
        <div className="flex lg:flex-row flex-col text-center lg:text-left text-white items-center justify-between uppercase ">
          <span className="font-black text-[26px] lg:text-[32px]  xl:text-[40px] leading-tight xl:leading-[48px] max-w-[348px] xl:max-w-[435px] ">
            Choose Your web design package!
          </span>
          <span className="text-[10px] lg:text-sm xl:text-lg leading-tight font-semibold max-w-[233px] lg:max-w-[321px] xl:max-w-[411px]">
            All of our websites can also include an e-commerce store if needed.
          </span>
          <div className="w-[110px] lg:w-[148px] xl:w-[164px] flex-shrink-0">
            <Image
              src="/imgs/stripe.png"
              alt="payment-stripe"
              layout="responsive"
              width={164}
              height={45}
            />
          </div>
        </div>
        <Packages />
        <div id="process">
          <Process />
        </div>
        <div className="absolute hidden lg:block right-[-13%] bottom-0 transform  w-[18%]">
          <Image
            src="/imgs/nz-map.png"
            layout="responsive"
            width={276}
            height={392}
            alt="NZ"
          />
        </div>
      </div>
    </section>
  );
}
