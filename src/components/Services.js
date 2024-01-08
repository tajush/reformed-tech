import { card_left, card_right } from "@/constants";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className=" px-[80px] py-[36px] card-bg ">
      <div className="flex  ">
        <div className="card-left-bg ">
          {" "}
          <p className="border-b-[1px] w-fit mb-[49px] ">
            Offshore Service Approach.
          </p>
          <div>
            {card_left.map((item, index) => {
              return (
                <div key={index} className="mb-[30px]">
                  <Image src={item.icon} alt="icon" />
                  <p className="font-medium">{item.title}</p>
                  <p>{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="ml-[50px]">
          <p className="border-b-[1px] w-fit mb-[49px]">Expanded Solutions.</p>
          <div className="">
            {card_right.map((item, index) => {
              return (
                <div key={index} className="flex gap-[15px] mb-[35px]  ">
                  <Image src={item.icon} alt="icon" />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
