import Link from "next/link";
import React from "react";

const Resources = () => {
  return (
    <div className="my-2 sm:my-0 row-span-1 sm:col-span-1">
      <h1 className="text-[#00A96E] text-sm font-bold font-['SF Pro Display']">
        Resources
      </h1>
      <div className="flex flex-col">
        <Link
          href={"/executive-summary"}
          className="text-[#333333] py-1  text-[14px]"
        >
          Event Brochure
        </Link>
        <Link href={"/gallery"} className="text-[#333333] py-1  text-[14px]">
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default Resources;
