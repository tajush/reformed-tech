import { Case_studies1, Case_studies2, Case_studies3 } from "@/constants";
import Image from "next/image";
import React from "react";
import SimpleBtn from "./SimpleBtn";

const CaseStudies = () => {
  return (
    <div className="container">
      <div className="  max-w-[1440px] mx-[80px] px-[24px]  py-[26px]">
        <p className="text-[42px] font-medium text-center">
          Our diverse case studies
        </p>
        <div className="   ">
          <div className=" ">
            {Case_studies1.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-stretch  items-center mb-[50px] gap-[30px] case1-bg  "
                >
                  <Image
                    className="max-w-[625px] max-h-[450px]"
                    width="auto"
                    height="auto"
                    src={item.image}
                    alt="image"
                  />
                  <div>
                    {" "}
                    <p className="text-[22px] font-medium">{item.title}</p>
                    <p className="text-[16px] mb-[20px]">{item.subtitle}</p>
                    <p className="text-[16px] mb-[30px] max-w-[600px] ">
                      {item.content}
                    </p>
                    <Image src={item.icon} alt="icon" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" ">
            {Case_studies2.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex case2-bg flex-row-reverse items-center justify-between mb-[50px]  pl-[24px]  "
                >
                  <Image
                    className="max-w-[625px] max-h-[450px]"
                    width="auto"
                    height="auto"
                    src={item.image}
                    alt="image"
                  />
                  <div>
                    {" "}
                    <p className="text-[22px] font-medium">{item.title}</p>
                    <p className="text-[16px] mb-[20px]">{item.subtitle}</p>
                    <p className="text-[16px] mb-[30px] max-w-[600px] ">
                      {item.content}
                    </p>
                    <Image src={item.icon} alt="icon" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="case3-bg ">
            {Case_studies3.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-stretch   items-center  gap-[30px]    "
                >
                  <Image
                    className="max-w-[625px] max-h-[450px]"
                    width="auto"
                    height="auto"
                    src={item.image}
                    alt="image"
                  />
                  <div>
                    {" "}
                    <p className="text-[22px] font-medium">{item.title}</p>
                    <p className="text-[16px] mb-[20px]">{item.subtitle}</p>
                    <p className="text-[16px] mb-[30px] max-w-[600px] ">
                      {item.content}
                    </p>
                    <Image
                      className="text-red-700"
                      src={item.icon}
                      alt="icon"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center mt-[60px]">
            {" "}
            <SimpleBtn title={"View all projects"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
