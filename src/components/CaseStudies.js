import { Case_studies1, Case_studies2, Case_studies3 } from "@/constants";
import Image from "next/image";
import React from "react";
import SimpleBtn from "./SimpleBtn";

const CaseStudies = () => {
  return (
    <div>
      <p className="text-[42px] font-medium text-center">
        Our diverse case studies
      </p>
      <div className=" container px-[24px]  py-[26px]  ">
        <div className="case1-bg flex justify-between">
          {Case_studies1.map((item, index) => {
            return (
              <div key={index} className="flex  items-center gap-[30px]   ">
                <Image width={725} src={item.image} alt="image" />
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
        <div className="case2-bg ">
          {Case_studies2.map((item, index) => {
            return (
              <div
                key={index}
                className="flex  flex-row-reverse items-center justify-between  ml-[24px]  "
              >
                <Image width={725} src={item.image} alt="image" />
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
              <div key={index} className="flex   items-center  gap-[30px]    ">
                <Image width={725} src={item.image} alt="image" />
                <div>
                  {" "}
                  <p className="text-[22px] font-medium">{item.title}</p>
                  <p className="text-[16px] mb-[20px]">{item.subtitle}</p>
                  <p className="text-[16px] mb-[30px] max-w-[600px] ">
                    {item.content}
                  </p>
                  <Image className="text-red-700" src={item.icon} alt="icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <SimpleBtn title={"View all projects"} />
    </div>
  );
};

export default CaseStudies;
