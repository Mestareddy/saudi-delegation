"use client";
import React, { lazy } from "react";
import { PageHeader } from "@/components/common";

const HomePageContent = lazy(() => import("./PageContent"));

const HomePage = () => {
  return (
    <div>
      <PageHeader title="Speakers" description="view speakers" />
      <HomePageContent />
    </div>
  );
};

export default HomePage;
