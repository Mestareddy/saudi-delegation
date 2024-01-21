"use client";
import {
  declineSuccessModalClose,
  toggleRegistrantDetailsModalClose,
} from "@/lib/features/registrantDetailsModalSlice";
import { useAppDispatch } from "@/lib/hooks";
import { Modal } from "antd";
import React from "react";
import { SendIcon } from "../icons";
import { CustomButton } from "../common";

interface Props {
  declineSuccessModalStatus: boolean;
}

const DeclineSuccessModal = ({ declineSuccessModalStatus }: Props) => {
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(declineSuccessModalClose());
  };

  const onDone = () => {
    dispatch(declineSuccessModalClose());
    dispatch(toggleRegistrantDetailsModalClose());
  };

  return (
    <Modal
      open={declineSuccessModalStatus}
      onCancel={handleCancel}
      footer={null}
      centered
      width={400}
    >
      <div className="flex flex-col justify-center items-center w-full">
        <SendIcon />
        <h1 className="uppercase bebas text-[40px] font-normal leading-[48px]">
          Submitted
        </h1>

        <p className="py-3 text-center leading-[20.24px] text-[16px] font-[450]">
          Message is on it&apos;s way
        </p>
        <p className="py-3 text-center leading-[20.24px] text-[16px] font-[450]">
          The attendee will receive your message
        </p>
        <div className="w-[30%] border border-[rgba(18,18,18,0.1)] my-3" />
        <div className="flex flex-col justify-center items-center my-5 w-full">
          <CustomButton
            onClick={onDone}
            className="hover:opacity-60 cursor-pointer p-0 appearance-none bg-transparent w-[30%] font-semibold leading-[19.09px] text-[16px] text-center"
          >
            Done
          </CustomButton>
          <button
            onClick={onDone}
            className="hover:opacity-60 cursor-pointer p-0 appearance-none bg-transparent w-[50%] font-semibold leading-[19.09px] text-[16px] text-center mt-7 mb-5"
          >
            Recall Message
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeclineSuccessModal;
