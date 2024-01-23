import React from "react";
import { Icon } from "./type";

const BriefcaseIcon: Icon = ({ size = "16", stroke = "#000000", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 101 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M83.8335 29.166H17.1668C12.5645 29.166 8.8335 32.897 8.8335 37.4993V79.166C8.8335 83.7684 12.5645 87.4993 17.1668 87.4993H83.8335C88.4359 87.4993 92.1668 83.7684 92.1668 79.166V37.4993C92.1668 32.897 88.4359 29.166 83.8335 29.166Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M67.1668 87.5V20.8333C67.1668 18.6232 66.2889 16.5036 64.726 14.9408C63.1632 13.378 61.0436 12.5 58.8335 12.5H42.1668C39.9567 12.5 37.8371 13.378 36.2743 14.9408C34.7115 16.5036 33.8335 18.6232 33.8335 20.8333V87.5"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default BriefcaseIcon;
