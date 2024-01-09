import React from "react";
import { Icon } from "./type";

const X: Icon = ({ size = "20", stroke = "black", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="twitter">
      <path
        id="Vector"
        d="M18.3334 3.3327C18.3334 3.3327 17.7501 5.0827 16.6667 6.16603C18.0001 14.4994 8.83342 20.5827 1.66675 15.8327C3.50008 15.916 5.33341 15.3327 6.66675 14.166C2.50008 12.916 0.416748 7.99937 2.50008 4.16603C4.33341 6.3327 7.16675 7.5827 10.0001 7.49937C9.25008 3.99937 13.3334 1.99937 15.8334 4.3327C16.7501 4.3327 18.3334 3.3327 18.3334 3.3327Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default X;
