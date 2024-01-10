import { Case_studies1, Case_studies2, Case_studies3 } from "@/constants";
import Image from "next/image";
import React from "react";
import SimpleBtn from "./SimpleBtn";
import ExploreBtn from "./ExploreBtn";

const CaseStudies = () => {
  return (
    <div className="container">
      <div className="  max-w-[1440px] md:mx-[80px] md:px-[24px] xs:mx-[16px]  md:py-[26px]">
        <p className="text-[42px] font-medium text-center">
          Our diverse case studies
        </p>
        <div className="   ">
          <div className=" ">
            {Case_studies1.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex md:justify-stretch md:flex-nowrap flex-wrap items-center mb-[50px] md:gap-[30px] case-bg case-hover-bg  "
                >
                  <Image
                    className="max-w-[625px]  md:w-full w-fit  "
                    width="auto"
                    height="auto"
                    src={item.image}
                    alt="image"
                  />
                  <div className="px-[15px]">
                    {" "}
                    <p className="text-[22px] font-medium">{item.title}</p>
                    <p className="text-[16px] mb-[20px]">{item.subtitle}</p>
                    <p className="text-[16px] mb-[30px] max-w-[600px] ">
                      {item.content}
                    </p>
                    <Image src={item.icon} alt="icon" />
                    <div className="md:hidden flex mb-[29px]">
                      {" "}
                      <ExploreBtn />
                    </div>
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
                  className="flex  case-bg case-hover-bg  md:flex-nowrap flex-wrap flex-row-reverse items-center justify-between mb-[50px]  md:pl-[24px]  "
                >
                  <Image
                    className="max-w-[625px] w-full "
                    width="auto"
                    height="auto"
                    src={item.image}
                    alt="image"
                  />
                  <div className="px-[15px]">
                    {" "}
                    <p className="text-[22px] font-medium">{item.title}</p>
                    <p className="text-[16px] mb-[20px]">{item.subtitle}</p>
                    <p className="text-[16px] mb-[30px] max-w-[600px] ">
                      {item.content}
                    </p>
                    <Image src={item.icon} alt="icon" />
                    <div className="md:hidden flex mb-[29px]  ">
                      {" "}
                      <ExploreBtn />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" case-bg case-hover-bg ">
            {Case_studies3.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-stretch  md:flex-nowrap flex-wrap  items-center  md:gap-[30px]    "
                >
                  <Image
                    className="md:max-w-[625px] w-full"
                    width="auto"
                    height="auto"
                    src={item.image}
                    alt="image"
                  />
                  <div className="px-[15px]">
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
                    <div className="md:hidden flex mb-[29px]">
                      {" "}
                      <ExploreBtn />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center xs:mb-[60px] md:mb-[0px] mt-[60px]">
            {" "}
            <SimpleBtn title={"View all projects"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
