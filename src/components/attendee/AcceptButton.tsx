import React from "react";
import { CustomButton } from "../common";
import { TickIcon } from "../icons";
import { useAppDispatch } from "@/lib/hooks";
import {
  setRegistrantAction,
  toggleRegistrantApproveModal,
} from "@/lib/features/registrantDetailsModalSlice";
import { RegistrantMainInfo } from "../auth";

const AddButton = ({ registrantId, eventType }: RegistrantMainInfo) => {
  const dispatch = useAppDispatch();

  const onAccept = () => {
    dispatch(toggleRegistrantApproveModal(true));
    dispatch(setRegistrantAction({
      action: 'approve',
      event: eventType,
      registrantId
    }))
  };

  return (
    <CustomButton variant="acceptButton" onClick={onAccept}>
      <div>
        <TickIcon size="22" fill="#292D32" />
      </div>
    </CustomButton>
  );
};

export default AddButton;
