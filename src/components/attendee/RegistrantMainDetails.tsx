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
  status: string;
  requestBooth: boolean
  requestAsSpeaker: boolean
}

const RegistrantMainDetails: React.FunctionComponent<RegistrantMainDetailsProps> =
  ({
    businessEmail,
    firstName,
    industry,
    lastName,
    nationality,
    registrantId,
    status,
    requestAsSpeaker,
    requestBooth,
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
          />
          <div className="w-full border border-[rgba(18,18,18,0.1)]" />
          <BoothData
            status={status}
            registrantId={registrantId}
            requestBooth={requestBooth}
          />
        </div>
      </div>
    );
  };

export default RegistrantMainDetails;
