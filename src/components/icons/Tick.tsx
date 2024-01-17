import React from "react";
import { Icon } from "./type";

const TickIcon: Icon = ({ size = "16", fill = "#292D32", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.93508 11.6842C7.78508 11.6842 7.64258 11.6242 7.53758 11.5192L5.41508 9.39672C5.19758 9.17922 5.19758 8.81922 5.41508 8.60172C5.63258 8.38422 5.99258 8.38422 6.21008 8.60172L7.93508 10.3267L11.7901 6.47172C12.0076 6.25422 12.3676 6.25422 12.5851 6.47172C12.8026 6.68922 12.8026 7.04922 12.5851 7.26672L8.33258 11.5192C8.22758 11.6242 8.08508 11.6842 7.93508 11.6842Z"
      fill={fill}
    />
  </svg>
);

export default TickIcon;
