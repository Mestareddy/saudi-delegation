import { Heading } from "@/components/common";
import React, { lazy } from "react";
import { eventSummary } from "./data";

const EventSummaryCard = lazy(
  () => import("./components/EventSummaryCard")
);
const HeroSection = lazy(
  () => import("./components/HeroSection")
);

const PageContent: React.FunctionComponent = () => {
  return (
    <div>
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
  );
};

export default PageContent;
