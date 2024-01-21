"use client";
import {
  declineSuccessModalOpen,
  toggleRegistrantDeclineModalClose,
} from "@/lib/features/registrantDetailsModalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Modal, message } from "antd";
import React from "react";
import useRegistrant from "../hooks/useRegistrant";
import { apiErrorHandler } from "@/services";
import { CustomButton } from "../common";

interface Props {
  declineModalStatus: boolean;
}

const DeclineModal = ({ declineModalStatus }: Props) => {
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(toggleRegistrantDeclineModalClose());
  };

  const declineId = useAppSelector(
    (state: RootState) => state.registrantDetailsModalSlice.rejectId
  );

  const {
    registrantRejectSWR: { error, trigger },
  } = useRegistrant();

  const onAccept = () => {
    trigger({
      data: {
        action: "reject",
        applications: [declineId],
      },
      type: "patch",
    })
      .then(() => {
        message.open({
          type: "success",
          content: "Successfully Declined Request",
        });
        dispatch(toggleRegistrantDeclineModalClose());
        dispatch(declineSuccessModalOpen());
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
      open={declineModalStatus}
      onCancel={handleCancel}
      footer={null}
      centered
      width={400}
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
        <div className="w-full my-1">
          <h1 className="text-[14px] leading-[17.71px] font-[500] text-[#333333] mb-2">
            Reason for Declination
          </h1>
          <textarea
            name=""
            id=""
            className="w-full mb-3 mt-2 border border-[#333333] p-2"
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
