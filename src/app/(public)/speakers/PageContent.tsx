"use client";
import { EventSpeaker, Heading, Paragraph } from "@/components/common";
import Exploring from "@/components/common/Exploring";
import { speakers } from "@/mockData/speakers";
import React from "react";

const PageContent: React.FunctionComponent = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1112px] px-2.5 md:px-0">
        <Heading type="h1">Speakers</Heading>
        <div className="flex flex-row mt-4">
          <Paragraph className="text-base md:text-xl font-normal md:font-medium  md:basis-2/4">
            Industry leaders tailored who have delivered value-based guidance
            specific to their unique situation and environment to improve their
            business posture through a continuous improvement approach.
          </Paragraph>
          <div className="basis-2/4 hidden md:hidden" />
        </div>
        <div className="mt-[30px] mx-auto">
          <div className="grid-cols-2 sm:grid-cols-2 gap-4 grid md:grid-cols-3">
            {speakers.map((item) => (
              <div key={item.id}>
                <EventSpeaker
                  title={item.name}
                  image={item.image}
                  position={item.field}
                  socials={item.socials}
                  description={item.experience}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <Exploring />
      </div>
    </div>
  );
};

export default PageContent;
