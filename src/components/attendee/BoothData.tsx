import StatusBox from "@/components/common/StatusBox";
import React from "react";
import AcceptButton from "./AcceptButton";
import DeclineButton from "./DeclineButton";

interface BoothDataProps {
  status: string;
  registrantId: string | number;
  requestBooth: boolean;
}

const BoothData: React.FunctionComponent<BoothDataProps> = ({
  registrantId,
  requestBooth,
  status,
}) => {
  const acceptanceStatus: string =
    status === "register"
      ? "pending"
      : status === "approve"
      ? "approved"
      : "declined";

  return (
    <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-3">
      <h1 className="left row-span-1 sm:col-span-3 font-[450] leading-[20.24px] text-[16px] text-[#828282]">
        Booth
      </h1>
      <div className="right row-span-1 sm:col-span-5">
        {requestBooth ? (
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
        {requestBooth && (
          <div className="buttons gap-3 flex flex-row my-3">
            <AcceptButton
              eventType="booth"
              registrantId={registrantId}
              statusButton={requestBooth}
            />
            <DeclineButton
              eventType="booth"
              registrantId={registrantId}
              statusButton={requestBooth}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BoothData;
