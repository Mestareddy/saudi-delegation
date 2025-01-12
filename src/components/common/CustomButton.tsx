import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { RefreshIcon } from "../icons";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { Spin } from "antd";
import { SyncOutlined } from "@ant-design/icons";

type Size = "sm" | "md" | "lg";

type ButtonVariant =
  | "contained"
  | "outlined"
  | "text"
  | "icon"
  | "outlined-light"
  | "acceptButton"
  | "declineButton"
  | "greyedButton"
  | "noStyleButton";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: Size;
  className?: string;
  starIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  isLoading?: boolean;
  textClassName?: string;
  href?: Url;
}

const commonStyles =
  "flex flex-row justify-center items-center text-base font-semibold rounded-[30px] space-x-2 inter";
const disabledStyles = "!bg-gray-40 text-white";

const variantStyles = {
  icon: "!bg-white hover:!bg-green-hover rounded-[5px]",
  contained: "!bg-black-20 !text-white hover:!bg-green-hover",
  outlined:
    "bg-white hover:bg-green-hover border-2 text-black-20 hover:text-white hover:border-green-hover border-black-20 ",
  acceptButton:
    "border-2 border-[#00A96E] hover:!border-[#00A96E] bg-white h-[38px] px-5",
  declineButton:
    "border-2 border-[#EB5757] hover:!border-[#EB5757] bg-white h-[38px] px-5",
  greyedButton:
    "border-2 border-[#BDBDBD] hover:!border-[#BDBDBD] bg-white h-[38px] px-5",
  text: "text-black-20 hover:bg-green-hover",
  "outlined-light":
    "bg-transparent hover:bg-green-hover hover:border-green-hover border-2 text-white border-white",
  noStyleButton: "!bg-none !border-none text-[#11142D]",
};

const variantSizes = {
  md: "py-[15px] px-10",
  sm: "py-2.5 px-4",
  lg: "py-8 px-8",
};

const CustomButton: React.FunctionComponent<CustomButtonProps> = forwardRef<
  HTMLButtonElement,
  CustomButtonProps
>(
  (
    {
      variant = "contained",
      size = "md",
      className,
      endIcon,
      starIcon,
      isLoading,
      children,
      disabled,
      href,
      ...rest
    },
    ref
  ) => {
    const commonClassNames = `${commonStyles} ${
      variant === "icon" ? "p-2" : variantSizes[size]
    } ${variantStyles[variant]} ${className}`;
    const disabledClassname = disabled || isLoading ? disabledStyles : "";

    const content = (
      <>
        {starIcon && <span className="mr-1.5">{starIcon}</span>}
        {children}
        {endIcon && <span className="ml-1.5">{endIcon}</span>}
        {isLoading && (
          <span className="ml-1.5 pl-1.5">
            {/* <RefreshIcon /> */}
            <Spin
              size="large"
              // style={{ backgroundColor: "white" }}
              rootClassName="bg-red"
              className="bg-red"
              indicator={<SyncOutlined spin style={{ color: "white" }} />}
            />
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={`${commonClassNames} ${disabledClassname}`}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${commonClassNames} ${disabledClassname}`}
        {...rest}
      >
        {content}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
