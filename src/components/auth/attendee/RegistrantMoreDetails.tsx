import React from "react";
import useRegister from "../../hooks/useRegister";
import { HeadOneProps, RegistrantMoreInfo } from "../types";

const HeadOne = ({ text }: HeadOneProps) => {
  return (
    <h1 className="left row-span-1 sm:col-span-3 font-[450] leading-[20.24px] text-[16px] text-[#828282]">
      {text}
    </h1>
  );
};

const Divider = () => {
  return <div className="w-full border border-[rgba(18,18,18,0.1)]" />;
};

const RegistrantMoreDetails = ({ registrantInfo }: RegistrantMoreInfo) => {
  const {
    countrySWR: { data: countries },
  } = useRegister();

  const currentCountry = countries?.data?.find(
    (country) => country?.id === registrantInfo?.nationality
  );

  return (
    <div className="w-[90%] sm:w-[70%] lg:w-[60%] border border-[#BDBDBD] rounded-lg">
      <div className="m-5">
        <h1 className="font-semibold leading-[20.24px] text-[16px]">
          More Details
        </h1>
        <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
          <HeadOne text="Full Name" />
          <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
            {registrantInfo?.first_name.charAt(0).toUpperCase() +
              registrantInfo?.first_name.slice(1) +
              " " +
              registrantInfo?.last_name.charAt(0).toUpperCase() +
              registrantInfo?.last_name.slice(1)}
          </div>
        </div>
        <Divider />
        <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
          <HeadOne text="Job Title" />
          <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
            {registrantInfo?.job_title.charAt(0).toUpperCase() +
              registrantInfo?.job_title.slice(1)}
          </div>
        </div>
        <Divider />
        <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
          <HeadOne text="Company Name" />
          <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
            {registrantInfo?.company_name.charAt(0).toUpperCase() +
              registrantInfo?.company_name.slice(1)}
          </div>
        </div>
        <Divider />
        <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
          <HeadOne text="Company Email" />
          <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
            {registrantInfo?.business_email}
          </div>
        </div>
        <Divider />
        <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
          <HeadOne text="Company Phone Number" />
          <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
            {registrantInfo?.business_phone}
          </div>
        </div>
        <Divider />
        <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
          <HeadOne text="Company Employee/Size:" />
          <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
            {registrantInfo?.company_size}
          </div>
        </div>
        <Divider />
        <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
          <HeadOne text="Industry" />
          <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
            {registrantInfo?.industry}
          </div>
        </div>
        <Divider />
        <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
          <HeadOne text="Country" />
          <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
            {currentCountry?.name}
          </div>
        </div>
        {registrantInfo?.request_help && (
          <>
            <Divider />
            <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
              <HeadOne text="How may we help?" />
              <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
                {registrantInfo?.request_help}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrantMoreDetails;
