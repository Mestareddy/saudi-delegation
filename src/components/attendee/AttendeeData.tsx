import StatusBox from "@/components/common/StatusBox";
import Link from "next/link";
import React from "react";
import useRegister from "../hooks/useRegister";
import AcceptButton from "./AcceptButton";
import DeclineButton from "./DeclineButton";

interface AttendeeDataProps {
  firstName: string;
  lastName: string;
  industry: string;
  status: string;
  nationality: string;
  registrantId: string | number;
  businessEmail: string;
  reject_reason: string;
  registrantDetailsData?: string[];
}

const AttendeeData: React.FunctionComponent<AttendeeDataProps> = ({
  businessEmail,
  firstName,
  industry,
  lastName,
  registrantId,
  nationality,
  status,
  reject_reason,
}) => {
  const acceptanceStatus: string =
    status === "register"
      ? "pending"
      : status === "approve"
      ? "approved"
      : "declined";

  const {
    countrySWR: { data: countries },
  } = useRegister();

  const currentCountry = countries?.data?.find(
    (country) => country?.id === nationality
  );

  return (
    <div>
      <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-3">
        <h1 className="left row-span-1 sm:col-span-3 font-[450] leading-[20.24px] text-[16px] text-[#828282]">
          Attendee
        </h1>
        <div className="right row-span-1 sm:col-span-5">
          <h1 className="heading flex flex-row items-center font-bold leading-[20.24px] text-[16px] sm:text-[20px] text-[#11142D] gap-2">
            {firstName?.charAt(0).toUpperCase() +
              firstName?.slice(1) +
              " " +
              lastName?.charAt(0).toUpperCase() +
              lastName?.slice(1)}
            <StatusBox acceptanceStatus={acceptanceStatus} />
          </h1>
          <div className="flex flex-col md:flex-row gap-2 my-2">
            <h1 className="bg-[#f2f2f2] text-[#11142d] px-2 rounded-2xl">
              {industry}
            </h1>
            <h1 className="bg-[#f2f2f2] text-[#11142d] px-2 rounded-2xl">
              {currentCountry?.name}
            </h1>
            <Link
              href={"mailto:chillco@email.com"}
              className="!bg-[#f2f2f2] !text-[#11142d] px-2 rounded-2xl"
            >
              {businessEmail}
            </Link>
          </div>
          {status === "register" && reject_reason === null ? (
            <div className="buttons gap-3 flex flex-row my-3">
              <AcceptButton
                eventType="attendee"
                statusButton={status}
                registrantId={registrantId}
              />
              <DeclineButton
                eventType="attendee"
                statusButton={status}
                registrantId={registrantId}
              />
            </div>
          ) : status === "reject" && reject_reason !== null ? (
            <div className="buttons gap-3 flex flex-row my-3">
              <AcceptButton
                eventType="attendee"
                statusButton={status}
                registrantId={registrantId}
              />
              <DeclineButton
                eventType="attendee"
                statusButton={status}
                registrantId={registrantId}
                disabled
              />
            </div>
          ) : status === "approve" ? null : null}
        </div>
      </div>
      {reject_reason && (
        <div className="attendee grid grid-rows-1 sm:grid-cols-8 my-3">
          <h1 className="left row-span-1 sm:col-span-3 font-[450] leading-[20.24px] text-[16px] text-[#828282]">
            Reason for Declination
          </h1>
          <div className="right row-span-1 sm:col-span-5 text-[12px] leading-15.18px] font-bold">
            {reject_reason}
          </div>
        </div>
      )}
    </div>
  );
};

export default AttendeeData;
