import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";
import { ArrowRightIcon } from "../icons";
import { useAppDispatch } from "@/lib/hooks";
import { toggleRegisterModalOpen } from "@/lib/features/registerModalSlice";

const Exploring = () => {
  const dispatch = useAppDispatch();

  const toggleRegisterModal = () => {
    dispatch(toggleRegisterModalOpen());
  };

  return (
    <div className="bg-green-minst flex justify-center items-center">
      <div className="innerDiv w-[95%] sm:w-[80%] lg:w-[1112px] my-20 flex flex-col md:flex-row gap-2">
        <div className="left w-full sm:w-[50%] mb-3 flex flex-col justify-center items-start">
          <div className="w-full sm:w-[90%] flex flex-col justify-center items-start mb-3">
            <h1 className="bebas text-[#11142D] font-normal text-[32px] leading-[38.4px]">
              Exploring business opportunities for both countries
            </h1>
            <p className="text-[#11142D] font-[450] text-[16px] leading-[24px] my-3">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface is a without relying on meaningful content. Lorem ipsum
              may be used as a placeholder before final copy is available.
            </p>
            <div className="my-3">
              <CustomButton
                buttonText={"Register"}
                onClick={toggleRegisterModal}
                textColor={"white"}
                bgColor={"[#333333]"}
                buttonIcon={<ArrowRightIcon stroke="#ffffff" />}
              />
            </div>
          </div>
        </div>
        <div className="right items-center justify-center w-full sm:w-[50%]">
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
