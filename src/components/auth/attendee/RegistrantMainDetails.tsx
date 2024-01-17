import React from "react";
import AttendeeData from "./AttendeeData";
import SpeakingData from "./SpeakingData";
import { RegistrantMainInfo } from "../types";
import BoothData from "./BoothData";
import DeclinedData from "./DeclinedData";

const RegistrantMainDetails = ({ registrantInfo }: RegistrantMainInfo) => {
  // console.log(registrantInfo);

  return (
    <div className="w-[90%] sm:w-[70%] lg:w-[60%] border border-[#BDBDBD] rounded-lg">
      <div className="m-5">
        <h1 className="font-semibold leading-[20.24px] text-[16px] text-[#4F4F4F]">
          Main Details
        </h1>
        <AttendeeData registrantInfo={registrantInfo} />
        <div className="w-full border border-[rgba(18,18,18,0.1)]" />
        {registrantInfo?.status === "declined" && (
          <>
            <DeclinedData />
            <div className="w-full border border-[rgba(18,18,18,0.1)]" />
          </>
        )}
        <SpeakingData registrantInfo={registrantInfo} />
        <div className="w-full border border-[rgba(18,18,18,0.1)]" />
        <BoothData registrantInfo={registrantInfo} />
      </div>
    </div>
  );
};

export default RegistrantMainDetails;
