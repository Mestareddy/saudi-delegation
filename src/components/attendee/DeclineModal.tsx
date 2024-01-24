"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Modal, message, Form, Input } from "antd";
import React from "react";
import useRegistrant from "../hooks/useRegistrant";
import { apiErrorHandler } from "@/services";
import { CustomButton } from "../common";
import {
  declineSuccessModal,
  toggleRegistrantDeclineModal,
} from "@/lib/features/registrantDetailsModalSlice";
import { RegistrantEventType } from "@/types/attendee";

const { TextArea } = Input;

interface Props {
  declineModalStatus: boolean;
}

const DeclineModal = ({ declineModalStatus }: Props) => {
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch(toggleRegistrantDeclineModal(false));
  };

  const declineAction = useAppSelector(
    (state: RootState) => state.registrantDetailsModalSlice.registrantAction
  );

  const {
    registrantSWR: { error, trigger, isMutating },
  } = useRegistrant({
    eventType: declineAction.event,
    action: declineAction.action,
  });

  function getRejectReasonKey(event?: RegistrantEventType) {
    switch (event) {
      case "booth":
        return "booth_reject_reason";
      case "speaker":
        return "speaker_reject_reason";
      default:
        return "reject_reason";
    }
  }

  const onDecline = ({ reject_reason }: { reject_reason: string }) => {
    if (declineAction) {
      const { action, registrantId, event } = declineAction;
      const data = {
        action,
        applications: [registrantId],
        [getRejectReasonKey(event)]: reject_reason,
      };
      trigger({
        data,
        type: "patch",
      })
        .then(() => {
          message.open({
            type: "success",
            content: "Successfully Declined Request",
          });
          dispatch(toggleRegistrantDeclineModal(false));
          dispatch(declineSuccessModal(true));
        })
        .catch(() => {
          message.open({
            type: "error",
            content: apiErrorHandler(error),
          });
        });
    }
  };

  return (
    <Modal
      open={declineModalStatus}
      onCancel={handleCancel}
      footer={null}
      centered
      width={400}
    >
      <Form
        onFinish={onDecline}
        className="space-y-5"
        layout="vertical"
        requiredMark={false}
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
            <Form.Item
              name="reject_reason"
              // className="w-full mb-3 mt-2 !border !border-[#333333] p-2"
              rules={[{ required: true, message: "Please input reason for rejection" }]}
            >
              <TextArea rows={10} />
            </Form.Item>
          </div>
          <CustomButton disabled={isMutating} variant="contained" className="w-full">
            Submit
          </CustomButton>
        </div>
      </Form>
    </Modal>
  );
};

export default DeclineModal;
