import Image from "next/image";
import React from "react";
import icon from "../assets/red-icon.svg";
import icon2 from "../assets/white-arrow.svg";

const SimpleBtn = ({ title }) => {
  return (
    <div className="simpleBtn-bg md:w-fit xs:bg-[#480F07] md:bg-transparent xs:w-full justify-center flex xs:text-white items-center md:text-[#F8523B] font-medium gap-[10px] px-[17px] py-[14px] ">
      <p>{title}</p>
      <Image className="hidden md:flex  " src={icon} alt="icon" />
      <Image className="md:hidden flex " src={icon2} alt="icon" />
    </div>
  );
};

export default SimpleBtn;
