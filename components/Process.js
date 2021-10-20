import React from "react";
import Image from "next/image";
export default function Process() {
  const process = [
    {
      alt: "pay",
      w: 30,
      h: 30,
      src: "/imgs/wallet.svg",
    },
    {
      alt: "design",
      w: 30,
      h: 30,
      src: "/imgs/pencil.svg",
    },
    {
      alt: "development",
      w: 30,
      h: 18,
      src: "/imgs/brackets.svg",
    },

    {
      alt: "approve",
      w: 30,
      h: 28,
      src: "/imgs/thumbsup.svg",
    },
    {
      alt: "launch",
      w: 30,
      h: 30,
      src: "/imgs/play.svg",
    },
  ];
  return (
    <div className="w-full flex items-center pt-10">
      <p className="text-[40px] leading-[48px] text-grn font-black uppercase flex-shrink-0 w-max pr-10">
        Process:
      </p>
      <div className="flex items-center justify-between flex-grow-1 w-full">
        {process.map((p, i) => (
          <>
            <div
              key={p.alt}
              className="w-[62px] h-[62px] flex items-center justify-center rounded-full bg-grn relative"
            >
              <Image src={p.src} layout="fixed" width={p.w} height={p.h} alt={p.alt} />
              <p className="text-white pt-1 uppercase font-semibold absolute -bottom-8">
                {p.alt}
              </p>
            </div>

            {i < process.length - 1 && (
              <div key={i} className="px-6">
                <Image
                  src="/imgs/arrow-right.svg"
                  layout="fixed"
                  width={28}
                  height={15}
                  alt="arrow"
                />
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
