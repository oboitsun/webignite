import React from "react";

export default function FormInput({ type = "text", plchldr = "" }) {
  return (
    <input
      type={type}
      placeholder={plchldr}
      className="rounded-full bg-white p-5  text-sm font-semibold placeholder-black appearance-none"
    />
  );
}
