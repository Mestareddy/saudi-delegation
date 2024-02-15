"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Button, Modal } from "antd";
import React from "react";
import RegistrantMoreDetails from "./RegistrantMoreDetails";
import RegistrantMainDetails from "./RegistrantMainDetails";
import { toggleRegistrantDetailsModal } from "@/lib/features/registrantDetailsModalSlice";
import { CloseOutlined } from "@ant-design/icons";
import { CustomButton } from "../common";
import { ArrowLeftIcon } from "../icons";

interface Props {
  registrantModalStatus?: boolean;
}

const RegistrantDetailsModal = ({ registrantModalStatus }: Props) => {
  const dispatch = useAppDispatch();

  const data = useAppSelector(
    (state: RootState) => state.registrantDetailsModalSlice.data
  );

  const handleCancel = () => {
    dispatch(toggleRegistrantDetailsModal(false));
  };

  return (
    <Modal
      centered
      open={registrantModalStatus}
      onCancel={handleCancel}
      footer={null}
      width={1000}
      className="!w-[100vw]"
      style={{ width: "100%", maxWidth: "100vw" }}
      closeIcon={null} // Disable default close button
    >
      <div style={{ position: "fixed", top: 20, left: 20 }}>
        <CustomButton
          onClick={handleCancel}
          // startIcon={<ArrowRightIcon stroke="#ffffff" />}
          starIcon={<ArrowLeftIcon stroke="#000000" />}
          variant="outlined"
          className="!py-2 !px-5"
        >
          Back
        </CustomButton>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        {data && (
          <>
            <RegistrantMainDetails
              industry={data.industry}
              status={data.status}
              registrantId={data.id}
              firstName={data.first_name}
              lastName={data.last_name}
              nationality={data.nationality}
              requestBooth={data.request_booth}
              businessEmail={data.business_email}
              requestAsSpeaker={data.request_as_speaker}
            />
            <RegistrantMoreDetails
              industry={data.industry}
              businessPhone={data.business_phone}
              companyName={data.company_name}
              firstName={data.first_name}
              companySize={data.company_size}
              jobTitle={data.job_title}
              lastName={data.last_name}
              businessEmail={data.business_email}
              nationality={data.nationality}
              requestHelp={data.request_help}
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default RegistrantDetailsModal;
