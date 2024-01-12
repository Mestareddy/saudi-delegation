import React from "react";
import { Icon } from "./type";

const LocationIcon: Icon = ({ size = "16", stroke = "#000000", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 101 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M83.8332 41.6673C83.8332 66.6673 50.4998 91.6673 50.4998 91.6673C50.4998 91.6673 17.1665 66.6673 17.1665 41.6673C17.1665 32.8268 20.6784 24.3483 26.9296 18.0971C33.1808 11.8459 41.6593 8.33398 50.4998 8.33398C59.3404 8.33398 67.8189 11.8459 74.0701 18.0971C80.3213 24.3483 83.8332 32.8268 83.8332 41.6673Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M50.5 54.166C57.4036 54.166 63 48.5696 63 41.666C63 34.7625 57.4036 29.166 50.5 29.166C43.5964 29.166 38 34.7625 38 41.666C38 48.5696 43.5964 54.166 50.5 54.166Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LocationIcon;
