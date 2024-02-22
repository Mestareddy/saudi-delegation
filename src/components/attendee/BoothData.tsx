import StatusBox from "@/components/common/StatusBox";
import React from "react";
import AcceptButton from "./AcceptButton";
import DeclineButton from "./DeclineButton";

interface BoothDataProps {
  status: string;
  registrantId: string | number;
  requestBooth: boolean;
  booth_status: string;
  booth_reject_reason: string;
}

const BoothData: React.FunctionComponent<BoothDataProps> = ({
  registrantId,
  requestBooth,
  status,
  booth_status,
  booth_reject_reason,
}) => {
  return (
    <div>
      <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-3">
        <h1 className="left row-span-1 sm:col-span-3 font-[450] leading-[20.24px] text-[16px] text-[#828282]">
          Booth
        </h1>
        <div className="right row-span-1 sm:col-span-5">
          {requestBooth ? (
            <div>
              <h1 className="heading flex flex-row items-center font-bold leading-[20.24px] text-[16px] sm:text-[20px] text-[#11142D] gap-2">
                Requested
                <StatusBox
                  acceptanceStatus={
                    requestBooth && booth_status === null
                      ? "pending"
                      : requestBooth && booth_status === "approve"
                      ? "accepted"
                      : "declined"
                  }
                />
              </h1>
            </div>
          ) : (
            <h1 className="font-bold leading-[20.24px] text-[16px] sm:text-[20px] text-[#11142D]">
              N/A
            </h1>
          )}
          {requestBooth && booth_status === null ? (
            <div className="buttons gap-3 flex flex-row my-3">
              <AcceptButton
                eventType="booth"
                statusButton={requestBooth}
                registrantId={registrantId}
              />
              <DeclineButton
                eventType="booth"
                statusButton={requestBooth}
                registrantId={registrantId}
              />
            </div>
          ) : requestBooth && booth_status === "reject" ? (
            <div className="buttons gap-3 flex flex-row my-3">
              <AcceptButton
                eventType="booth"
                statusButton={requestBooth}
                registrantId={registrantId}
              />
              <DeclineButton
                eventType="booth"
                statusButton={requestBooth}
                registrantId={registrantId}
                disabled
              />
            </div>
          ) : requestBooth && booth_status === "approve" ? null : null}
        </div>
      </div>
      {booth_reject_reason && (
        <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-3">
          <h1 className="left row-span-1 sm:col-span-3 font-[450] leading-[20.24px] text-[16px] text-[#828282]">
            Reason for Declination
          </h1>
          <div className="right row-span-1 sm:col-span-5 text-[12px] leading-15.18px] font-bold">
            {booth_reject_reason}
          </div>
        </div>
      )}
    </div>
  );
};

export default BoothData;
