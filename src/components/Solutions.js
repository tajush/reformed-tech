import { solutions } from "@/constants";
import Image from "next/image";
import React from "react";
import ExploreBtn from "./ExploreBtn";

const Solutions = () => {
  return (
    <div className="container">
      {" "}
      <div className=" max-w-[1440px] mx-[80px] mt-[107px] px-[24px]  py-[26px]  ">
        {" "}
        <div className="flex items-center justify-center mb-[47px] ">
          <p className="  text-center font-medium text-[42px] leading-relaxed max-w-[850px]">
            Provide solutions for your goals & business challenges
          </p>
        </div>
        <div className=" grid grid-cols-3 grid-flow-row  gap-[30px]  ">
          {solutions.map((item, index) => {
            return (
              <div key={index} className="solution-bg px-[24px] py-[46px]  ">
                <Image src={item.icon} />
                <p className="mt-[28px] font-bold text-[22px]  ">
                  {item.title}
                </p>
                <p className="mt-[10px] text-[16px]">{item.content}</p>
                <div className="mt-[30px] text-[16px]">
                  <div className="flex gap-2">
                    {" "}
                    <Image src={item.frame} />
                    <p>{item.list1}</p>
                  </div>
                  <div className="flex gap-2">
                    {" "}
                    <Image src={item.frame} /> <p>{item.list2}</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={item.frame} /> <p>{item.list3}</p>
                  </div>
                </div>
                <ExploreBtn />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
