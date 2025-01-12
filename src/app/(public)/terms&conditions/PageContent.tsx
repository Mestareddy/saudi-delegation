import Exploring from "@/components/common/Exploring";
import React, { lazy } from "react";

const TermsAndConditionsCard = lazy(
  () => import("./components/TermsAndConditionsCard")
);

const PageContent = () => {
  return (
    <div>
      <div className="mx-auto w-[95%] sm:w-[90%] lg:w-[85%] px-2.5 md:px-0">
        <h1 className="bebas font-normal text-[48px] leading-[56.6px] text-[#11142D]">
          Terms & Conditions
        </h1>
        <div className="mt-[30px] mx-auto space-y-[30px]">
          <TermsAndConditionsCard />
        </div>
      </div>
      <div className="mt-16">
        <Exploring />
      </div>
    </div>
  );
};

export default PageContent;
