import { Button } from "antd";
import { Url } from "next/dist/shared/lib/router/router";
// import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  buttonText?: string;
  buttonUrl?: Url;
};

const BlackButton = (props: Props) => {
  // const router = useRouter()
  const buttonAction = (props: Props) => {
    console.log("buttonText", props.buttonText);
    console.log("buttonUrl", props.buttonUrl);
    //   if (props.buttonUrl) {
    //       router.push()
    //   }
  };
  return (
    <Button
      onClick={() => buttonAction(props)}
      className="!text-white !bg-[#333333] !px-[40px] !border-0 !rounded-3xl"
    >
      {props.buttonText}
    </Button>
  );
};

export default BlackButton;
