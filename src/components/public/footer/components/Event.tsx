"use client";
import { toggleRegisterModalOpen } from "@/lib/features/registerModalSlice";
import { useAppDispatch } from "@/lib/hooks";
import Link from "next/link";
import React from "react";

const Event = () => {
  const dispatch = useAppDispatch();
  const toggleRegisterModal = () => {
    dispatch(toggleRegisterModalOpen());
  };
  return (
    <div className="my-2 sm:my-0 row-span-1 sm:col-span-1">
      <h1 className="text-[#00A96E] text-sm font-bold font-['SF Pro Display']">
        Event
      </h1>
      <div className="flex flex-col">
        <Link href={"#about"} className="text-[#333333] py-1  text-[14px]">
          About
        </Link>
        <Link href={"/speakers"} className="text-[#333333] py-1  text-[14px]">
          Speakers
        </Link>
        <button
          onClick={toggleRegisterModal}
          className="text-[#333333] py-1  text-[14px] !border-0 !bg-none !rounded-none focus:!outline-none !flex !items-center !justify-start"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Event;
