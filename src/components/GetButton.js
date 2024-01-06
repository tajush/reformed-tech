import Image from "next/image";
import React from "react";
import icon from "../assets/get-icon.svg";

const GetButton = () => {
  return (
    <div className="bg-[#F8523B] flex w-fit gap-[10px] rounded-md px-[17px] py-[14px] items-center">
      <p className="font-medium text-Neutral_White">Get free estimate</p>
      <Image src={icon} alt="icon" />
    </div>
  );
};

export default GetButton;
