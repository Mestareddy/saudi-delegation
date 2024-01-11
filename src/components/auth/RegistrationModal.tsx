import { Modal } from "antd";
import React from "react";
import { Heading } from "../common";
import { RoundedCloseIcon } from "../icons";
import AuthHeader from "./AuthHeader";
import PartnershipSection from "./PartnershipSection";
import RegistrationCompleted from "./RegistrationCompleted";
import RegistrationForm from "./RegistrationForm";

interface RegistrationModalProps {
  open: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FunctionComponent<RegistrationModalProps> = ({
  onClose,
  open,
}) => {
  const isSuccess = false;
  return (
    <Modal
      footer={null}
      width={isSuccess ? 622 : 1480}
      className="border-0"
      open={open}
      onCancel={onClose}
      style={{ top: 0 }}
      closeIcon={<RoundedCloseIcon />}
    >
      {isSuccess ? (
        <RegistrationCompleted />
      ) : (
        <div className="p-[100px]">
          <Heading type="h1">
            Register to <span className="text-green-hover">attend</span>{" "}
          </Heading>
          <div className="flex flex-row  items-start gap-[70px] self-stretch mt-[30px]">
            <div className="basis-2/4">
              <AuthHeader />
              <div className="mt-5">
                <PartnershipSection />
              </div>
            </div>
            <div className="basis-[75%]">
              <RegistrationForm />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default RegistrationModal;
