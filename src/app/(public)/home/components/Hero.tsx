"use client";
import { ArrowRightUpIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAppDispatch } from "@/lib/hooks";
import { toggleRegisterModalOpen } from "@/lib/features/registerModalSlice";
import { CustomButton } from "../../../../components/common";

const Hero = () => {
  const dispatch = useAppDispatch();
  const toggleRegisterModal = () => {
    dispatch(toggleRegisterModalOpen());
  };
  return (
    <div className="h-[534px] sm:h-[534px] lg:h-[756px] bg-home-hero w-full flex justify-center items-end">
      <div className="innerDiv mb-5 flex flex-col sm:items-center mx-5">
        <Image
          src="/images/nigeria_saudi_arabia_white_logo.png"
          alt=""
          className="logoWhite hidden sm:flex w-[150px] lg:w-[345px] h-[60px] lg:h-[100px] "
          width={195}
          height={100}
        />
        <h1 className="heroTitle bebas text-center text-white text-normal text-[30px] sm:text-[48px] font-normal leading-normal uppercase">
          The Nigeria Saudi Business Forum
        </h1>
        <p className="text-center text-white text-[20px] font-['Circular Std'] my-2">
          Exploring business opportunities for both countries
        </p>
        <div className="dividerDiv w-full flex flex-row justify-center items-center mb-3">
          <div className="leftDivider w-[100%] h-[0px] mr-3 origin-top-left border border-neutral-200" />
          <h1 className="flex-grow whitespace-nowrap text-[16px] sm:text-[20px] leading-[25px] font-bold text-white">
            Monday, January 29, 2024
          </h1>
          <div className="rightDivider w-[100%] h-[0px] ml-3 origin-top-left border border-neutral-200" />
        </div>
        <div className="flex justify-center">
          <CustomButton onClick={toggleRegisterModal} variant="outlined-light">
            Register to attend
          </CustomButton>
        </div>
        <div className="links my-5 flex flex-row items-center justify-center">
          <Link
            href={"/executive-summary"}
            className="event mx-3 sm:mx-8 flex items-center flex-row"
          >
            Event brochure
            <ArrowRightUpIcon size="18px" className="ml-1" stroke="#ffffff" />
          </Link>
          <Link
            href={"/gallery"}
            className="gallery mx-3 sm:mx-8 flex items-center flex-row"
          >
            Gallery
            <ArrowRightUpIcon size="18px" className="ml-1" stroke="#ffffff" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
