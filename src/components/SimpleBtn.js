import Image from "next/image";
import React from "react";
import icon from "../assets/red-icon.svg";

const SimpleBtn = ({ title }) => {
  return (
    <div className="simpleBtn-bg w-fit flex items-center text-[#F8523B] font-medium gap-[10px] px-[17px] py-[14px] ">
      <p>{title}</p>
      <Image className="text-[#F8523B] " src={icon} alt="icon" />
    </div>
  );
};

export default SimpleBtn;
