"use client";
import Exploring from "@/components/common/Exploring";
import React, { lazy } from "react";
// import { eventSummary } from "./data";

// const EventSummaryCard = lazy(() => import("./components/EventSummaryCard"));
const ExhibitionHero = lazy(() => import("./components/ExhibitionHero"));

const PageContent: React.FunctionComponent = () => {
  return (
    <div>
      <div className="">
        <ExhibitionHero />
        <div className="mt-[30px] mx-auto space-y-[30px]">
          {/* {eventSummary.map((item) => (
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
          ))} */}
        </div>
      </div>
      <div className="mt-16">
        <Exploring />
      </div>
    </div>
  );
};

export default PageContent;
