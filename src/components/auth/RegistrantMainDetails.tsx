import React from "react";

interface RegistrantMainInfo {
  registrantInfo?: any;
}

const RegistrantMainDetails = ({ registrantInfo }: RegistrantMainInfo) => {
  return <div>{registrantInfo.id}</div>;
};

export default RegistrantMainDetails;
