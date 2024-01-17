import StatusBox from "@/components/common/StatusBox";
import Link from "next/link";
import React from "react";
import useRegister from "../../hooks/useRegister";
import { RegistrantMainInfo } from "../types";
import { CustomButton } from "@/components/common";
import { CancelIcon, TickIcon } from "@/components/icons";

const AttendeeData = ({ registrantInfo }: RegistrantMainInfo) => {
  const acceptanceStatus: string =
    registrantInfo.status === "register"
      ? "pending"
      : registrantInfo.status === "approved"
      ? "approved"
      : "declined";

  const {
    countrySWR: { data: countries },
  } = useRegister();

  const currentCountry = countries?.data?.find(
    (country) => country?.id === registrantInfo?.nationality
  );

  const onAccept = () => {
    console.log("Accept button clicked");
  };

  const onDecline = () => {
    console.log("Decline button clicked");
  };

  return (
    <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-3">
      <h1 className="left row-span-1 sm:col-span-3 font-[450] leading-[20.24px] text-[16px] text-[#828282]">
        Attendee
      </h1>
      <div className="right row-span-1 sm:col-span-5">
        <h1 className="heading flex flex-row items-center font-bold leading-[20.24px] text-[16px] sm:text-[20px] text-[#11142D] gap-2">
          {registrantInfo?.first_name.charAt(0).toUpperCase() +
            registrantInfo?.first_name.slice(1) +
            " " +
            registrantInfo?.last_name.charAt(0).toUpperCase() +
            registrantInfo?.last_name.slice(1)}
          <StatusBox acceptanceStatus={acceptanceStatus} />
        </h1>
        <div className="flex flex-col md:flex-row gap-2 my-2">
          <h1 className="bg-[#f2f2f2] text-[#11142d] px-2 rounded-2xl">
            {registrantInfo?.industry}
          </h1>
          <h1 className="bg-[#f2f2f2] text-[#11142d] px-2 rounded-2xl">
            {currentCountry?.name}
          </h1>
          <Link
            href={"mailto:chillco@email.com"}
            className="!bg-[#f2f2f2] !text-[#11142d] px-2 rounded-2xl"
          >
            {registrantInfo?.business_email}
          </Link>
        </div>
        <div className="buttons gap-3 flex flex-row my-3">
          <CustomButton variant="acceptButton" onClick={onAccept}>
            <div>
              <TickIcon size="22" fill="#292D32" />
            </div>
          </CustomButton>
          <CustomButton variant="declineButton" onClick={onDecline}>
            <div>
              <CancelIcon size="22" fill="#292D32" />
            </div>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default AttendeeData;
