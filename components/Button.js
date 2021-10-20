import React from "react";
import Link from "next/link";
export default function Button({ href = "", text = "", styling, full }) {
  const styles = { ylw: "bg-ylw", grn: "bg-grn" };
  return (
    <Link href={href}>
      <a
        className={`${
          full && "w-full"
        } uppercase text-base px-4 py-3 rounded-full font-bold text-white flex items-center justify-center ${
          styles[styling]
        }`}
      >
        {text}
      </a>
    </Link>
  );
}
