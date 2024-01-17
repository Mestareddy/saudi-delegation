"use client";
import { toggleRegistrantDetailsModalClose } from "@/lib/features/registrantDetailsModalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Modal } from "antd";
import React from "react";
import RegistrantMainDetails from "./RegistrantMainDetails";
import RegistrantMoreDetails from "./RegistrantMoreDetails";

interface Props {
  registrantModalStatus?: boolean;
}

const RegistrantDetailsModal = ({ registrantModalStatus }: Props) => {
  const dispatch = useAppDispatch();

  const registrantInfo = useAppSelector(
    (state: RootState) => state.registrantDetailsModalSlice.data
  );

  const handleCancel = () => {
    dispatch(toggleRegistrantDetailsModalClose());
  };

  return (
    <Modal
      centered
      open={registrantModalStatus}
      onCancel={handleCancel}
      footer={null}
      width={1000}
    >
      <RegistrantMainDetails registrantInfo={registrantInfo} />
      <RegistrantMoreDetails registrantInfo={registrantInfo} />
    </Modal>
  );
};

export default RegistrantDetailsModal;
