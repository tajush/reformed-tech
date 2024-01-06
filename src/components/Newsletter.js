import React from "react";
import img from "../assets/newsLetterImg.svg";
import star from "../assets/newsLtrStr.svg";
import Button from "./Button";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className="newsletter-bg container max-w-[1280px] flex justify-between items-center px-[24px] py-[20px] ">
      <div>
        {" "}
        <p className="text-[#FFF] max-w-[544px] mb-[40px] text-[32px] font-medium leading-relaxed ">
          Want to accelerate software development at your company? See how we
          can help.
        </p>
        <Button />
      </div>
      <Image src={star} alt="str" />
      <Image src={img} alt="img" />
    </div>
  );
};

export default Newsletter;
