import Image from "next/image";
import React from "react";
import icon from "../assets/get-icon.svg";

const GetButton = () => {
  return (
    <div className="md:bg-[#F8523B] xs:bg-[#480F07] flex xs:w-full md:w-fit gap-[10px] rounded-md px-[17px] py-[14px] justify-center items-center">
      <p className="font-medium text-Neutral_White">Get free estimate</p>
      <Image src={icon} alt="icon" />
    </div>
  );
};

export default GetButton;
