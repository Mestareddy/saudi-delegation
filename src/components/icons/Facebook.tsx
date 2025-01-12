import React from "react";
import { Icon } from "./type";

const Facebook: Icon = ({ size = "20", stroke = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="facebook">
      <path
        id="Vector"
        d="M14.9999 1.66602H12.4999C11.3948 1.66602 10.335 2.105 9.55364 2.8864C8.77224 3.66781 8.33325 4.72761 8.33325 5.83268V8.33268H5.83325V11.666H8.33325V18.3327H11.6666V11.666H14.1666L14.9999 8.33268H11.6666V5.83268C11.6666 5.61167 11.7544 5.39971 11.9107 5.24343C12.0669 5.08715 12.2789 4.99935 12.4999 4.99935H14.9999V1.66602Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default Facebook;
