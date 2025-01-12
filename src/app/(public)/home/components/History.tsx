import React from "react";
import {
  BriecaseIcon,
  FactoryIcon,
  LocationIcon,
  UsersIcon,
} from "../../../../components/icons";

const History = () => {
  return (
    <div className="bg-[#00E092] flex justify-center items-center w-full py-20">
      <div className="inner w-[90] sm:w-[80%] grid sm:grid-cols-4 gap-5">
        <div className="delivered col-span-1 flex flex-col items-center justify-start">
          <BriecaseIcon size="100" stroke="black" />
          <div className="divider w-[120px] border border-[#00A96E] my-2" />
          <h1 className="bebas font-normal text-[24px] sm:text-[24px] leading-[28.8px] text-[#11142D] py-1">
            More Than 500
          </h1>
          <p className="font-[450] text-[20px] sm:text-[20px] leading-[30px] text-[#11142D] text-center">
            Projects delivered
          </p>
        </div>
        <div className="delivered col-span-1 flex flex-col items-center justify-start">
          <FactoryIcon size="100" stroke="black" />
          <div className="divider w-[120px] border border-[#00A96E] my-2" />
          <h1 className="bebas font-normal text-[24px] sm:text-[24px] leading-[28.8px] text-[#11142D] py-1">
            Over a decade
          </h1>
          <p className="font-[450] text-[20px] sm:text-[20px] leading-[30px] text-[#11142D] text-center">
            of Industry leadership
          </p>
        </div>
        <div className="delivered col-span-1 flex flex-col items-center justify-start">
          <UsersIcon size="100" stroke="black" />
          <div className="divider w-[120px] border border-[#00A96E] my-2" />
          <h1 className="bebas font-normal text-[24px] sm:text-[24px] leading-[28.8px] text-[#11142D] py-1">
            Over 2000
          </h1>
          <p className="font-[450] text-[20px] sm:text-[20px] leading-[30px] text-[#11142D] text-center">
            Strategic attendees
          </p>
        </div>
        <div className="delivered col-span-1 flex flex-col items-center justify-start">
          <LocationIcon size="100" stroke="black" />
          <div className="divider w-[120px] border border-[#00A96E] my-2" />
          <h1 className="bebas font-normal text-[24px] sm:text-[24px] leading-[28.8px] text-[#11142D] py-1">
            More than 20
          </h1>
          <p className="font-[450] text-[20px] sm:text-[20px] leading-[30px] text-[#11142D] text-center">
            Partner countries in attendance
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
