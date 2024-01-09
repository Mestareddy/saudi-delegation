"use client";
import CustomButton from "@/components/common/CustomButton";
import { ArrowRightUpIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="lg:h-[756px] h-[100%] bg-[url('/images/home_hero_bg.png')] bg-cover w-full flex justify-center items-end">
      <div className="innerDiv mb-5 flex flex-col items-center">
        <Image
          src="/images/nigeria_saudi_arabia_white_logo.png"
          alt=""
          className="logoWhite w-[100px] lg:w-[195px] h-[60px] lg:h-[80px] "
          width={195}
          height={80}
        />
        <h1 className="heroTitle text-center text-white text-normal lg:text-[48px] font-normal leading-normal font-bebas uppercase">
          The Nigeria Saudi Business Forum
        </h1>
        <p className="text-center text-white text-xl font-['Circular Std'] my-2">
          Exploring business opportunities for both countries
        </p>
        <div className="dividerDiv w-full flex flex-row justify-center items-center mb-3">
          <div className="leftDivider w-[100%] h-[0px] mr-3 origin-top-left border border-neutral-200" />
          <h1 className="flex-grow whitespace-nowrap">
            Monday, January 29, 2024
          </h1>
          <div className="rightDivider w-[100%] h-[0px] ml-3 origin-top-left border border-neutral-200" />
        </div>
        <CustomButton
          buttonText={"Register to attend"}
          buttonUrl={"/register"}
          textColor={"[#333333]"}
          bgColor={"transparent"}
          border={"solid !border-2 !border-white"}
        />
        <div className="links my-5 flex flex-row">
          <Link href={""} className="event mr-16 flex items-center flex-row">
            Event brochure
            <ArrowRightUpIcon size="18px" className="ml-1" stroke="#ffffff" />
          </Link>
          <Link href={""} className="gallery ml-16 flex items-center flex-row">
            Gallery
            <ArrowRightUpIcon size="18px" className="ml-1" stroke="#ffffff" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
