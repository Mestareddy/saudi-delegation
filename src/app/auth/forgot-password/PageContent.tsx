import React from "react";
import ForgotForm from "./components/ForgotForm";

const ForgotPageContent: React.FunctionComponent = () => {
  return (
    <>
      <h1 className="uppercase bebas text-[#121212] text-[24px] leading-[28.8px] text-center font-normal mb-3">
        Forgot Password
      </h1>
      <p className="text-[#585A69] font-[500] text-[14px] text-center leading-[17.71px]">
        To reset your login password, please enter your email and continue
      </p>
      <ForgotForm />
    </>
  );
};

export default ForgotPageContent;
