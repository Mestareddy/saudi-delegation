"use client";
import React, { lazy } from "react";
import { PageHeader } from "@/components/common";
// import LoginPageContent from "@/app/auth/login/PageContent";

const HomePageContent = lazy(() => import("./PageContent"));

const HomePage = () => {
  return (
    <div>
      <PageHeader title="Home" description="Home page" />
      <HomePageContent />
    </div>
  );
};

export default HomePage;
