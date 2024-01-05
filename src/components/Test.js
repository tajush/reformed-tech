"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowDropdown } from "react-icons/io";

import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import logo from "../assets/logo.svg";
import { navLinks } from "../constants";
import Link from "next/link";

const Test = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <nav className=" w-full flex py-6 justify-between items-center container ">
      <Link href={"home"}>
        <Image src={logo} alt="logo" className="w-[124px] h-[32px]" />
      </Link>

      <ul className="list-none md:flex hidden  ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={` font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-[#4285F4]" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            {nav.title ? (
              <Link href={nav.id}>{nav.title}</Link>
            ) : (
              <div className="flex  flex-col ">
                <div className="flex items-center gap-2 justify-between relative ">
                  <div>
                    {" "}
                    <Link href={"services"}> SERVICES</Link>
                  </div>
                  <div onClick={() => setOpen(!open)}>
                    <IoIosArrowDropdown />
                  </div>
                </div>

                <ul
                  className={`absolute top-[45px] bg-white  h-fit  w-[120px]   ${
                    open ? " flex text-black" : "hidden"
                  } `}
                >
                  <li
                    className={`flex font-medium  text-[16px] leading-[20.6px]    px-[8px] py-[16px]   flex-col  `}
                  >
                    <Link
                      className="hover:bg-blue-600 hover:text-white mb-2"
                      href={"home"}
                    >
                      Offshore Team
                    </Link>
                    <Link
                      className="hover:bg-blue-600 hover:text-white mb-2 "
                      href={"home"}
                    >
                      Software Development
                    </Link>
                    <Link
                      className="hover:bg-blue-600 hover:text-white mb-2 "
                      href={"home"}
                    >
                      Design & Development
                    </Link>
                    <Link
                      className="hover:bg-blue-600 hover:text-white mb-2"
                      href={"home"}
                    >
                      Mobile Application
                    </Link>
                    <Link
                      className="hover:bg-blue-600 hover:text-white mb-2 "
                      href={"home"}
                    >
                      DevOps
                    </Link>
                    <Link
                      className="hover:bg-blue-600 hover:text-white "
                      href={"home"}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div
        className="md:hidden flex justify-between items-center 
       bg-[linear-gradient(96deg,#e8fcf8,linen)]  "
      >
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[15px] h-[15px] object-contain bg-[#4285F4]"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            toggle
              ? "fixed z-40 left-0 top-0 w-full h-screen origin-top bg-[linear-gradient(96deg,#e8fcf8,linen)] text-black p-10"
              : "hidden"
          }`}
        >
          <div className="flex h-full flex-col">
            <div className="flex justify-between">
              <Image src={logo} alt="logo" className="w-[124px] h-[32px]" />
              <p className="cursor-pointer text-md text-black">
                <Image
                  src={toggle ? close : menu}
                  alt="menu"
                  className="w-[15px] h-[15px] object-contain bg-[#4285F4]"
                  onClick={() => setToggle(!toggle)}
                />
              </p>
            </div>
            <ul className=" leading-[50px] text  m_title lowercase font-semibold">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`  font-semibold cursor-pointer text-[16px] leading-[50px] text  m_title lowercase ${
                    active === nav.title ? "text-[#4285F4]" : "text-black"
                  } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title ? (
                    <Link onClick={() => setToggle(!toggle)} href={nav.id}>
                      {nav.title}
                    </Link>
                  ) : (
                    <div className="flex  flex-col ">
                      <div className=" flex items-center gap-2  ">
                        <div>
                          {" "}
                          <Link href={"services"}> SERVICES</Link>
                        </div>
                        <div onClick={() => setOpen(!open)}>
                          <IoIosArrowDropdown />
                        </div>
                      </div>

                      <ul
                        className={`    h-fit capitalize     ${
                          open ? " flex text-black" : "hidden"
                        } `}
                      >
                        <li
                          className={`flex font-medium  text-[16px] leading-[20.6px]    px-[8px] py-[16px]   flex-col  `}
                        >
                          <Link
                            className="hover:bg-blue-600 hover:text-white mb-2"
                            href={"home"}
                          >
                            -Offshore Team
                          </Link>
                          <Link
                            className="hover:bg-blue-600 hover:text-white mb-2 "
                            href={"home"}
                          >
                            -Software Development
                          </Link>
                          <Link
                            className="hover:bg-blue-600 hover:text-white mb-2 "
                            href={"home"}
                          >
                            -Design & Development
                          </Link>
                          <Link
                            className="hover:bg-blue-600 hover:text-white mb-2"
                            href={"home"}
                          >
                            -Mobile Application
                          </Link>
                          <Link
                            className="hover:bg-blue-600 hover:text-white mb-2 "
                            href={"home"}
                          >
                            -DevOps
                          </Link>
                          <Link
                            className="hover:bg-blue-600 hover:text-white "
                            href={"home"}
                          >
                            -Digital Marketing
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Tesa;
