"use client";
import { PageHeader } from "@/components/common";
import React, { lazy } from "react";

const TermsAndConditionsContent = lazy(() => import("./PageContent"));

const page: React.FunctionComponent = () => {
  return (
    <div>
      <PageHeader title="Exhibition" description="Exhibition area" />
      <TermsAndConditionsContent />
    </div>
  );
};

export default page;
