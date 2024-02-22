import StatusBox from "@/components/common/StatusBox";
import React from "react";
import AcceptButton from "./AcceptButton";
import DeclineButton from "./DeclineButton";

interface SpeakingDataProps {
  status: string;
  registrantId: string | number;
  requestAsSpeaker: boolean;
  speaker_status?: string;
  speaker_reject_reason?: string;
}

const SpeakingData: React.FunctionComponent<SpeakingDataProps> = ({
  registrantId,
  requestAsSpeaker,
  status,
  speaker_status,
  speaker_reject_reason,
}) => {
  return (
    <div>
      <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-3">
        <h1 className="left row-span-1 sm:col-span-3 font-[450] leading-[20.24px] text-[16px] text-[#828282]">
          Speaking Opportunity
        </h1>
        <div className="right row-span-1 sm:col-span-5">
          {requestAsSpeaker ? (
            <div>
              <h1 className="heading flex flex-row items-center font-bold leading-[20.24px] text-[16px] sm:text-[20px] text-[#11142D] gap-2">
                Requested
                <StatusBox
                  acceptanceStatus={
                    requestAsSpeaker && speaker_status === null
                      ? "pending"
                      : requestAsSpeaker && speaker_status === "approve"
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
          {requestAsSpeaker && speaker_status === null ? (
            <div className="buttons gap-3 flex flex-row my-3">
              <AcceptButton
                eventType="speaker"
                statusButton={requestAsSpeaker}
                registrantId={registrantId}
              />
              <DeclineButton
                eventType="speaker"
                statusButton={requestAsSpeaker}
                registrantId={registrantId}
              />
            </div>
          ) : requestAsSpeaker && speaker_status === "reject" ? (
            <div className="buttons gap-3 flex flex-row my-3">
              <AcceptButton
                eventType="speaker"
                statusButton={requestAsSpeaker}
                registrantId={registrantId}
              />
              <DeclineButton
                eventType="speaker"
                statusButton={requestAsSpeaker}
                registrantId={registrantId}
                disabled
              />
            </div>
          ) : requestAsSpeaker && speaker_status === "approve" ? null : null}
        </div>
      </div>
      {speaker_reject_reason && (
        <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-3">
          <h1 className="left row-span-1 sm:col-span-3 font-[450] leading-[20.24px] text-[16px] text-[#828282]">
            Reason for Declination
          </h1>
          <div className="right row-span-1 sm:col-span-5 text-[12px] leading-15.18px] font-bold">
            {speaker_reject_reason}
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeakingData;
