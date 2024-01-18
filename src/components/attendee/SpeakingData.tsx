import StatusBox from "@/components/common/StatusBox";
import React from "react";
import { RegistrantMainInfo } from "../auth/types";
import AddButton from "./AcceptButton";
import DeclineButton from "./DeclineButton";

const SpeakingData = ({ registrantInfo }: RegistrantMainInfo) => {
  const acceptanceStatus: string =
    registrantInfo.status === "register"
      ? "pending"
      : registrantInfo.status === "approved"
      ? "approved"
      : "declined";

  return (
    <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-3">
      <h1 className="left row-span-1 sm:col-span-3 font-[450] leading-[20.24px] text-[16px] text-[#828282]">
        Speaking Opportunity
      </h1>
      <div className="right row-span-1 sm:col-span-5">
        {registrantInfo?.request_as_speaker ? (
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
          <AddButton registrantInfo={registrantInfo} />
          <DeclineButton registrantInfo={registrantInfo} />
        </div>
      </div>
    </div>
  );
};

export default SpeakingData;
