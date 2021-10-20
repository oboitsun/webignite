import React from "react";
import CaseCard from "./CaseCard";

const cases = [
  {
    imgSrc: "/imgs/pic1.png",
    name: "Case 1",
    btn: { text: "learn more", styling: "grn", href: "/" },
  },
  {
    imgSrc: "/imgs/pic2.png",
    name: "Case 2",
    btn: { text: "learn more", styling: "ylw", href: "/" },
  },
  {
    imgSrc: "/imgs/pic3.png",
    name: "Case 3",
    btn: { text: "learn more", styling: "grn", href: "/" },
  },
  {
    imgSrc: "/imgs/pic4.png",
    name: "Case 4",
    btn: { text: "learn more", styling: "ylw", href: "/" },
  },
  {
    imgSrc: "/imgs/pic5.png",
    name: "Case 5",
    btn: { text: "learn more", styling: "grn", href: "/" },
  },
  {
    imgSrc: "/imgs/pic6.png",
    name: "Case 6",
    btn: { text: "learn more", styling: "ylw", href: "/" },
  },
  {
    imgSrc: "/imgs/pic7.png",
    name: "Case 7",
    btn: { text: "learn more", styling: "grn", href: "/" },
  },
  {
    imgSrc: "/imgs/pic1.png",
    name: "and more projects to come ",
    btn: { text: "order now", styling: "ylw", href: "/" },
    hovered: true,
  },
];
export default function ShowCase() {
  return (
    <section className="w-full grid grid-rows-2  grid-cols-4">
      {cases.map((c, i) => (
        <div key={i} className="w-full h-[25vw]  relative">
          <CaseCard data={c} />
        </div>
      ))}
    </section>
  );
}
