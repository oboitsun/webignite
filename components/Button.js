import React from "react";
import Link from "next/link";
export default function Button({ href = "/", text = "", styling, full, props }) {
  const styles = { ylw: "bg-ylw hover:bg-grn", grn: "bg-grn hover:bg-ylw" };
  return (
    <button
      className={`${
        full && "w-full"
      } uppercase text-base px-4 py-3 rounded-full font-bold leading-none text-white flex items-center justify-center transition-all hover:scale-90 ${
        styles[styling]
      }`}
    >
      {text}
    </button>
  );
}
