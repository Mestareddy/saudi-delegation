"use client";
import { CustomButton } from "@/components/common";
import { useAuth } from "@/components/hooks";
import { apiErrorHandler } from "@/services";
import { message } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";

const DEFAULT_TIMER = 180;

const VerifyForm = () => {
  const [otp, setOtp] = useState("");
  const [countdown, setCountdown] = useState(DEFAULT_TIMER); // Initial countdown value in seconds
  const router = useRouter();

  // const { user } = USER_SESSION();
  // const email = user?.email;

  const searchParams = useSearchParams();
  //   const unVerifiedLoginAttempt = searchParams.get("login");
  const emailParams = searchParams.get("email");
  //   const initiateOtp = useRef(false);

  const {
    verifyTokenSWR: {
      isMutating: verifyMutating,
      trigger: verifyTrigger,
      error: verifyError,
    },
    resendTokenSWR: { isMutating: resendLoading, trigger: resendTrigger },
  } = useAuth();

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  //   useEffect(() => {
  //     if (unVerifiedLoginAttempt === "true" && initiateOtp.current === false) {
  //       resendTrigger({ data: { email: emailParams }, type: "post" });
  //       initiateOtp.current = true;
  //     }
  //   }, [unVerifiedLoginAttempt]);

  const handleOtpChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  const handleResendOTP = (): void => {
    if (verifyMutating || resendLoading) return;
    resendTrigger({
      data: { email: emailParams },
      type: "post",
    }).then(() => {
      setCountdown(countdown * 1.5);
    });
  };

  const handleSubmit = () => {
    verifyTrigger({
      data: { code: otp, email: emailParams },
      type: "post",
    })
      .then(() => {
        message.open({
          type: "success",
          content: "Email successfully verified",
        });
        router.push(`/auth/reset-password?email=${emailParams}`);
      })
      .catch(() => {
        message.open({
          type: "error",
          content: apiErrorHandler(verifyError),
        });
      });
  };

  // router.push(`/auth/verify?email=${values.email}`);

  return (
    <div>
      <div className="w-full gap-5 flex flex-col pt-5 items-center">
        <span className="text-[16px] font-semibold leading-[21.86px] text-[#585A69]">
          {Math.floor(countdown / 60)
            .toString()
            .padStart(2, "0")}
          :{(countdown % 60).toString().padStart(2, "0")} mins
        </span>
        <OTPInput
          renderInput={(props) => <input {...props} />}
          value={otp}
          onChange={handleOtpChange}
          numInputs={6}
          inputStyle="md:h-11 md:!w-12 !w-10 h-8  md:px-4 md:py-3 px-2 py-1 border border-[#333333] text-[#333333] focus:border-green-minst focus-visible:outline-green-minst"
          containerStyle="justify-center md:gap-x-2.5 gap-x-1"
          //   isDisabled={verifyMutating}
        />
        <CustomButton
          variant="contained"
          onClick={handleSubmit}
          disabled={verifyMutating || resendLoading || countdown !== 0}
          isLoading={verifyMutating}
          className="w-full"
        >
          Verify
        </CustomButton>

        <CustomButton
          variant="noStyleButton"
          onClick={handleResendOTP}
          disabled={resendLoading}
          isLoading={resendLoading}
          className="w-full"
        >
          Resend OTP
        </CustomButton>
      </div>
    </div>
  );
};

export default VerifyForm;
