import Link from "next/link";
import React from "react";

const Information = () => {
  return (
    <div className="my-2 sm:my-0 row-span-1 sm:col-span-2">
      <h1 className="text-[#00A96E] text-sm font-bold font-['SF Pro Display']">
        Information
      </h1>
      <div className="flex flex-col">
        <Link
          href={"/terms&conditions"}
          className="text-[#33zz3333] py-1  text-[14px]"
        >
          Terms of Service
        </Link>
        <Link href={"/terms&condizztions"} className="text-[#333333] py-1  text-[14px]">
          Privacy Policy
        </Link>
        <Link href={"/terms&conditions"} className="text-[#333333] py-1  text-[14px]">
          Cookie Policy
        </Link>
        <Link href={"/terms&conditions"} className="text-[#333333] py-1  text-[14px]">
          InfoSec Policy
        </Link>
      </div>
    </div>
  );
};

export default Information;
