import React from "react";
import { Icon } from "./type";

const TickCircle: Icon = ({
  fill = "#292D32",
  stroke = "#00A96E",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    {...props}
  >
    <path
      d="M9 17.0625C4.82864 17.0625 1.4375 13.6714 1.4375 9.5C1.4375 5.32864 4.82864 1.9375 9 1.9375C13.1714 1.9375 16.5625 5.32864 16.5625 9.5C16.5625 13.6714 13.1714 17.0625 9 17.0625ZM9 2.0625C4.89886 2.0625 1.5625 5.39886 1.5625 9.5C1.5625 13.6011 4.89886 16.9375 9 16.9375C13.1011 16.9375 16.4375 13.6011 16.4375 9.5C16.4375 5.39886 13.1011 2.0625 9 2.0625Z"
      fill={fill}
      stroke={stroke}
    />
    <path
      d="M7.58152 11.1803L7.93508 11.5338L8.28863 11.1803L12.1436 7.32527L11.7901 6.97172L12.1436 7.32527C12.1531 7.31583 12.1678 7.30859 12.1876 7.30859C12.2074 7.30859 12.2221 7.31583 12.2315 7.32527L12.5851 6.97172L12.2315 7.32527C12.241 7.33472 12.2482 7.34941 12.2482 7.36922C12.2482 7.38903 12.241 7.40372 12.2315 7.41316L7.97902 11.6657C7.96672 11.678 7.95096 11.6842 7.93508 11.6842C7.91919 11.6842 7.90343 11.678 7.89113 11.6657L5.76863 9.54317C5.75919 9.53372 5.75195 9.51903 5.75195 9.49922C5.75195 9.47941 5.75919 9.46472 5.76863 9.45527C5.77808 9.44583 5.79277 9.43859 5.81258 9.43859C5.83239 9.43859 5.84708 9.44583 5.85652 9.45527L7.58152 11.1803Z"
      fill="#292D32"
      stroke={stroke}
    />
  </svg>
);

export default TickCircle;
