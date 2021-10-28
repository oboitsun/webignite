import React, { useState } from "react";
import Button from "./Button";
import FormInput from "./FormInput";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };
    fetch("https://webignite.vercel.app/api/hello", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };
  const { ref, inView } = useInView({ threshold: 0.5 });
  const cont = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };
  const item = { show: { y: 0, opacity: 1 }, hidden: { y: -100, opacity: 0 } };
  return (
    <div
      id="contact-us"
      className="bg-purp relative py-24 px-10 lg:px-0 overflow-x-hidden"
    >
      <div className=" max-w-864 xl:max-w-1080 mx-auto flex gap-[30px] lg:flex-row flex-col items-center">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="grid grid-cols-1 grid-rows-4 gap-y-[30px] max-w-[400px] w-full flex-shrink-0 pt-4 order-2 lg:order-1"
        >
          <FormInput
            plchldr="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <FormInput
            plchldr=" Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormInput
            plchldr="How can we help?"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <FormInput
            sent={submitted}
            disabled={submitted}
            value={submitted ? "Thank you" : "SEND"}
            type="submit"
          />
        </form>

        <motion.div
          variants={cont}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={ref}
          className=" text-white uppercase relative  lg:order-2 order-1 text-center lg:text-left"
        >
          <div className="absolute lg:left-3/4 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transform lg:-translate-y-1/2 w-2/3 max-w-[220px]">
            <img
              className="w-full"
              src="/imgs/nz-map.png"
              layout="responsive"
              width={276}
              height={392}
              alt="NZ"
            />
          </div>
          <motion.p
            variants={item}
            key={1}
            className="lg:max-w-[582px] font-black text-[28px] lg:text-[41px] xl:text-[60px] leading-tight "
          >
            Do you have some questions for us?
          </motion.p>
          <motion.p
            variants={item}
            key={11}
            className=" text-base lg:text-xl font-semibold"
          >
            We are based in Tauranga, New zealand.
          </motion.p>
          <motion.p
            variants={item}
            key={12}
            className="lg:max-w-[582px] font-black  text-ylw text-[40px] lg:text-[56px] leading-none pt-3"
          >
            0800 726 543
          </motion.p>
          <motion.p
            variants={item}
            key={13}
            className="lg:max-w-[582px] font-semibold text-ylw text-base lg:text-xl underline   "
          >
            hello@webignite.nz
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
