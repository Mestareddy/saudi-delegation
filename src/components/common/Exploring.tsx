import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import { ArrowRightIcon } from "../icons";

const Exploring = () => {
  return (
    <div className="bg-green-minst flex justify-center items-center">
      <div className="innerDiv w-[80%] my-20 grid grid-cols-2 gap-2">
        <div className="left w-[90%] flex flex-col justify-center items-start">
          <h1 className="bebas text-[#11142D] font-normal text-[32px] leading-[38.4px]">
            Exploring business opportunities for both countries
          </h1>
          <br />
          <p className="text-[#11142D] font-[450] text-[16px] leading-[24px]">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface is a without relying on meaningful content. Lorem ipsum may
            be used as a placeholder before final copy is available.
          </p>
          <br />
          <CustomButton
            buttonText={"Register"}
            // buttonUrl={"/register"}
            textColor={"white"}
            bgColor={"[#333333]"}
            // border={"solid !border-2 !border-white"}
            buttonIcon={<ArrowRightIcon stroke="#ffffff" />}
          />
        </div>
        <div className="right items-center justify-center">
          <Image
            src="/images/attend/image_1.png"
            className="right h-[361px] w-[481px] rounded"
            height={361}
            width={481}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Exploring;
