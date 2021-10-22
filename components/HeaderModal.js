import React, { useEffect } from "react";
import Link from "next/link";
import Button from "./Button";
import { Link as Anchor } from "react-scroll";
import Logo from "./Logo";
import Burger from "./Burger";
import Image from "next/image";

const links = [
  { href: "packages", text: "Packages" },
  { href: "process", text: "Process" },
  { href: "testimonials", text: "Testimonials" },
  { href: "contact-us", text: "Contact us" },
];
export default function HeaderModal({ showMenu, setShowMenu, scrolled }) {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
    className: "cursor-pointer",
    onClick: () => {
      setShowMenu(!showMenu);
    },
  };
  //   useEffect(() => {
  //     if (showMenu && window) {
  //       window.document.body.style.position = "fixed";
  //     }
  //     if (!showMenu && window) {
  //       window.document.body.style.position = "static";
  //     }
  //   }, [showMenu]);
  return (
    <div
      className={`h-screen w-full fixed z-20 top-0 left-0 transition-opacity   bg-purp ${
        showMenu ? " opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="relative w-full h-full flex flex-col pb-10">
        <div
          className={`${
            scrolled ? "py-3" : " py-10"
          }  px-10 flex justify-between items-center`}
        >
          <Link href="/">
            <a className="relative z-[1]">
              <Logo />
            </a>
          </Link>
          <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
        <div className="my-auto flex flex-col text-white font-bold text-lg leading-none gap-[30px] items-center relative z-[1] px-10 pb-[30px]">
          {links.map((link, i) => (
            <>
              <Anchor key={i} {...linkProps} to={link.href}>
                <p className={` relative text-2xl`}>{link.text}</p>
              </Anchor>
              {i < links.length && (
                <div className="bg-white h-px w-full rounded-full bg-opacity-10"></div>
              )}
            </>
          ))}
          <Button className="mb-10" text="order now" styling="grn" href="/" full />
        </div>
        <p className="text-center text-white relative z-[1] font-semibold text-[10px]">
          NZ Marketing Group Limited
          <br />
          All rights reserved, 2021
        </p>
        <div className="w-full h-full absolute top-0 left-0 z-0 pointer-events-none ">
          <div className="w-full h-full opacity-30 bg-black top-0 left-0"></div>
          <Image
            priority={true}
            objectFit="cover"
            layout="fill"
            width={1440}
            height={854}
            src="/imgs/comb-pattern.png"
            alt="pattern"
          />
        </div>
      </div>
    </div>
  );
}
