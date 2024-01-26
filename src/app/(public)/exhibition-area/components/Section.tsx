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
    <div>
      <div className="my-[50px] flex flex-row gap-10 items-center justify-start">
        <Image
          src="/images/exhibition/sectionOne.png"
          alt=""
          width={904}
          height={300}
          className="w-[60%]"
        />
        <div className="flex flex-col gap-3 w-[30%]">
          <h1 className="bebas font-normal text-[32px] leading-[38.4px] text-[#11142D]">
            Large Exhibition Area
          </h1>
          <p className="font-[450] text-[#191819] text-[20px] leading-[30px]">
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
      </div>
      <div className="my-[50px] flex flex-row gap-10 items-center justify-end">
        <div className="flex flex-col gap-3 w-[30%]">
          <h1 className="bebas font-normal text-[32px] leading-[38.4px] text-[#11142D]">
            Ready to accommodate your showcases
          </h1>
          <p className="font-[450] text-[#191819] text-[20px] leading-[30px]">
            We offer clients tailored and value-based guidance specific to their
            unique situation and environment to improve their security posture
            through a continuous improvement approach.
          </p>
        </div>
        <Image
          src="/images/exhibition/sectionTwo.png"
          alt=""
          width={904}
          height={300}
          className="w-[60%]"
        />
      </div>
      <div className="my-[50px] flex flex-row gap-10 items-center justify-start">
        <Image
          src="/images/exhibition/sectionThree.png"
          alt=""
          width={904}
          height={300}
          className="w-[60%]"
        />
        <div className="flex flex-col gap-3 w-[30%]">
          <h1 className="bebas font-normal text-[32px] leading-[38.4px] text-[#11142D]">
            Make your Booth truly yours
          </h1>
          <p className="font-[450] text-[#191819] text-[20px] leading-[30px]">
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
