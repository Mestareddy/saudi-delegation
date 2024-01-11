"use client";
import Link from "next/link";
import React from "react";
import { ArrowRightUpIcon } from "../icons";
import { Image } from "antd";
import { galleryData } from "@/mockData/homeData";
import CustomButton from "../common/CustomButton";

const Gallery = () => {
  return (
    <div className="w-full flex justify-center items-center pt-10 pb-20">
      <div className="innerDiv w-[95%] sm:w-[80%] lg:w-[1112px] flex flex-col justify-center items-center">
        <div className="top w-full flex flex-row justify-between">
          <h1 className="bebas text-[#333333] leading-[38px] font-bold text-[32px] uppercase">
            GALLERY
          </h1>
          <Link
            href=""
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
        <CustomButton
          buttonText={"Register to attend"}
          // buttonurl={"/register"}
          textColor={"[#333333]"}
          bgColor={"transparent"}
          border={"solid !border-2 !border-[#333333]"}
        />
        <p className="text-center text-[#191819] my-5 font-[450] text-[16px] leading-[24px]">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface is a without relying on meaningful content. Lorem ipsum may
          be used as a placeholder before final copy is available.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
