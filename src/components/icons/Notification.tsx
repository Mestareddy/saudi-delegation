import React from "react";
import { Icon } from "./type";

const Notification: Icon = ({ size = "22", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <path
      d="M11 9.6443C10.6242 9.6443 10.3125 9.33263 10.3125 8.9568V5.9043C10.3125 5.52846 10.6242 5.2168 11 5.2168C11.3758 5.2168 11.6875 5.52846 11.6875 5.9043V8.9568C11.6875 9.3418 11.3758 9.6443 11 9.6443Z"
      fill="#00A36A"
    />
    <path
      d="M11.0188 18.6542C8.65378 18.6542 6.29795 18.2784 4.05211 17.5267C3.21795 17.2517 2.58545 16.6559 2.31045 15.9042C2.03545 15.1526 2.12711 14.2909 2.57628 13.5392L3.74045 11.5959C3.99711 11.1651 4.22628 10.3584 4.22628 9.85422V7.92922C4.22628 4.18005 7.26961 1.13672 11.0188 1.13672C14.7679 1.13672 17.8113 4.18005 17.8113 7.92922V9.85422C17.8113 10.3492 18.0404 11.1651 18.2971 11.5959L19.4613 13.5392C19.8921 14.2542 19.9654 15.1067 19.6813 15.8859C19.3971 16.6651 18.7738 17.2609 17.9854 17.5267C15.7396 18.2876 13.3838 18.6542 11.0188 18.6542ZM11.0188 2.52089C8.03045 2.52089 5.60128 4.95005 5.60128 7.93839V9.86339C5.60128 10.6059 5.30795 11.6784 4.92295 12.3109L3.75878 14.2634C3.52045 14.6576 3.46545 15.0792 3.60295 15.4459C3.74045 15.8126 4.05211 16.0876 4.49211 16.2342C8.70878 17.6367 13.3471 17.6367 17.5638 16.2342C17.9579 16.1059 18.2604 15.8126 18.3979 15.4276C18.5446 15.0426 18.4988 14.6209 18.2879 14.2634L17.1238 12.3201C16.7388 11.6876 16.4454 10.6151 16.4454 9.87255V7.94755C16.4363 4.95005 14.0071 2.52089 11.0188 2.52089Z"
      fill="#292D32"
    />
    <path
      d="M10.9998 20.992C10.0189 20.992 9.05643 20.5886 8.35977 19.892C7.6631 19.1953 7.25977 18.2328 7.25977 17.252H8.63477C8.63477 17.8753 8.89143 18.4803 9.33143 18.9203C9.77143 19.3603 10.3764 19.617 10.9998 19.617C12.3014 19.617 13.3648 18.5536 13.3648 17.252H14.7398C14.7398 19.3145 13.0623 20.992 10.9998 20.992Z"
      fill="#292D32"
    />
  </svg>
);

export default Notification;
