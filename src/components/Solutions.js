import { solutions } from "@/constants";
import Image from "next/image";
import React from "react";
import ExploreBtn from "./ExploreBtn";

const Solutions = () => {
  return (
    <div className="container">
      {" "}
      <div className=" max-w-[1440px] md:mx-[80px] mt-[107px] md:px-[24px] xs:mx-[16px]  md:py-[26px]  ">
        {" "}
        <div className="md:flex md:items-center md:justify-center mb-[47px] ">
          <p className="  text-center font-medium xs:text-[24px] md:text-[42px] md:leading-relaxed md:max-w-[850px] ">
            Provide solutions for your goals & business challenges
          </p>
        </div>
        <div className=" grid xs:grid-cols-1   md:grid-cols-3 md:grid-flow-row  gap-[30px]  ">
          {solutions.map((item, index) => {
            return (
              <div
                key={index}
                className="solution-bg custom-bg px-[24px] py-[46px]  "
              >
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
                <div className="xs:block md:hidden">
                  <ExploreBtn />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
