import React from 'react'
import Lottie from "lottie-react";
import { Heading, Paragraph, CustomButton } from '../common'
import SuccessAnimation from "../../../public/animations/success.lottie.json";
import { useAppDispatch } from '@/lib/hooks';
import { toggleRegisterModalOpen } from '@/lib/features/registerModalSlice';

interface RegistrationCompletedProps {
  onClose: () => void
}

const RegistrationCompleted: React.FunctionComponent<RegistrationCompletedProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const handleOpenModal = () => {
    onClose()
    dispatch(toggleRegisterModalOpen());
  };

  return (
    <div className="p-[50px] border border-gray-40">
      <div className="text-center space-y-5">
        <div className="mb-6 md:mb-0">
          <Lottie style={{
            height: 170,
          }} animationData={SuccessAnimation} loop={true} />
        </div>
        <Heading type="h2">
          Submitted
        </Heading>
        <Paragraph className="text-lg">
          Your registration has been received and a confirmation email sent to registered email.
        </Paragraph>
        <Paragraph className="text-lg">
          An invitation will be sent once your company has been confirmed for attendance.
        </Paragraph>
        <div className="h-[1px] w-2/5  mx-auto bg-gray-40" />
        <div className="flex flex-col justify-center items-center mx-auto">
          <CustomButton onClick={handleOpenModal}>
            New Registration
          </CustomButton>
        </div>
      </div>
    </div>
  )
}

export default RegistrationCompleted
