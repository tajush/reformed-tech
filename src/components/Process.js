// import { order } from "@/constants";
// import Image from "next/image";
// import React from "react";
// import img from "../assets/step-arrow.svg";

// const Process = () => {
//   return (
//     <div className="container">
//       <div className="max-w-[1440px] md:mx-[80px]">
//         <p>Staff augmentation process</p>
//         <p className="text-[42px] font-semibold">
//           Simple, seamless, streamlined
//         </p>
//         <div className=" gap-x-[30px] grid grid-cols-3 grid-flow-row ">
//           {order.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 className="bg-[#FFF3F1] rounded-[40px] text-center "
//               >
//                 <div>
//                   {" "}
//                   <div className="  ">
//                     <div className="flex items-start ">
//                       {" "}
//                       <div className="step-bg px-[26px] py-[50px]  ">
//                         <Image src={img} alt="img" />
//                         <p>step1</p>
//                       </div>
//                       <Image
//                         className="mb-[40px] flex justify-center items-center "
//                         src={item.icon}
//                         alt="icon"
//                       />
//                     </div>
//                   </div>
//                   <p className="text-[18px] font-semibold mb-[15px] ">
//                     {item.title}
//                   </p>
//                   <p className="px-[24px]">{item.content}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Process;

import { order } from "@/constants";
import Image from "next/image";
import React from "react";
import img from "../assets/step-arrow.svg";

const Process = () => {
  return (
    <div className="container">
      <div className="max-w-[1440px] md:mx-[80px] mb-[118px]">
        <div className="text-center mb-[54px]">
          <p className="md:text-[24px] xs:text-[16px]">
            Staff augmentation process
          </p>
          <p className="md:text-[42px] xs:text-[24px] font-semibold">
            Simple, seamless, streamlined
          </p>
        </div>
        <div className=" md:gap-x-[30px] xs:max-md:gap-y-[30px] grid md:grid-cols-3 grid-cols-1  grid-flow-row  ">
          {order.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-[#FFF3F1] rounded-[40px]  pb-[70px]  "
              >
                <div className="step-bg px-[26px] flex flex-col justify-center items-center py-[50px]  max-w-[100px] max-h-[100px] ">
                  <Image src={img} alt="img" />
                  <p className="text-[16px]">Step1</p>
                </div>

                <div className="flex flex-col items-center text-center   -mt-[60px]  ">
                  {" "}
                  <Image
                    className="mb-[40px] flex justify-center items-center "
                    src={item.icon}
                    alt="icon"
                  />
                  <p className="text-[18px] font-semibold mb-[15px] ">
                    {item.title}
                  </p>
                  <p className="px-[24px] text-[14px] ">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Process;
