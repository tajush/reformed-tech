import React from "react";
import icon from "../assets/button-icon.svg";
import Image from "next/image";
const Button = () => {
  return (
    <div className="flex items-center justify-center px-[25px] py-[14px] nav-btn-bg  gap-[10px] h-[52px] md:w-fit w-full ">
      <Image src={icon} alt="icon" />
      <p className="text-Neutral_White">Schedule a call</p>
    </div>
  );
};

export default Button;
