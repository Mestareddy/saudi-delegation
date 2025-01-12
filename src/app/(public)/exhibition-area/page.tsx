"use client";
import { PageHeader } from "@/components/common";
import React, { lazy } from "react";

const ExhibitionPageContent = lazy(() => import("./PageContent"));

const page: React.FunctionComponent = () => {
  return (
    <div>
      <PageHeader title="Exhibition" description="Exhibition area" />
      <ExhibitionPageContent />
    </div>
  );
};

export default page;
