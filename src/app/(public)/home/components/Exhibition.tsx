import { CustomButton } from "@/components/common";
import { ArrowRightUpIcon } from "@/components/icons";
import { exhibitionData } from "@/mockData/homeData";
import { Image } from "antd";
import Link from "next/link";
import React from "react";

const Exhibition = () => {
  return (
    <div className="w-full flex justify-center items-center bg-[#ffffff] py-10">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] my-10 flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[55%]">
          <Image.PreviewGroup>
            <div className="galleryImages gap-2 grid grid-cols-2 sm:grid-cols-3">
              {exhibitionData.map((exhibition) => (
                <Image
                  // width={220}
                  // height={140}
                  key={exhibition.id}
                  src={exhibition.image}
                  alt=""
                  className="w-full h-full"
                />
              ))}
            </div>
          </Image.PreviewGroup>
        </div>
        <div className="flex flex-col justify-center w-full lg:w-[45%] pt-5 sm:pt-0">
          <h1 className="bebas leading-[38.4px] text-[32px] font-normal text-[#11142D] mb-3">
            Exhibition Area
          </h1>
          <p className="leading-[25.3px] text-[20px] font-[450] text-[#11142D] my-3 w-full md:w-[90%]">
            Exploring business opportunities for both countries by showcasing
            you products and services at the forum
          </p>
          <div className="flex flex-row mt-3 justify-between gap-3 w-full md:w-[90%]">
            <CustomButton variant="outlined" className="p-5">
              Request an Exhibition Booth
            </CustomButton>
            <Link
              href="#"
              className="flex flex-row items-center justify-center text-[16px] text-[#333333] leading-[19px] font-semibold"
            >
              Explore <ArrowRightUpIcon size="16px" className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibition;
