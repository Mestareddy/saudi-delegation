"use client";
import CustomButton from "@/components/common/CustomButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// type Props = {}

const Header = () => {
  return (
    <nav className="header bg-white bg-opacity-70 w-full h-[100px] z-10 flex justify-center items-center transition-all ease-in-out duration-300 fixed top-0 left-0 right-0">
      <div className="innerDiv w-[80%] flex flex-row justify-between">
        <Link href={"/"}>
          <Image
            src="/images/nigeria_saudi_arabia_logo.png"
            alt=""
            height={60}
            width={148}
          />
        </Link>
        <div className="Links flex flex-row items-center">
          <Link
            href="#"
            className="text-[#11142D] hidden sm:flex font-semibold text-[16px] leading-[19px] mr-10"
          >
            Event Brochure
          </Link>
          <Link
            href="#"
            className="text-[#11142D] hidden sm:flex font-semibold text-[16px] leading-[19px] mr-10"
          >
            Gallery
          </Link>
          <CustomButton buttonText={"Register"} buttonurl={"/register"} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
