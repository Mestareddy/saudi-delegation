import React from "react";
import { Icon } from "./type";

const FactoryIcon: Icon = ({ size = "16", stroke = "#000000", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 101 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.8335 83.334C8.8335 85.5441 9.71147 87.6637 11.2743 89.2265C12.8371 90.7893 14.9567 91.6673 17.1668 91.6673H83.8335C86.0436 91.6673 88.1633 90.7893 89.7261 89.2265C91.2889 87.6637 92.1668 85.5441 92.1668 83.334V33.334L63.0002 54.1673V33.334L33.8335 54.1673V16.6673C33.8335 14.4572 32.9555 12.3376 31.3927 10.7748C29.8299 9.21196 27.7103 8.33398 25.5002 8.33398H17.1668C14.9567 8.33398 12.8371 9.21196 11.2743 10.7748C9.71147 12.3376 8.8335 14.4572 8.8335 16.6673V83.334Z"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M71.3335 75H75.5002"
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M50.5 75H54.6667"
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M29.6665 75H33.8332"
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default FactoryIcon;
