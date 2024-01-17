"use client";
import { toggleRegistrantDetailsModalClose } from "@/lib/features/registrantDetailsModalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Modal } from "antd";
import React from "react";

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
      title="Modal 1000px width"
      centered
      open={registrantModalStatus}
      onCancel={handleCancel}
      footer={null}
      width={1000}
    >
      <p>{registrantInfo.business_name}</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
};

export default RegistrantDetailsModal;
