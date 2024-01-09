import Image from "next/image";
import React from "react";
import icon from "../assets/red-icon.svg";

const ExploreBtn = () => {
  return (
    <div className=" mt-[24px] gap-[10px]  explore-btn-bg flex max-w-[362px] justify-center items-center px-[17px] py-[14px]">
      <p className="text-[#F8523B] font-semibold">Explore</p>
      <Image src={icon} alt="icon" />
    </div>
  );
};

export default ExploreBtn;
