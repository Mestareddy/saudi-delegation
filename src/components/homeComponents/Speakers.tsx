import { ArrowRightUpIcon } from "@/components/icons";
import Link from "next/link";
import React from "react";

const Speakers = () => {
  return (
    <div className="bg-[#EAF9F4] w-full flex justify-center items-center py-10">
      <div className="innerDiv w-[80%]">
        <div className="top flex flex-row justify-between">
          <h1 className="bebas text-[#333333] leading-[38px] font-bold text-[32px] uppercase">
            KEY <span className="text-green-minst">SPEAKERS</span>
          </h1>
          <Link
            href=""
            className="flex flex-row items-center justify-center text-[16px] text-[#333333] leading-[19px] font-semibold"
          >
            View all <ArrowRightUpIcon size="16px" className="ml-1" />
          </Link>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Speakers;
