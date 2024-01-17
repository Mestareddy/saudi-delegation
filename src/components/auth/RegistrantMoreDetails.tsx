import React from "react";

interface RegistrantMoreInfo {
  registrantInfo?: any;
}

const RegistrantMoreDetails = ({ registrantInfo }: RegistrantMoreInfo) => {
  return <div>{registrantInfo.id}</div>;
};

export default RegistrantMoreDetails;
