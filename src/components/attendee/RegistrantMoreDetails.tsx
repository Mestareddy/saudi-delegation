import React from "react";
import useRegister from "../hooks/useRegister";
import { HeadOneProps } from "../auth/types";

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

interface RegistrantMoreDetailsProps {
  firstName: string;
  lastName: string;
  jobTitle: string;
  companyName: string;
  requestHelp: string;
  companySize: string;
  businessPhone: string;
  nationality: string;
  industry: string
  businessEmail: string
}

const RegistrantMoreDetails: React.FunctionComponent<RegistrantMoreDetailsProps> =
  ({
    businessPhone,
    companySize,
    companyName,
    firstName,
    jobTitle,
    lastName,
    industry,
    nationality,
    businessEmail,
    requestHelp,
  }) => {
    const {
      countrySWR: { data: countries },
    } = useRegister();

    const currentCountry = countries?.data?.find(
      (country) => country?.id === nationality
    );

    return (
      <div className="w-[90%] md:w-[70%] lg:w-[70%] border border-[#BDBDBD] rounded-lg">
        <div className="m-5">
          <h1 className="font-semibold leading-[20.24px] text-[16px]">
            More Details
          </h1>
          <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
            <HeadOne text="Full Name" />
            <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
              {firstName.charAt(0).toUpperCase() +
                firstName.slice(1) +
                " " +
                lastName.charAt(0).toUpperCase() +
                lastName.slice(1)}
            </div>
          </div>
          <Divider />
          <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
            <HeadOne text="Job Title" />
            <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
              {jobTitle.charAt(0).toUpperCase() + jobTitle.slice(1)}
            </div>
          </div>
          <Divider />
          <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
            <HeadOne text="Company Name" />
            <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
              {companyName.charAt(0).toUpperCase() + companyName.slice(1)}
            </div>
          </div>
          <Divider />
          <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
            <HeadOne text="Company Email" />
            <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
              {businessEmail}
            </div>
          </div>
          <Divider />
          <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
            <HeadOne text="Company Phone Number" />
            <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
              {businessPhone}
            </div>
          </div>
          <Divider />
          <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
            <HeadOne text="Company Employee/Size:" />
            <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
              {companySize}
            </div>
          </div>
          <Divider />
          <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
            <HeadOne text="Industry" />
            <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
              {industry}
            </div>
          </div>
          <Divider />
          <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
            <HeadOne text="Country" />
            <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
              {currentCountry?.name}
            </div>
          </div>
          {requestHelp && (
            <>
              <Divider />
              <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-5">
                <HeadOne text="How may we help?" />
                <div className="right row-span-1 sm:col-span-5 font-bold leading-[20.24px] text-[16px]">
                  {requestHelp}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

export default RegistrantMoreDetails;
