import React from "react";
import { CustomButton } from "../common";
import { CancelIcon } from "../icons";
import { RegistrantMainInfo } from "../auth";
import {
  setDeclineData,
  toggleRegistrantDeclineModalOpen,
} from "@/lib/features/registrantDetailsModalSlice";
import { useAppDispatch } from "@/lib/hooks";

const DeclineButton = ({ registrantInfo }: RegistrantMainInfo) => {
  const dispatch = useAppDispatch();

  const onDecline = () => {
    dispatch(toggleRegistrantDeclineModalOpen());
    dispatch(setDeclineData(registrantInfo.id));
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
