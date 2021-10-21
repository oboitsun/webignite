import React from "react";

export default function FormInput({ type = "text", plchldr = "" }) {
  return (
    <input
      type={type}
      placeholder={plchldr}
      className={
        type === "submit"
          ? "cursor-pointer uppercase text-base px-4 py-3 rounded-full font-bold leading-none text-white flex items-center justify-center transition-all hover:scale-90 bg-grn w-full "
          : "rounded-full bg-white p-5  text-sm font-semibold placeholder-black appearance-none"
      }
    />
  );
}
