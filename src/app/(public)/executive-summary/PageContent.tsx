"use client";
import { Heading } from "@/components/common";
import Exploring from "@/components/common/Exploring";
import React, { lazy } from "react";
import { eventSummary } from "./data";

const EventSummaryCard = lazy(() => import("./components/EventSummaryCard"));
const HeroSection = lazy(() => import("./components/HeroSection"));

const PageContent: React.FunctionComponent = () => {
  return (
    <div>
      <div className="mx-auto w-[95%] sm:w-[90%] lg:w-[85%] px-2.5 md:px-0">
        <Heading type="h1">Executive Summary</Heading>
        <div className="mt-[30px]">
          <HeroSection />
        </div>
        <div className="mt-[30px] mx-auto space-y-[30px]">
          {eventSummary.map((item) => (
            <EventSummaryCard
              key={item.id}
              caption={item.caption}
              day={item.day}
              email={item.email}
              description={item.description}
              footer={item.footer}
              highlights={item.highlights}
              outcomes={item.outcomes}
              sessions={item.sessions}
            />
          ))}
        </div>
      </div>
      <div className="mt-16">
        <Exploring />
      </div>
    </div>
  );
};

export default PageContent;
