"use client";
import { Heading, Paragraph } from "@/components/common";
import Exploring from "@/components/common/Exploring";
import { galleryData } from "@/mockData/homeData";
import { Image } from "antd";
import React from "react";

const PageContent: React.FunctionComponent = () => {
  return (
    <div>
      <div className="mx-auto w-[95%] sm:w-[90%] lg:w-[85%] px-2.5 md:px-0">
        <Heading type="h1">Gallery</Heading>
        <div className="flex flex-row mt-4">
          <Paragraph className="text-base md:text-xl  md:font-medium md:basis-2/4">
            We offer clients tailored and value-based guidance specific to their
            unique situation and environment to improve their security posture
            through a continuous improvement approach.
          </Paragraph>
          <div className="basis-2/4 hidden md:hidden" />
        </div>
        <div className="mt-[30px] mx-auto">
          <div className="gallery w-full flex justify-center items-center my-5">
            <Image.PreviewGroup>
              <div className="galleryImages grid-cols-2 sm:grid-cols-2 gap-2.5 grid md:grid-cols-3">
                {galleryData.map((gallery) => (
                  <Image
                    key={gallery.id}
                    src={gallery.image}
                    style={{
                      background: "cover",
                    }}
                    alt={gallery.image}
                    className="bg-contain rounded-[5px]"
                  />
                ))}
              </div>
            </Image.PreviewGroup>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Exploring />
      </div>
    </div>
  );
};

export default PageContent;
