import Image from "next/image";
import React from "react";
import GetButton from "./GetButton";
import image from "../assets/hero-image.svg";

const Hero = () => {
  return (
    <div className="container">
      {" "}
      <div className=" max-w-[1440px] md:mx-[80px]  flex xs:flex-col md:flex-row  xs:justify-center xs:items-center md:justify-between flex-wrap md:items-start pt-[83px] hero-bg px-[24px]  py-[26px] ">
        <div>
          <div>
            {" "}
            <h1 className="font-semibold xs:text-[32px]  md:text-[56px] max-w-[590px] mb-[24px] leading-relaxed ">
              Scale your business with our offshore tech mastery
            </h1>
            <p className="md:font-normal xs:text-[14px] max-w-[500px] text-2xl mb-[33px] leading-normal">
              We transforming the Digital Landscape Worldwide. Specializing in
              Offshore Tech Staffing, Web Design, Development, Create Branding
              and Digital Marketing.
            </p>
          </div>
          <div className="xs:mb-[50px]  ">
            <GetButton />
          </div>
        </div>

        <div>
          {" "}
          <Image
            className=" xs:max-w-[328px] md:max-w-[498px]"
            src={image}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
