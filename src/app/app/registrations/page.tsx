"use client";
import { AppPageLoader } from "@/components/common";
import React, { lazy, Suspense } from "react";

const DashboardContent = lazy(() => import("./PageContent"));

const Page: React.FunctionComponent = () => {
  return (
    <Suspense fallback={<AppPageLoader />}>
      <DashboardContent />
    </Suspense>
  );
};

export default Page;
