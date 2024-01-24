import React from "react";
import { CustomButton } from "../common";
import { CancelIcon } from "../icons";
import { RegistrantMainInfo } from "../auth";
import {
  setRegistrantAction,
  toggleRegistrantDeclineModal,
} from "@/lib/features/registrantDetailsModalSlice";
import { useAppDispatch } from "@/lib/hooks";

const DeclineButton = ({ registrantId, eventType }: RegistrantMainInfo) => {
  const dispatch = useAppDispatch();

  const onDecline = () => {
    dispatch(toggleRegistrantDeclineModal(true));
    dispatch(setRegistrantAction({
      action: 'reject',
      event: eventType,
      registrantId
    }));
  };
  return (
    <CustomButton variant="declineButton" onClick={onDecline}>
      <div>
        <CancelIcon size="22" fill="#292D32" />
      </div>
    </CustomButton>
  );
};

export default DeclineButton;
