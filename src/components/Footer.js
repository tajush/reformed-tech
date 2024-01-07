import Image from "next/image";
import React from "react";
import logo from "../assets/footer-logo.svg";
import dot from "../assets/footer-dot.svg";
import icon from "../assets/footer-icon.svg";
import { footerLinks, socialMedia } from "@/constants";

const Footer = () => {
  return (
    <div className="container footer-bg  -mt-[200px] ">
      {" "}
      <div className="">
        {" "}
        <div className="max-w-[1440px] mx-[80px] px-[24px] pt-[250px]  py-[26px]">
          {" "}
          <div className=" flex  justify-between items-start mb-[86px] ">
            <div className="flex flex-col justify-center items-center ">
              <Image className="mb-[60px]" src={logo} alt="logo" />
              <Image className="mb-[31.26px]" src={dot} alt="dot" />
              <Image src={icon} alt="icon" />
            </div>
            <div className="flex gap-[212.096px] ml-[104px] ">
              {footerLinks.map((link, index) => {
                return (
                  <div key={index}>
                    <p className="text-[#E6EAEB] mb-[10px] font-semibold">
                      {link.title}
                    </p>
                    <ul>
                      {link.links.map((name, index) => {
                        return (
                          <li
                            className="text-[#CDD4D5] mb-3 leading-relaxed"
                            key={index}
                          >
                            {" "}
                            {name.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="ml-[104px]">
              <p className="text-[#E6EAEB] font-semibold mb-[25px] ">
                Follow Us
              </p>
              <div className="flex  ">
                {socialMedia.map((icon, index) => {
                  return (
                    <div key={index}>
                      <div className="mr-[10px]">
                        {" "}
                        <Image src={icon.icon} alt="icon" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex justify-between text-[#819297] mb-[49px]  text-[14px]">
            <p>Reformedtech — Design & Development</p>
            <p>Legal & Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
