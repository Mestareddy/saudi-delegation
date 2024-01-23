"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Modal, message } from "antd";
import React from "react";
import { InfoIcon } from "../icons";
import useRegistrant from "../hooks/useRegistrant";
import { apiErrorHandler } from "@/services";
import { toggleRegistrantApproveModal } from "@/lib/features/registrantDetailsModalSlice";

const ApproveModal = () => {
  const dispatch = useAppDispatch();

  const modalState = useAppSelector(
    (state: RootState) =>
      state.registrantDetailsModalSlice.registrantApproveModal
  );

  const handleCancel = () => {
    dispatch(toggleRegistrantApproveModal(false));
  };

  const registrantData = useAppSelector(
    (state: RootState) => state.registrantDetailsModalSlice.registrantAction
  );

  const {
    registrantSWR: { trigger, isMutating },
  } = useRegistrant({ eventType: registrantData.event, action: registrantData.action });

  const onAccept = () => {
    if (registrantData) {
      const { action, registrantId } = registrantData
      trigger({
        data: {
          action,
          applications: [registrantId],
        },
        type: "patch",
      })
        .then(() => {
          message.open({
            type: "success",
            content: "Successfully Approved Request",
          });
          handleCancel()
        })
        .catch((error) => {
          message.open({
            type: "error",
            content: apiErrorHandler(error),
          });
        });
    }
  };

  return (
    <Modal
      open={modalState}
      onCancel={handleCancel}
      footer={null}
      closable={false}
      centered
      width={400}
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
            disabled={isMutating}
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
