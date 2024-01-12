import React from "react";
import icon from "../assets/newsLtrIcon.svg";
import Image from "next/image";
const NewsLtrmblBtn = () => {
  return (
    <div className="flex items-center justify-center px-[10px] py-[16px] NewsLtrmblBtn-bg  gap-[5px] h-[52px] w-[181px] md:hidden ">
      <Image src={icon} alt="icon" />
      <p className="text-[#F8523B]">Schedule a call</p>
    </div>
  );
};

export default NewsLtrmblBtn;
