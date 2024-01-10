import React from "react";
import img from "../assets/newsLetterImg.svg";
import star from "../assets/newsLtrStr.svg";
import Button from "./Button";
import Image from "next/image";
import NewsLtrmblBtn from "./NewsLtrmblBtn";

const Newsletter = () => {
  return (
    <div className="container relative z-10">
      <div className="max-w-[1440px] md:mx-[80px] ">
        {" "}
        <div className="newsletter-bg  flex-wrap  md:flex-nowrap  container  flex justify-between items-center px-[24px] py-[20px] ">
          <div className="mb-[40px]">
            {" "}
            <p className="md:text-[#FFF] xs:text-[#03141A] max-w-[544px] mb-[40px] xs:text-[22px] md:text-[32px] font-semibold md:leading-relaxed ">
              Want to accelerate software development at your company? See how
              we can help.
            </p>
            <div className="xs:hidden md:flex">
              {" "}
              <Button />
            </div>
            <div className="xs:flex md:hidden justify-center items-center">
              {" "}
              <NewsLtrmblBtn />
            </div>
          </div>
          <Image className="hidden md:flex" src={star} alt="str" />
          <Image src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
