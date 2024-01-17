import { message, Modal } from "antd";
import React, { useState } from "react";
import { Heading } from "../common";
import { RoundedCloseIcon } from "../icons";
import AuthHeader from "./AuthHeader";
import PartnershipSection from "./PartnershipSection";
import RegistrationCompleted from "./RegistrationCompleted";
import RegistrationForm from "./RegistrationForm";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { toggleRegisterModalClose } from "@/lib/features/registerModalSlice";
import useRegister from "../hooks/useRegister";
import { apiErrorHandler } from "@/services";
import { TRegisterform } from "./types";

interface RegistrationModalProps {
  open: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FunctionComponent<
  RegistrationModalProps
> = () => {
  const [hasRegistered, setHasRegistered] = useState(false);
  const dispatch = useAppDispatch();
  const registerModalStatus = useAppSelector(
    (state: RootState) => state.registerModalSlice.value
  );

  const {
    registerEventSWR: { isMutating, trigger },
  } = useRegister();

  const registerEvent = (data: TRegisterform) => {
    data.business_phone = data.business_phone.replace(/^0/, "+234");
    trigger({
      data: data,
    })
      .then(() => {
        setHasRegistered(true);
      })
      .catch((error) => {
        message.open({
          type: "error",
          content: apiErrorHandler(error),
        });
      });
  };

  const handleCancel = () => {
    dispatch(toggleRegisterModalClose());
  };

  const handleCloseStatusModal = () => {
    setHasRegistered(false);
  };
  return (
    <Modal
      footer={null}
      width={hasRegistered ? 622 : 1480}
      className="border-0"
      open={registerModalStatus}
      onCancel={handleCancel}
      style={{ top: !hasRegistered ? 0 : "20%" }}
      closeIcon={<RoundedCloseIcon />}
    >
      {hasRegistered ? (
        <RegistrationCompleted onClose={handleCloseStatusModal} />
      ) : (
        <div className="md:p-[100px]">
          <Heading type="h1">
            Register to <span className="text-green-hover">attend</span>{" "}
          </Heading>
          <div className="flex flex-col md:flex-row  items-start md:gap-[70px] self-stretch mt-[30px]">
            <div className="basis-2/4">
              <AuthHeader />
              <div className="mt-5 hidden md:block">
                <PartnershipSection />
              </div>
            </div>
            <div className="basis-[75%]">
              <RegistrationForm
                onSubmit={registerEvent}
                isLoading={isMutating}
              />
            </div>
            <div className="block md:hidden">
              <div className="h-[1px] w-full bg-gray-60 my-2.5" />
              <PartnershipSection />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default RegistrationModal;
