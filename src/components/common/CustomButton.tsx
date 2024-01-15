import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { RefreshIcon } from "../icons";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type Size = "sm" | "md" | "lg";
type ButtonVariant = "contained" | "outlined" | "text" | "outlined-light";

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
  "flex flex-row justify-center items-center text-base font-semibold rounded-[30px] space-x-2";
const disabledStyles = "!bg-gray-40 text-white";

const variantStyles = {
  contained: "!bg-black-20 !text-white hover:bg-gray-10",
  outlined: "bg-white hover:opacity-50 border-2 text-black-20 border-black-20",
  text: "text-black-20",
  "outlined-light":
    "bg-transparent hover:opacity-20 border-2 text-white border-white",
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
    const commonClassNames = `${commonStyles} ${variantSizes[size]} ${variantStyles[variant]} ${className}`;
    const disabledClassname = disabled || isLoading ? disabledStyles : "";

    const content = (
      <>
        {starIcon && <span className="mr-1.5">{starIcon}</span>}
        {children}
        {endIcon && <span className="ml-1.5">{endIcon}</span>}
        {isLoading && (
          <span className="ml-1.5">
            <RefreshIcon />
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

CustomButton.displayName = "CustomButton"

export default CustomButton;
