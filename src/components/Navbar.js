"use client";
import { useState } from "react";
import Image from "next/image";

import close from "../assets/close.svg";
import drop_down from "../assets/drop-down.svg";
import menu from "../assets/menu.svg";
import logo from "../assets/logo.svg";
import { navLinks, socialMedia } from "../constants";
import Link from "next/link";
import Button from "./Button";
import Services from "@/components/Services";

const Navbar = () => {
  const [active, setActive] = useState("/");
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <nav className="container">
      {" "}
      <div className="max-w-[1440px] md:mx-[80px] md:mt-[30px] ">
        {" "}
        <div className=" w-full  flex  justify-between items-center xs:px-[16px] md:px-[24px] xs:py-[12px] md:py-[26px] bg-[#FFF3F1]   nav-bg ">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>

          <ul className="list-none md:flex hidden items-center  ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-Natural_Orange" : "text-black"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-[16px]"}`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title ? (
                  <Link href={nav.id}>{nav.title}</Link>
                ) : (
                  <div className="flex  flex-col ">
                    <div className="flex items-center gap-2 justify-between relative ">
                      <div>
                        {" "}
                        <Link href={"services"}> Services</Link>
                      </div>
                      <div onClick={() => setOpen(!open)}>
                        <Image src={drop_down} alt="drop_down" />
                      </div>
                    </div>

                    <div
                      className={`absolute left-[50%] -translate-x-[50%]  top-[80px]  bg-white  rounded-lg   h-[497px]   ${
                        open ? " flex text-black" : "hidden"
                      } `}
                    >
                      <Services />
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className="ml-[16px] md:flex hidden   ">
            {" "}
            <Link href={"/"}>
              {" "}
              <Button />
            </Link>
          </div>

          <div
            className="md:hidden flex justify-between items-center 
      "
          >
            <Image
              src={toggle ? close : menu}
              alt="menu"
              className="w-[15px] h-[15px] "
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                toggle
                  ? "fixed z-20 left-0 top-0 w-screen  h-screen  bg-[#FFF] text-black "
                  : "hidden"
              }`}
            >
              <div className="flex h-screen  flex-col">
                <div className="flex justify-between bg-[#FFF] px-[16px] py-[12px]">
                  <Image src={logo} alt="logo" />
                  <p className="cursor-pointer text-md text-black">
                    <Image
                      src={toggle ? close : menu}
                      alt="menu"
                      onClick={() => setToggle(!toggle)}
                    />
                  </p>
                </div>
                <div className="bg-[#FFF3F1] px-[16px] py-[12px]">
                  {" "}
                  <ul className="  mt-[40px]    font-semibold">
                    {navLinks.map((nav, index) => (
                      <li
                        key={nav.id}
                        className={`  font-semibold cursor-pointer ${
                          active === nav.title ? "text-[#E5361D]" : "text-black"
                        } ${
                          index === navLinks.length - 1 ? "mb-0" : "mb-[20px]"
                        }`}
                        onClick={() => setActive(nav.title)}
                      >
                        {nav.title ? (
                          <Link
                            onClick={() => setToggle(!toggle)}
                            href={nav.id}
                          >
                            {nav.title}
                          </Link>
                        ) : (
                          <div className=" bg-[#FFF3F1]  ">
                            <div className=" flex justify-between  ">
                              <div>
                                {" "}
                                <Link href={"services"}> Services</Link>
                              </div>
                              <div onClick={() => setOpen(!open)}>
                                <Image
                                  className={` ${open && "rotate-180"}`}
                                  src={drop_down}
                                  alt="drop_down"
                                />
                              </div>
                            </div>

                            <ul
                              className={`         ${
                                open ? " flex text-black" : "hidden"
                              } `}
                            >
                              <li
                                className={`flex font-medium  text-[16px] leading-[20.6px]    px-[8px] py-[16px]   flex-col  `}
                              >
                                <Link
                                  className=" hover:text-[#E5361D] mb-2"
                                  href={"home"}
                                >
                                  Hire Offshore Team
                                </Link>
                                <Link
                                  className=" hover:text-[#E5361D] mb-2 "
                                  href={"home"}
                                >
                                  UI/UX Design
                                </Link>
                                <Link
                                  className=" hover:text-[#E5361D] mb-2 "
                                  href={"home"}
                                >
                                  Mobile App
                                </Link>
                                <Link
                                  className=" hover:text-[#E5361D] mb-2"
                                  href={"home"}
                                >
                                  MVP Build
                                </Link>
                                <Link
                                  className=" hover:text-[#E5361D] mb-2 "
                                  href={"home"}
                                >
                                  Web Development
                                </Link>
                                <Link
                                  className=" hover:text-[#E5361D] "
                                  href={"home"}
                                >
                                  Digital Marketing
                                </Link>
                                <Link
                                  className=" hover:text-[#E5361D] "
                                  href={"home"}
                                >
                                  Shopify Development
                                </Link>
                                <Link
                                  className=" hover:text-[#E5361D] "
                                  href={"home"}
                                >
                                  Webflow Development
                                </Link>
                                <Link
                                  className=" hover:text-[#E5361D] "
                                  href={"home"}
                                >
                                  Design System Service
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-[40px]">
                  <div className="w-[328px]">
                    {" "}
                    <Button />
                  </div>
                  <div className="flex mt-[50px]">
                    {socialMedia.map((item, index) => {
                      return (
                        <div className="mb-[40px] mr-[10px]" key={index}>
                          <Image src={item.icon} alt="icon" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
