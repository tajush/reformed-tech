import Image from "next/image";
import React from "react";
import GetButton from "./GetButton";
import image from "../assets/hero-image.svg";

const Hero = () => {
  return (
    <div className="container">
      {" "}
      <div className=" max-w-[1440px] mx-[80px]  flex justify-between items-start pt-[83px] hero-bg px-[24px]  py-[26px] ">
        <div>
          <h1 className="font-semibold text-[56px] max-w-[590px] mb-[24px] leading-relaxed ">
            Scale your business with our offshore tech mastery
          </h1>
          <p className="font-normal max-w-[500px] text-2xl mb-[33px] leading-normal">
            We transforming the Digital Landscape Worldwide. Specializing in
            Offshore Tech Staffing, Web Design, Development, Create Branding and
            Digital Marketing.
          </p>
          <GetButton />
        </div>
        <Image className="max-w-[498px]" src={image} alt="image" />
      </div>
    </div>
  );
};

export default Hero;
