"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import logo from "../assets/footer-logo.svg";
import dot from "../assets/footer-dot.svg";
import dot2 from "../assets/dot-mbl.svg";
import icon from "../assets/footer-icon.svg";
import { footerLinks, socialMedia } from "@/constants";
import drop_down from "../assets/drop_down_footer.svg";

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="container footer-bg  -mt-[200px] ">
      {" "}
      <div className="">
        {" "}
        <div className="max-w-[1440px] md:mx-[80px] px-[24px] pt-[250px]  py-[26px]">
          {" "}
          <div className=" flex flex-wrap justify-center  md:justify-between items-start mb-[86px] ">
            <div className="flex flex-col flex-wrap justify-center items-center ">
              <Image className="mb-[60px]" src={logo} alt="logo" />
              <Image
                className="mb-[31.26px] hidden md:flex"
                src={dot}
                alt="dot"
              />
              <Image
                className="mb-[31.26px] flex md:hidden "
                src={dot2}
                alt="dot"
              />
              <Image src={icon} alt="icon" />
            </div>
            <div className="xs:inline-block md:hidden mt-[50px]   ">
              {footerLinks.map((link, index) => {
                return (
                  <div key={index}>
                    <div className="flex gap-[190px] ">
                      {" "}
                      <div className="text-[#E6EAEB] mb-[30px]  font-semibold">
                        {link.title}
                      </div>
                      <div>
                        <Image
                          onClick={() => setOpen(!open)}
                          src={drop_down}
                          alt="drop_down"
                        />
                      </div>
                    </div>
                    {open && (
                      <ul>
                        {link.links.map((name, index) => {
                          return (
                            <li
                              className="text-[#CDD4D5] mb-3  leading-relaxed"
                              key={index}
                            >
                              {" "}
                              {name.name}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="md:flex hidden   flex-wrap gap-[212.096px] ml-[104px] ">
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
                            className="text-[#CDD4D5] mb-3 flex text-[16px]  leading-relaxed"
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
            <div className="md:ml-[104px] flex flex-col xs:justify-center md:justify-start md:items-start xs:items-center">
              <p className="text-[#E6EAEB] font-semibold mb-[25px] ">
                Follow Us
              </p>
              <div className="flex flex-row   ">
                {socialMedia.map((icon, index) => {
                  return (
                    <div key={index} className="  ">
                      <div className="mr-[10px]   ">
                        {" "}
                        <Image src={icon.icon} alt="icon" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex  xs:text-center  md:flex-row flex-wrap xs:flex-col md:justify-between text-[#819297] mb-[49px] xs:gap-[10px]  text-[14px]">
            <p>Reformedtech — Design & Development</p>
            <p>Legal & Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
