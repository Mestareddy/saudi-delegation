"use client";
import { CustomButton } from "@/components/common";
import { toggleRegisterModalOpen } from "@/lib/features/registerModalSlice";
import { useAppDispatch } from "@/lib/hooks";
import React from "react";

const ExhibitionHero = () => {
  const dispatch = useAppDispatch();
  const toggleRegisterModal = () => {
    dispatch(toggleRegisterModalOpen());
  };

  return (
    <div className="h-[568px] bg-exhibition-home-hero w-full flex justify-center items-end">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] mb-10 flex items-start">
        <div className="w-full lg:w-[45%] flex flex-col items-center sm:items-start">
          <h1 className="heroTitle bebas text-center text-white text-normal text-[40px] sm:text-[48px] font-normal leading-[57.6px] sm:leading-[48px] uppercase">
            <span className="text-[#00A96E]">Exhibition </span>
            Area
          </h1>
          <p className="text-center sm:text-left text-white text-[14px] sm:text-[20px] font-['Circular Std'] my-3 sm:my-5 px-5 sm:px-0">
            We offer clients tailored and value-based guidance specific to their
            unique situation and environment to improve their security posture
            through a continuous improvement approach.
          </p>
          <div className="flex justify-center">
            <CustomButton
              onClick={toggleRegisterModal}
              variant="outlined-light"
            >
              Request an Exhibition Booth
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionHero;
