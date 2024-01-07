import React from "react";
import img from "../assets/newsLetterImg.svg";
import star from "../assets/newsLtrStr.svg";
import Button from "./Button";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="container relative z-10">
      <div className="max-w-[1440px] mx-[80px] ">
        {" "}
        <div className="newsletter-bg    container  flex justify-between items-center px-[24px] py-[20px] ">
          <div>
            {" "}
            <p className="text-[#FFF] max-w-[544px] mb-[40px] text-[32px] font-medium leading-relaxed ">
              Want to accelerate software development at your company? See how
              we can help.
            </p>
            <Button />
          </div>
          <Image src={star} alt="str" />
          <Image src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
