"use client";
import { useAppDispatch } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toggleMenuOpen } from "../../../lib/features/menuModalSlice";
import MenuModal from "../menumodal/MenuModal";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import { toggleRegisterModalOpen } from "@/lib/features/registerModalSlice";
import { CustomButton } from "@/components/common";

type HeaderProps = {
  onRegister?: () => void;
};

const Header: React.FunctionComponent<HeaderProps> = () => {
  const dispatch = useAppDispatch();
  const toggleMenuModal = () => {
    dispatch(toggleMenuOpen());
  };
  const toggleRegisterModal = () => {
    dispatch(toggleRegisterModalOpen());
  };

  return (
    <nav className="header bg-white bg-opacity-70 w-full h-[100px] z-10 flex justify-center items-center transition-all ease-in-out duration-300 fixed top-0 left-0 right-0">
      <div className="innerDiv w-[95%] sm:w-[80%] lg:w-[1112px] flex flex-row justify-between items-center">
        <Link href={"/"}>
          <Image
            src="/images/nigeria_saudi_arabia_logo.png"
            alt=""
            height={60}
            width={148}
            className="h-[30px] w-[74px] sm:h-[60px] sm:w-[148px]"
          />
        </Link>
        <HamburgerIcon
          size="36"
          onClick={toggleMenuModal}
          className="sm:hidden"
        />
        <div className="Links hidden sm:flex flex-row items-center">
          <Link
            href="/speakers"
            className="text-[#11142D] font-semibold text-[16px] leading-[19px] mr-3 lg:mr-10 hover:text-green-500"
          >
            Event Brochure
          </Link>
          <Link
            href="/speakers"
            className="text-[#11142D] font-semibold text-[16px] leading-[19px] mr-3 lg:mr-10 hover:text-green-500"
          >
            Speakers
          </Link>
          <Link
            href="/gallery"
            className="text-[#11142D] font-semibold text-[16px] leading-[19px] mr-3 lg:mr-10 hover:text-green-500"
          >
            Gallery
          </Link>
          <CustomButton onClick={toggleRegisterModal} variant="contained">
            Register
          </CustomButton>
        </div>
      </div>
      <MenuModal />
    </nav>
  );
};

export default Header;
