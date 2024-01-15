import { PageHeader } from "@/components/common";
import React, { lazy } from "react";

const PageContent = lazy(() => import("./PageContent"));

const LoginPage = () => {
  return (
    <div>
      <PageHeader title="Login" description="Admin Login" />
      <PageContent />
    </div>
  );
};

export default LoginPage;
