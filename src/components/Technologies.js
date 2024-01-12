import Image from "next/image";
import React from "react";
import img1 from "../assets/css.svg";
import img2 from "../assets/react.svg";
import img3 from "../assets/angular.svg";
import img4 from "../assets/typeScript.svg";
import img5 from "../assets/vue.svg";
import img6 from "../assets/js.svg";
import img7 from "../assets/kotlin.svg";
import img8 from "../assets/swift.svg";
import img9 from "../assets/flutter.svg";
import img10 from "../assets/java.svg";
import img11 from "../assets/golang.svg";
import img12 from "../assets/nodejs.svg";
import img13 from "../assets/php.svg";
import img14 from "../assets/python.svg";
import img15 from "../assets/firebase.svg";
import img16 from "../assets/azure.svg";
import img17 from "../assets/amazon.svg";
// import img18 from "../assets/others.svg";

const Technologies = () => {
  return (
    <div className="container">
      <div className="  flex flex-col rounded-[40px] bg-[#FFCEC7] justify-center items-center  max-w-[1440px] md:mx-[80px] xs:px-[15px] md:px-[24px] xs:mx-[16px]  ">
        <p className="rounded-bl-[40px] rounded-br-[40px]  md:pl-[168px] md:pr-[183px] xs:px-[39px] md:text-[42px] xs:text-[24px] font-semibold bg-[#FFF] ">
          Our tech stack
        </p>
        <div className="flex  xs:flex-wrap md:flex-nowrap justify-between items-center  ">
          {" "}
          <div>
            {" "}
            <p>Web</p>
            <div className="flex flex-wrap md:mr-[84px]  ">
              <Image className=" mb-[37px]" src={img1} alt="img" />
              <Image className=" mb-[37px]" src={img2} alt="img" />
              <Image className=" mb-[37px]" src={img3} alt="img" />
              <Image className=" mb-[37px]" src={img4} alt="img" />
              <Image className=" mb-[37px]" src={img5} alt="img" />
              <Image className=" mb-[37px]" src={img6} alt="img" />
            </div>
          </div>
          <div>
            {" "}
            <p>Mobile</p>
            <div className="flex flex-wrap mr-[84px]  ">
              {" "}
              <Image className=" mb-[37px]" src={img7} alt="img" />
              <Image className=" mb-[37px]" src={img8} alt="img" />
              <Image className=" mb-[37px]" src={img9} alt="img" />
            </div>
          </div>
          <div>
            {" "}
            <p>Backend</p>
            <div className="flex flex-wrap  mr-[84px] ">
              {" "}
              <Image className=" mb-[37px]" src={img10} alt="img" />
              <Image className=" mb-[37px]" src={img11} alt="img" />
              <Image className=" mb-[37px]" src={img12} alt="img" />
              <Image className=" mb-[37px]" src={img13} alt="img" />
              <Image className=" mb-[37px]" src={img14} alt="img" />
            </div>
          </div>
          <div>
            {" "}
            <p>Database</p>
            <div className="flex flex-wrap   ">
              {" "}
              <Image className=" mb-[37px]" src={img15} alt="img" />
              <Image className=" mb-[37px]" src={img16} alt="img" />
              <Image className=" mb-[37px]" src={img17} alt="img" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  pb-[59.19px]">
          {/* <Image src={img18} alt="img" /> */}
          <p className="text-[24px] mt-[10px] text-center ">
            And Numerous Other <br></br> Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
