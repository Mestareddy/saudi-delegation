"use client";
import { toggleRegistrantDetailsModalClose } from "@/lib/features/registrantDetailsModalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Modal } from "antd";
import React from "react";
import RegistrantMoreDetails from "./RegistrantMoreDetails";
import RegistrantMainDetails from "./RegistrantMainDetails";

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
      className="!w-[100vw]"
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <RegistrantMainDetails registrantInfo={registrantInfo} />
        <RegistrantMoreDetails registrantInfo={registrantInfo} />
      </div>
    </Modal>
  );
};

export default RegistrantDetailsModal;
