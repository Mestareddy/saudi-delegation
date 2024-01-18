"use client";
import { toggleRegistrantDeclineModalClose } from "@/lib/features/registrantDetailsModalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Modal, message } from "antd";
import React from "react";
import useRegistrant from "../hooks/useRegistrant";
// import { setLocalStorageItem } from "@/util";
import { apiErrorHandler } from "@/services";
import { CustomButton } from "../common";

interface Props {
  declienModalStatus: boolean;
}

const DeclineModal = ({ declienModalStatus }: Props) => {
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(toggleRegistrantDeclineModalClose());
  };

  const declineId = useAppSelector(
    (state: RootState) => state.registrantDetailsModalSlice.rejectId
  );

  const {
    registrantActionSWR: { error, trigger },
  } = useRegistrant();

  const onAccept = () => {
    trigger({
      data: {
        action: "reject",
        applications: [declineId],
      },
    })
      .then(() => {
        message.open({
          type: "success",
          content: "Successfully logged in",
        });
        // setLocalStorageItem("user_details", data.data);
        // router.push("/app/registrations");
      })
      .catch(() => {
        message.open({
          type: "error",
          content: apiErrorHandler(error),
        });
      });
  };

  // console.log("declineId", declineId);

  return (
    <Modal
      open={declienModalStatus}
      onCancel={handleCancel}
      footer={null}
      centered
    >
      <div className="flex flex-col justify-center items-start w-full">
        <div className="w-full">
          <h1 className="text-[20px] leading-[25.3px] font-bold">
            Decline Attendance
          </h1>
          <p className="text-[14px] leading-[17.71px] font-[450] text-[#4F4F4F] my-2">
            What’s the reason for declining this registration?
          </p>
        </div>
        <div className="w-full my-3">
          <h1 className="text-[14px] leading-[17.71px] font-[500] text-[#333333] my-2">
            Reason for Declination
          </h1>
          <textarea
            name=""
            id=""
            className="w-full my-3 border border-[#333333]"
          />
        </div>
        <CustomButton variant="contained" onClick={onAccept} className="w-full">
          Submit
        </CustomButton>
      </div>
    </Modal>
  );
};

export default DeclineModal;
