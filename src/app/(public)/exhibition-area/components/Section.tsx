"use client";
import { CustomButton } from "@/components/common";
import { toggleRegisterModalOpen } from "@/lib/features/registerModalSlice";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import React from "react";

const Section = () => {
  const dispatch = useAppDispatch();
  const toggleRegisterModal = () => {
    dispatch(toggleRegisterModalOpen());
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[95%] sm:w-[90%] lg:w-full my-[50px] flex flex-col lg:flex-row gap-10 items-center justify-start">
        <Image
          src="/images/exhibition/sectionOne.png"
          alt="sectionOne"
          width={904}
          height={300}
          className="w-[55%] h-full hidden lg:flex order-1"
        />
        <Image
          src="/images/exhibition/sectionOneMobile.png"
          alt="sectionOneMobile"
          width={370}
          height={273}
          className="w-full lg:hidden order-2"
        />
        <div className="flex flex-col gap-3 w-full lg:w-[40%] order-1 lg:order-2">
          <h1 className="bebas font-normal text-[32px] leading-[38.4px] text-[#11142D]">
            Large Exhibition Area
          </h1>
          <p className="font-[450] text-[#191819] text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px]">
            We offer clients tailored and value-based guidance specific to their
            unique situation and environment to improve their security posture
            through a continuous improvement approach.
          </p>
        </div>
      </div>
      <div className="w-full py-[50px] flex flex-col lg:flex-row gap-10 items-center justify-end bg-[#f2f2f2]">
        <div className="w-[95%] sm:w-[90%] lg:w-[40%] flex flex-col gap-3 lg:pr-5 order-1">
          <h1 className="bebas font-normal text-[32px] leading-[38.4px] text-[#11142D]">
            Ready to accommodate your showcases
          </h1>
          <p className="font-[450] text-[#191819] text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px]">
            We offer clients tailored and value-based guidance specific to their
            unique situation and environment to improve their security posture
            through a continuous improvement approach.
          </p>
          <CustomButton
            onClick={toggleRegisterModal}
            variant="contained"
            className="w-[80%]"
          >
            Request an Exhibition Booth
          </CustomButton>
        </div>
        <Image
          src="/images/exhibition/sectionTwo.png"
          alt=""
          width={904}
          height={300}
          className="w-[55%] hidden lg:flex order-1"
        />
        <Image
          src="/images/exhibition/sectionTwoMobile.png"
          alt="sectionTwoMobile"
          width={370}
          height={273}
          className="w-[95%] sm:w-[90%] lg:hidden order-2"
        />
      </div>
      <div className="w-[95%] sm:w-[90%] lg:w-full my-[50px] flex flex-col lg:flex-row gap-10 items-center justify-start">
        <Image
          src="/images/exhibition/sectionThree.png"
          alt=""
          width={904}
          height={300}
          className="w-[55%] hidden lg:flex order-1"
        />
        <Image
          src="/images/exhibition/sectionThreeMobile.png"
          alt="sectionThreeMobile"
          width={370}
          height={273}
          className="w-full lg:hidden order-2"
        />
        <div className="flex flex-col gap-3 w-full lg:w-[40%] order-1 lg:order-2">
          <h1 className="bebas font-normal text-[32px] leading-[38.4px] text-[#11142D]">
            Make your Booth truly yours
          </h1>
          <p className="font-[450] text-[#191819] text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px]">
            Exploring business opportunities for both countries by showcasing
            you products and services at the forum
          </p>
          <CustomButton
            onClick={toggleRegisterModal}
            variant="contained"
            className="w-[80%]"
          >
            Request an Exhibition Booth
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Section;
