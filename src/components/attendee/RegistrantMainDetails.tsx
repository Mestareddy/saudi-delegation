import React from "react";
import AttendeeData from "./AttendeeData";
import SpeakingData from "./SpeakingData";
import BoothData from "./BoothData";
import DeclinedData from "./DeclinedData";
interface RegistrantMainDetailsProps {
  businessEmail: string;
  firstName: string;
  industry: string;
  lastName: string;
  nationality: string;
  registrantId: string | number;
  requestBooth: boolean;
  requestAsSpeaker: boolean;
  status: string;
  speaker_status: string;
  booth_status: string;
  reject_reason: string;
  speaker_reject_reason: string;
  booth_reject_reason: string;
}

const RegistrantMainDetails: React.FunctionComponent<
  RegistrantMainDetailsProps
> = ({
  businessEmail,
  firstName,
  industry,
  lastName,
  nationality,
  registrantId,
  requestAsSpeaker,
  requestBooth,
  status,
  speaker_status,
  booth_status,
  reject_reason,
  speaker_reject_reason,
  booth_reject_reason,
}) => {
  return (
    <div className="w-[90%] md:w-[70%] lg:w-[70%] border border-[#BDBDBD] rounded-lg">
      <div className="m-5">
        <h1 className="font-semibold leading-[20.24px] text-[16px] text-[#4F4F4F]">
          Main Details
        </h1>
        <AttendeeData
          businessEmail={businessEmail}
          firstName={firstName}
          industry={industry}
          lastName={lastName}
          nationality={nationality}
          registrantId={registrantId}
          status={status}
          reject_reason={reject_reason}
        />
        <div className="w-full border border-[rgba(18,18,18,0.1)]" />
        {status === "declined" && (
          <>
            <DeclinedData />
            <div className="w-full border border-[rgba(18,18,18,0.1)]" />
          </>
        )}
        <SpeakingData
          status={status}
          registrantId={registrantId}
          requestAsSpeaker={requestAsSpeaker}
          speaker_status={speaker_status}
          speaker_reject_reason={speaker_reject_reason}
        />
        <div className="w-full border border-[rgba(18,18,18,0.1)]" />
        <BoothData
          status={status}
          registrantId={registrantId}
          requestBooth={requestBooth}
          booth_status={booth_status}
          booth_reject_reason={booth_reject_reason}
        />
      </div>
    </div>
  );
};

export default RegistrantMainDetails;
