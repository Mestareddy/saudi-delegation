import Image from "next/image";
import React from "react";
import LoginForm from "./components/LoginForm";

const LoginPageContent: React.FunctionComponent = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-row items-center justify-center bg-[#FAFAFA]">
      <Image
        src={"/images/loginImg.png"}
        alt="login image"
        height={100}
        width={100}
        className="w-[50%] h-full"
      />
      <div className="w-[50%] flex justify-center items-center">
        <div className="border border-[#3E3E3E] flex justify-center items-center rounded-2xl w-[90%] md:w-[70%] lg:w-[50%]">
          <div className="p-5 flex flex-col justify-center items-center w-full">
            <Image
              src={"/images/nigeria_saudi_arabia_logo.png"}
              alt=""
              width={100}
              height={50}
              className="h-[50px] my-5"
            />
            <h1 className="uppercase bebas text-[#121212] text-[24px] leading-[28.8px] text-center font-normal mb-3">
              Welcome Back!
            </h1>
            <p className="text-[#585A69] font-[500] text-[14px] text-center leading-[17.71px]">
              Please enter your details.
            </p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageContent;
