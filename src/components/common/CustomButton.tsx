import { Button } from "antd";
import { Url } from "next/dist/shared/lib/router/router";
// import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  buttonText?: string;
  buttonUrl?: Url;
  buttonIcon?: React.ReactNode;
  textColor?: string;
  bgColor?: string;
  border?: string;
};

const CustomButton = ({
  buttonText,
  buttonUrl,
  buttonIcon,
  textColor,
  bgColor,
  border,
  ...props
}: Props) => {
  // const router = useRouter()
  const buttonAction = () => {
    console.log("buttonText", buttonText);
    console.log("buttonUrl", buttonUrl);
    //   if (props.buttonUrl) {
    //       router.push()
    //   }
  };
  return (
    <Button
      onClick={() => buttonAction()}
      className={`${textColor ? `!text-${textColor}` : "!text-white"} ${
        bgColor ? `!bg-[${bgColor}]` : "!bg-[#333333]"
      } ${border ? `!border-${border}` : "!border-0"} !px-[40px] !rounded-3xl`}
      // icon={props.buttonIcon}
      {...props}
    >
      {buttonText}
      {buttonIcon && <span className="ml-2">{buttonIcon}</span>}
    </Button>
  );
};

export default CustomButton;
