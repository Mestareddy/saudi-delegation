"use client";
import CustomButton from "@/components/common/CustomButton";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// type Props = {}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 60); // Set isScrolled to true after scrolling down 60 pixels
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`header bg-white w-full h-[100px] flex justify-center items-center transition-all ease-in-out duration-300 ${
        isScrolled ? "fixed top-0 left-0 right-0" : "relative"
      }`}
      style={{
        backdropFilter: isScrolled ? "blur(3px) brightness(95%)" : "none",
        transition: "top 0.3s, left 0.3s, right 0.3s",
      }}
    >
      <div className="innerDiv w-[90%] flex flex-row justify-between">
        <Image
          src="/images/nigeria_saudi_arabia_logo.png"
          alt=""
          height={60}
          width={148}
        />
        <div className="Links flex flex-row items-center">
          <Link
            href="#"
            className="text-[#11142D] font-semibold text-[16px] leading-[19px] mr-10"
          >
            Event Brochure
          </Link>
          <Link
            href="#"
            className="text-[#11142D] font-semibold text-[16px] leading-[19px] mr-10"
          >
            Gallery
          </Link>
          <CustomButton buttonText={"Register"} buttonUrl={"/register"} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
