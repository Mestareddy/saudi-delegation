"use client";
import { Button, ButtonProps } from "antd";
import { Url } from "next/dist/shared/lib/router/router";
// import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  buttonText?: string;
  buttonurl?: Url;
  buttonIcon?: React.ReactNode;
  textColor?: string;
  bgColor?: string;
  border?: string;
} & ButtonProps;

const CustomButton = ({
  buttonText,
  // buttonurl,
  buttonIcon,
  textColor,
  bgColor,
  border,
  ...props
}: Props) => {
  // const router = useRouter()
  // const buttonAction = () => {
  //   console.log("buttonText", buttonText);
  //   console.log("buttonUrl", buttonurl);
  //   //   if (props.buttonUrl) {
  //   //       router.push()
  //   //   }
  // };
  return (
    <Button
      // onClick={() => buttonAction()}
      className={`${textColor ? `!text-${textColor}` : "!text-white"} ${
        bgColor ? `!bg-${bgColor}` : "!bg-transparent"
      } ${
        border ? `!border-${border}` : "!border-0"
      } hover:!bg-green-500 hover:!text-white hover:!border-green-500 !px-[30px] !lg:px-[40px] !py-[10px] !lg:py-[15px] !rounded-3xl`}
      {...props}
    >
      {buttonText}
      {buttonIcon && (
        <span className="ml-2 !text-[12px] !md:text-[16px]">{buttonIcon}</span>
      )}
    </Button>
  );
};

export default CustomButton;
