import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { RefreshIcon } from "../icons";

type Size = "sm" | "md" | "lg";
type ButtonVariant = "contained" | "outlined" | "text" | "outlined-light";

interface TriggerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: Size;
  className?: string;
  starIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  isLoading?: boolean;
  textClassName?: string;
}

const variantStyles = {
  contained: "bg-black-20 text-white-100 hover:bg-gray-10",
  outlined:
    "bg-black-20 hover:opacity-50 border-2 text-black-20 border-black-20",
  text: "text-black-20",
  "outlined-light":
    "bg-transparent hover:opacity-20 border-2 text-white-100 border-white-100",
};

const variantSizes = {
  md: "py-[15px] px-10",
  sm: "py-2.5 px-4",
  lg: "py-8 px-8",
};

const TriggerButton: React.FunctionComponent<TriggerButtonProps> = forwardRef<
  HTMLButtonElement,
  TriggerButtonProps
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
      ...rest
    },
    ref
  ) => {
    const disabledClassname =
      disabled || isLoading ? "bg-gray-40 text-white-100" : "";
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`flex flex-row items-center text-base font-semibold rounded-[30px] space-x-2  ${variantSizes[size]}   ${variantStyles[variant]} ${disabledClassname} ${className}`}
        {...rest}
      >
        {starIcon && <span className="mr-1.5"> {starIcon}</span>}
        {children}
        {endIcon && <span className="mr-1.5"> {endIcon}</span>}
        {isLoading && (
          <span className="ml-1.5">
            <RefreshIcon />
          </span>
        )}
      </button>
    );
  }
);

export default TriggerButton;
