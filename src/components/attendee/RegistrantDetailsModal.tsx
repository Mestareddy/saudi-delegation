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
import { useAttendee } from "../hooks";

interface Props {
  registrantModalStatus?: boolean;
}

const RegistrantDetailsModal = ({ registrantModalStatus }: Props) => {
  const dispatch = useAppDispatch();

  const registrantDetailsData = useAppSelector(
    (state: RootState) => state.registrantDetailsModalSlice.data
  );

  const handleCancel = () => {
    dispatch(toggleRegistrantDetailsModal(false));
  };

  // const {
  //   currentAttendeeSWR: { data, isLoading, mutate },
  // } = useAttendee({ type: "attendee" });

  return (
    <Modal
      centered
      open={registrantModalStatus}
      onCancel={handleCancel}
      footer={null}
      width={1000}
      className="!w-[100vw]"
      style={{
        width: "100%",
        height: "100vh",
        maxHeight: "100vh",
        maxWidth: "100vw",
        bottom: 0,
        top: 0,
      }}
      closeIcon={null} // Disable default close button
      classNames={{ content: "!min-h-[100vh]" }}
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
        {registrantDetailsData && (
          <>
            <RegistrantMainDetails
              industry={registrantDetailsData.industry}
              registrantId={registrantDetailsData.id}
              firstName={registrantDetailsData.first_name}
              lastName={registrantDetailsData.last_name}
              nationality={registrantDetailsData.nationality}
              requestBooth={registrantDetailsData.request_booth}
              businessEmail={registrantDetailsData.business_email}
              requestAsSpeaker={registrantDetailsData.request_as_speaker}
              status={registrantDetailsData.status}
              speaker_status={registrantDetailsData.speaker_status}
              booth_status={registrantDetailsData.booth_status}
              reject_reason={registrantDetailsData.reject_reason}
              speaker_reject_reason={
                registrantDetailsData.speaker_reject_reason
              }
              booth_reject_reason={registrantDetailsData.booth_reject_reason}
            />
            <RegistrantMoreDetails
              industry={registrantDetailsData.industry}
              businessPhone={registrantDetailsData.business_phone}
              companyName={registrantDetailsData.company_name}
              firstName={registrantDetailsData.first_name}
              companySize={registrantDetailsData.company_size}
              jobTitle={registrantDetailsData.job_title}
              lastName={registrantDetailsData.last_name}
              businessEmail={registrantDetailsData.business_email}
              nationality={registrantDetailsData.nationality}
              requestHelp={registrantDetailsData.request_help}
            />
          </>
        )}
      </div>
    </Modal>
  );
};

export default RegistrantDetailsModal;
