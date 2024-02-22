"use cliient";
import { CustomButton } from "@/components/common";
import { FacebookIcon, RoundedCloseIcon, XIcon } from "@/components/icons";
import LinkedInIcon from "@/components/icons/Linkedin";
import { toggleSpeakerModalClose } from "@/lib/features/speakerModalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { Modal } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SpeakerModal = ({
  speakerModalStatus,
  handleCancelSpeakerModal,
}: any) => {
  const dispatch = useAppDispatch();
  const handleCancel = () => {
    dispatch(toggleSpeakerModalClose());
  };

  const speakerModalData = useAppSelector(
    (state: RootState) => state.speakerModalSlice.speakerData
  );

  console.log("speakerModalData", speakerModalData);

  // Splitting the full name into parts
  const nameParts = speakerModalData?.name?.split(" ");

  // Extracting the last name
  const lastName = nameParts?.pop();

  // Rejoining the remaining parts of the name
  const firstName = nameParts?.join(" ");

  return (
    <Modal
      footer={null}
      width={1480}
      className="border-0 max-h-[90vh] relative"
      open={speakerModalStatus}
      onCancel={handleCancelSpeakerModal}
      closeIcon={null}
      centered
      // style={{ padding: 0 }}
      // styles={{
      //   content: {
      //     padding: 0,
      //   },
      // }}
      // style={{  }}
    >
      <div className="z-[10] flex justify-end relative">
        <CustomButton
          onClick={handleCancel}
          variant="noStyleButton"
          className="hover:!bg-none !p-0 !fixed"
        >
          <RoundedCloseIcon stroke="#000000" size="33" />
        </CustomButton>
      </div>
      <div className="flex flex-col sm:flex-row w-full pt-10 sm:pt-0">
        <Image
          width={500}
          height={500}
          src={speakerModalData?.image}
          alt=""
          className="w-full sm:w-1/2"
        />
        <div className="w-full sm:w-1/2 flex justify-center flex-col p-0 py-4 sm:py-0 sm:p-10">
          <h1 className="bebas text-[48px] leading-[57.6px] font-normal">
            {firstName + " "} <span className="text-[#00A96E]">{lastName}</span>
          </h1>
          <p className="circular py-1 text-gray-20 font-medium text-[16px] leading-[20.24px]">
            {speakerModalData?.field}
          </p>
          <div className="flex flex-row py-1 space-x-2.5 mt-2.5">
            <Link target="_blank" href={speakerModalData?.socials?.linkedIn}>
              <LinkedInIcon size={"20"} fill="black" />
            </Link>
            <Link target="_blank" href={speakerModalData?.socials?.x}>
              <XIcon size={"20"} />
            </Link>
            <Link target="_blank" href={speakerModalData?.socials?.facebook}>
              <FacebookIcon size={"20"} />
            </Link>
          </div>
          <p className="circular mt-2.5 line-clamp-5 h-[200px] sm:h-[500px] overflow-y-auto">
            {speakerModalData?.experience}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default SpeakerModal;
