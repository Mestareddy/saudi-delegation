import React from "react";
import { CustomButton } from "../common";
import { TickIcon } from "../icons";
import { useAppDispatch } from "@/lib/hooks";
import {
  setApproveData,
  toggleRegistrantApproveModalOpen,
} from "@/lib/features/registrantDetailsModalSlice";
import { RegistrantMainInfo } from "../auth";

const AddButton = ({ registrantInfo }: RegistrantMainInfo) => {
  const dispatch = useAppDispatch();

  const onAccept = () => {
    dispatch(toggleRegistrantApproveModalOpen());
    dispatch(setApproveData(registrantInfo.id));
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
