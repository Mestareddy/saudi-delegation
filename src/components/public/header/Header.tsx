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
      <div className="innerDiv w-[95%] sm:w-[90%] lg:w-[85%] flex flex-row justify-between items-center">
        <Link href={"/"}>
          <Image
            src="/images/nigeria_saudi_arabia_logo.png"
            alt=""
            height={50}
            width={172}
            className="h-[30px] w-[94px] sm:h-[50px] sm:w-[172px]"
          />
        </Link>
        <HamburgerIcon
          size="36"
          onClick={toggleMenuModal}
          className="lg:hidden"
        />
        <div className="Links hidden lg:flex flex-row items-center h-full">
          <Link
            href="/executive-summary"
            // className="text-[#11142D] font-semibold text-[16px] leading-[19px] mr-3 lg:mr-10 hover:text-green-500"
            className="nav-link"
          >
            Event Brochure
          </Link>
          <Link
            href="/speakers"
            // className="text-[#11142D] font-semibold text-[16px] leading-[19px] mr-3 lg:mr-10 hover:text-green-500"
            className="nav-link"
          >
            Speakers
          </Link>
          <Link
            href="/exhibition-area"
            // className="text-[#11142D] font-semibold text-[16px] leading-[19px] mr-3 lg:mr-10 hover:text-green-500"
            className="nav-link"
          >
            Exhibition Area
          </Link>
          <Link
            href="/gallery"
            // className="text-[#11142D] font-semibold text-[16px] leading-[19px] mr-3 lg:mr-10 hover:text-green-500"
            className="nav-link"
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
