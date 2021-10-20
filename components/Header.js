import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
const links = [
  { href: "/", text: "Packages" },
  { href: "/", text: "Process" },
  { href: "/", text: "Testimonials" },
  { href: "/", text: "Contact us" },
];
export default function Header() {
  //absolute top-0 w-full left-1/2 transform -translate-x-1/2
  return (
    <div className="max-w-1080 mx-auto py-10 flex items-center justify-between relative z-[1]">
      <Link href="/">
        <a>
          <Image
            priority={true}
            layout="fixed"
            width={154}
            height={65}
            src="/imgs/logo-white.png"
            alt="logo"
          />
        </a>
      </Link>
      <div className="flex text-white font-bold text-lg leading-none gap-14 items-center">
        {links.map((link, i) => (
          <Link key={i} href={link.href}>
            <a
              className={`group relative ${
                i % 2 === 0 ? "hover:text-grn" : "hover:text-ylw"
              } transition-all`}
            >
              {link.text}
              <div
                className={`absolute -bottom-2 group-hover:w-full h-1 transition-all w-0 ${
                  i % 2 === 0 ? "bg-grn" : "bg-ylw"
                }`}
              ></div>
            </a>
          </Link>
        ))}
        <Button text="order now" styling="ylw" href="/" />
      </div>
    </div>
  );
}
