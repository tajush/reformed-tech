import React from "react";
import img from "../assets/techImg.svg";
import Image from "next/image";
import { step } from "@/constants";

const WhyReformedtech = () => {
  return (
    <div className="container">
      <div className=" max-w-[1440px] md:mx-[80px] xs:mx-[16px] mb-[118px] ">
        <div className=" grid   md:grid-cols-2   xs:grid-cols-1  ">
          {" "}
          <div className="bg-[#FFF3F1] xs:max-sm:text-center  md:pl-[24px] xs:max-sm:px-[15px] xs:pt-[20px] xs:max-md:pb-[24px] md:pt-[50px] xs:max-md:rounded-[40px] md:rounded-tl-[40px] md:rounded-bl-[40px]">
            <p className="md:text-[24px] xs:text-[16px]">Why Reformedtech</p>
            <p className="md:text-[32px] xs:text-[24px] font-semibold mb-[63px]">
              Exceptional software consulting
            </p>
            <div className="grid md:grid-cols-2  xs:grid-cols-1 gap-x-[53px] gap-y-[40px]  ">
              {step.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" xs:max-sm:grid xs:max-sm:place-items-center"
                  >
                    <Image className="mb-[15px] " src={item.icon} alt="icon" />
                    <p className="text-[16px] mb-[15px] font-semibold ">
                      {item.title}
                    </p>
                    <p className="text-[14px]">{item.content}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="xs:hidden md:flex">
            <Image src={img} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyReformedtech;
