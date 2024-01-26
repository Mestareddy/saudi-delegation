"use client";
import Exploring from "@/components/common/Exploring";
import React, { lazy } from "react";

const ExhibitionHero = lazy(() => import("./components/ExhibitionHero"));
const Section = lazy(() => import("./components/Section"));

const PageContent: React.FunctionComponent = () => {
  return (
    <div>
      <ExhibitionHero />
      <Section />
      <Exploring />
    </div>
  );
};

export default PageContent;
