import Image from "next/image";
import React from "react";
import img1 from "../assets/pointpal.svg";
import img2 from "../assets/smart-property.svg";
import img3 from "../assets/linkit.svg";
import img4 from "../assets/pactfi.svg";
import img5 from "../assets/legacy.svg";
import img6 from "../assets/ctfi.svg";
import img7 from "../assets/bagg.svg";
import img8 from "../assets/thec.svg";
import img9 from "../assets/salesify.svg";
import img10 from "../assets/toads.svg";
import img11 from "../assets/othersTeam.svg";

const Team = () => {
  return (
    <div className="container">
      <div className="max-w-[1440px]">
        <p className="md:text-[42px] xs:text-[24px] font-semibold text-center mb-[70px] mt-[107px]">
          Amazing teams we've already helped
        </p>
        <div className="flex justify-evenly items-center">
          <Image src={img1} alt="img" />
          <Image src={img2} alt="img" />
          <Image src={img3} alt="img" />
          <Image src={img4} alt="img" />
          <Image src={img5} alt="img" />
        </div>
        <div className=" flex justify-evenly items-center mb-[130px]">
          <Image src={img6} alt="img" />
          <Image src={img7} alt="img" />
          <Image src={img8} alt="img" />
          <Image src={img9} alt="img" />
          <Image src={img10} alt="img" />
          <Image src={img11} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Team;
