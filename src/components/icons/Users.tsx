import React from "react";
import { Icon } from "./type";

const UsersIcon: Icon = ({ size = "16", stroke = "#000000", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 101 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M67.1668 87.5V79.1667C67.1668 74.7464 65.4109 70.5072 62.2853 67.3816C59.1597 64.256 54.9204 62.5 50.5002 62.5H25.5002C21.0799 62.5 16.8407 64.256 13.715 67.3816C10.5894 70.5072 8.8335 74.7464 8.8335 79.1667V87.5"
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M38.0002 45.8333C47.2049 45.8333 54.6668 38.3714 54.6668 29.1667C54.6668 19.9619 47.2049 12.5 38.0002 12.5C28.7954 12.5 21.3335 19.9619 21.3335 29.1667C21.3335 38.3714 28.7954 45.8333 38.0002 45.8333Z"
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M92.1665 87.4993V79.166C92.1637 75.4732 90.9347 71.8859 88.6722 68.9673C86.4097 66.0488 83.242 63.9642 79.6665 63.041"
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67.1665 13.041C70.7516 13.9589 73.9292 16.0439 76.1983 18.9673C78.4675 21.8907 79.6992 25.4861 79.6992 29.1869C79.6992 32.8876 78.4675 36.483 76.1983 39.4064C73.9292 42.3298 70.7516 44.4148 67.1665 45.3327"
      stroke={stroke}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default UsersIcon;
