"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Modal } from "antd";
import React from "react";
import RegistrantMoreDetails from "./RegistrantMoreDetails";
import RegistrantMainDetails from "./RegistrantMainDetails";
import { toggleRegistrantDetailsModal } from "@/lib/features/registrantDetailsModalSlice";

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
    >
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
