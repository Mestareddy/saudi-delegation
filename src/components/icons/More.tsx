import * as React from "react";
import { Icon } from "./type";

const More: Icon = ({ size = "19", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="currentColor" stroke="currentColor">
      <path d="M4.25 11.063A1.561 1.561 0 1 1 5.813 9.5c0 .864-.7 1.563-1.563 1.563Zm0-3a1.438 1.438 0 1 0 0 2.875 1.438 1.438 0 0 0 0-2.876ZM14.75 11.063A1.561 1.561 0 0 1 13.187 9.5c0-.864.7-1.563 1.563-1.563.864 0 1.563.7 1.563 1.563 0 .864-.7 1.563-1.563 1.563Zm0-3a1.438 1.438 0 1 0 0 2.875 1.438 1.438 0 0 0 0-2.876ZM9.5 11.063A1.561 1.561 0 1 1 11.063 9.5c0 .864-.7 1.563-1.563 1.563Zm0-3a1.438 1.438 0 1 0 0 2.875 1.438 1.438 0 0 0 0-2.876Z" />
    </g>
  </svg>
);

export default More;
