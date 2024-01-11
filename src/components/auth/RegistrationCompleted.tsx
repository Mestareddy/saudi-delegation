import React from 'react'
import Lottie from "lottie-react";
import { Heading, Paragraph } from '../common'
import CustomButton from '../common/CustomButton'
import SuccessAnimation from "../../../public/animations/success.lottie.json";

const RegistrationCompleted: React.FunctionComponent = () => {
  return (
    <div className="p-[50px]">
      <div className="text-center space-y-5">
        <div className="mb-6 md:mb-0">
          <Lottie style={{
            height: 170,
          }} animationData={SuccessAnimation} loop={true} />
        </div>
        <Heading type="h2" className="font-">
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
          <CustomButton buttonText={"New Registration"} />
        </div>
      </div>
    </div>
  )
}

export default RegistrationCompleted
