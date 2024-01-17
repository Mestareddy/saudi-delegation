import StatusBox from "@/components/common/StatusBox";
import React from "react";
import { RegistrantMainInfo } from "../types";
import { CustomButton } from "@/components/common";
import { CancelIcon, TickIcon } from "@/components/icons";

const BoothData = ({ registrantInfo }: RegistrantMainInfo) => {
  const acceptanceStatus: string =
    registrantInfo.status === "register"
      ? "pending"
      : registrantInfo.status === "approved"
      ? "approved"
      : "declined";

  const onAccept = () => {
    console.log("Accept button clicked");
  };

  const onDecline = () => {
    console.log("Decline button clicked");
  };

  return (
    <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-3">
      <h1 className="left row-span-1 sm:col-span-3 font-[450] leading-[20.24px] text-[16px] text-[#828282]">
        Booth
      </h1>
      <div className="right row-span-1 sm:col-span-5">
        {registrantInfo?.request_booth ? (
          <div>
            <h1 className="heading flex flex-row items-center font-bold leading-[20.24px] text-[16px] sm:text-[20px] text-[#11142D] gap-2">
              Requested
              <StatusBox acceptanceStatus={acceptanceStatus} />
            </h1>
          </div>
        ) : (
          <h1 className="font-bold leading-[20.24px] text-[16px] sm:text-[20px] text-[#11142D]">
            N/A
          </h1>
        )}
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

export default BoothData;
