"use client";
import Link from "next/link";
import React from "react";
import { Image } from "antd";
import { galleryData } from "@/mockData/homeData";
import { useAppDispatch } from "@/lib/hooks";
import { toggleRegisterModalOpen } from "@/lib/features/registerModalSlice";
import { ArrowRightUpIcon } from "@/components/icons";
import { CustomButton } from "@/components/common";

const Gallery = () => {
  const dispatch = useAppDispatch();

  const toggleRegisterModal = () => {
    dispatch(toggleRegisterModalOpen());
  };
  return (
    <div className="w-full flex justify-center items-center pt-10 pb-20">
      <div className="innerDiv w-[95%] sm:w-[90%] lg:w-[85%] flex flex-col justify-center items-center">
        <div className="top w-full flex flex-row justify-between">
          <h1 className="bebas text-[#333333] leading-[38px] font-bold text-[32px] uppercase">
            GALLERY
          </h1>
          <Link
            href="/gallery"
            className="flex flex-row items-center justify-center text-[16px] text-[#333333] leading-[19px] font-semibold"
          >
            View all <ArrowRightUpIcon size="16px" className="ml-1" />
          </Link>
        </div>
        <div className="gallery w-full flex justify-center items-center my-5">
          <Image.PreviewGroup>
            <div className="galleryImages gap-4 grid grid-cols-2 sm:grid-cols-3">
              {galleryData.map((gallery) => (
                <Image
                  // width={364}
                  // height={230}
                  key={gallery.id}
                  src={gallery.image}
                  alt=""
                  className="w-full h-full"
                />
              ))}
            </div>
          </Image.PreviewGroup>
        </div>
        <CustomButton variant="outlined" onClick={toggleRegisterModal}>
          Register to attend
        </CustomButton>
      </div>
    </div>
  );
};

export default Gallery;
