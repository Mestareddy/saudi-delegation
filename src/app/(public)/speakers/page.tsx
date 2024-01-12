"use client";
import { PageHeader } from "@/components/common";
import React from "react";
import { lazy } from "react";

const PageContent = lazy(
  () => import("./PageContent")
);


const page: React.FunctionComponent = () => {
  return (
    <div>
      <PageHeader title="Speakers" description="view speakers" />
      <PageContent />
    </div>
  );
};

export default page;
