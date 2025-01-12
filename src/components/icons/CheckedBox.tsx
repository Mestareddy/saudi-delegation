import React from "react";
import { Icon } from "./type";

const CheckedBox: Icon = ({ stroke = "#11142D", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      {...props}
    >
      <path
        d="M6.75 17H11.25C15 17 16.5 15.5 16.5 11.75V7.25C16.5 3.5 15 2 11.25 2H6.75C3 2 1.5 3.5 1.5 7.25V11.75C1.5 15.5 3 17 6.75 17Z"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.8125 9.49945L7.935 11.622L12.1875 7.37695"
        stroke={stroke}
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckedBox;
