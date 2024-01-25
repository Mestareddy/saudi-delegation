import { Heading, Paragraph } from "@/components/common";
import Image from "next/image";
import React from "react";

const HeroSection: React.FunctionComponent = () => {
  return (
    <div>
      <Image
        src={"/images/home_hero_bg.png"}
        alt="executive_summary"
        height={484}
        width={1112}
        className="w-full rounded-xl"
      />
      <div className="flex flex-row justify-between flex-wrap items-center md:items-start mt-[30px]">
        <Image
          src={"/images/events-summary/nigeria_saudi_arabia_logo_outlined.png"}
          alt="executive_summary"
          height={80}
          width={276}
          className="h-20 w-[276px]"
        />
        <div className="mt-4 md:m-0">
          <div className="mb-3">
            <Heading className="uppercase text-right font-semibold" type="h2">
              THE   <span className="text-green-hover uppercase mr-3">
                Nigeria Saudi
              </span>
              <span className="uppercase">
                Business Forum
              </span>
            </Heading>
          </div>
          <Heading className="text-right  font-semibold">
            2024
          </Heading>
          <div className="flex flex-row items-center justify-end space-x-3 mt-1.5">
            <Paragraph>
              Abuja
            </Paragraph>
            <span className="block bg-gray-40 h-2.5 w-2.5 rounded-full" />
            <Paragraph className="">
              Monday, January 29, 2024
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
