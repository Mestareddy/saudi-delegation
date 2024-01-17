import StatusBox from "@/components/common/StatusBox";
import React from "react";
import { RegistrantMainInfo } from "../types";
import { CustomButton } from "@/components/common";
import { CancelIcon, TickIcon } from "@/components/icons";
// import useRegistrant from "@/components/hooks/useRegistrant";
// import { message } from "antd";
// import { setLocalStorageItem } from "@/util";
// import { apiErrorHandler } from "@/services";

const SpeakingData = ({ registrantInfo }: RegistrantMainInfo) => {
  const acceptanceStatus: string =
    registrantInfo.status === "register"
      ? "pending"
      : registrantInfo.status === "approved"
      ? "approved"
      : "declined";

  // console.log(registrantInfo);

  // const {
  //   registrantActionSWR: { error, trigger },
  // } = useRegistrant();

  const onAccept = () => {
    // trigger({
    //   data: {
    //     action: "approve",
    //     applications: [registrantInfo.id],
    //   },
    // })
    //   .then((data) => {
    //     message.open({
    //       type: "success",
    //       content: "Successfully logged in",
    //     });
    //     setLocalStorageItem("user_details", data.data);
    //     // router.push("/app/registrations");
    //   })
    //   .catch(() => {
    //     message.open({
    //       type: "error",
    //       content: apiErrorHandler(error),
    //     });
    //   });
  };

  const onDecline = () => {
    // trigger({
    //   data: {
    //     action: "reject",
    //     applications: [registrantInfo.id],
    //   },
    // })
    //   .then((data) => {
    //     message.open({
    //       type: "success",
    //       content: "Successfully logged in",
    //     });
    //     setLocalStorageItem("user_details", data.data);
    //     // router.push("/app/registrations");
    //   })
    //   .catch(() => {
    //     message.open({
    //       type: "error",
    //       content: apiErrorHandler(error),
    //     });
    //   });
  };

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

export default SpeakingData;
