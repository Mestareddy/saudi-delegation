"use client";
import { toggleRegistrantApproveModalClose } from "@/lib/features/registrantDetailsModalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Modal, message } from "antd";
import React from "react";
import { InfoIcon } from "../icons";
import useRegistrant from "../hooks/useRegistrant";
// import { setLocalStorageItem } from "@/util";
import { apiErrorHandler } from "@/services";

interface Props {
  approvalModalStatus: boolean;
}

const ApproveModal = ({ approvalModalStatus }: Props) => {
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(toggleRegistrantApproveModalClose());
  };

  const approvedId = useAppSelector(
    (state: RootState) => state.registrantDetailsModalSlice.approveId
  );

  const {
    registrantActionSWR: { error, trigger },
  } = useRegistrant();

  const onAccept = () => {
    trigger({
      data: {
        action: "approve",
        applications: [approvedId],
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

  return (
    <Modal
      open={approvalModalStatus}
      onCancel={handleCancel}
      footer={null}
      closable={false}
      centered
    >
      <div className="flex flex-col justify-center items-center w-full">
        <InfoIcon />

        <p className="py-3 text-center leading-[20.24px] text-[16px] font-[450]">
          Are you sure you want to approve this registration?
        </p>
        <div className="w-full border border-[rgba(18,18,18,0.1)] my-3" />
        <div className="flex justify-between my-5 w-full">
          <button
            onClick={handleCancel}
            className="hover:opacity-60 cursor-pointer p-0 appearance-none bg-transparent w-[50%] font-semibold leading-[19.09px] text-[16px] text-center"
          >
            Cancel
          </button>
          <button
            onClick={onAccept}
            className="hover:opacity-60 cursor-pointer p-0 appearance-none bg-transparent w-[50%] font-semibold leading-[19.09px] text-[16px] text-center"
          >
            Yes, Approve
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ApproveModal;
