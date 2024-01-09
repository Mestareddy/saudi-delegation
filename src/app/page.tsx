import React from "react";
import { PageHeader } from "@/components/common";
import HomePage from "./(public)/home/page";

const page: React.FunctionComponent = () => {
  return (
    <>
      <PageHeader title="home page" description="home page" />
      <HomePage />
    </>
  );
};

export default page;
