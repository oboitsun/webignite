import Link from "next/link";
import Button from "./Button";
import { Link as Anchor } from "react-scroll";
import Logo from "./Logo";
import Burger from "./Burger";
const linkProps = {
  spy: true,
  smooth: true,
  offset: -100,
  duration: 500,
  activeClass: "active",
  className: "cursor-pointer",
};
const links = [
  { href: "packages", text: "Packages" },
  { href: "process", text: "Process" },
  { href: "testimonials", text: "Testimonials" },
  { href: "contact-us", text: "Contact us" },
];
export default function Header({ showMenu, setShowMenu, fixed, scrolled }) {
  return (
    <div
      className={`transition-all duration-500 ${
        fixed && "fixed top-0 left-0 w-full z-20"
      } ${
        fixed && scrolled
          ? "bg-purp bg-opacity-100 shadow-xl  py-3"
          : "bg-opacity-0 py-10"
      }  `}
    >
      <div
        className={` max-w-864 xl:max-w-1080 mx-auto  flex items-center justify-between  z-[2] px-10 lg:px-0`}
      >
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className="lg:hidden">
          <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
        <div className="hidden lg:flex text-white font-bold text-xs xl:text-lg leading-none items-center">
          {links.map((link, i) => (
            <Anchor key={i} {...linkProps} to={link.href}>
              <p
                className={`group relative  lg:mr-10 xl:mr-14 ${
                  i % 2 === 0 ? "hover:text-grn" : "hover:text-ylw"
                } transition-all`}
              >
                {link.text}
                <span
                  className={`block absolute -bottom-2 group-hover:w-full h-1 transition-all w-0 ${
                    i % 2 === 0 ? "bg-grn" : "bg-ylw"
                  }`}
                ></span>
              </p>
            </Anchor>
          ))}
          <Button text="order now" styling="ylw" href="/" />
          <Link href="tel:0800726543">
            <a className="ml-5 text-xs lg:text-lg text-white underline">0800 726 543</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
