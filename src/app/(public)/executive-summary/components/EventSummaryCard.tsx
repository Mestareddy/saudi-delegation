import { Heading, Paragraph } from "@/components/common";
import Image from "next/image";
import React from "react";
import { EventSummary } from "../type";

interface EventSummaryCardProps extends EventSummary { }

const EventSummaryCard: React.FunctionComponent<EventSummaryCardProps> = ({
  caption,
  day,
  description,
  highlights,
  outcomes,
  sessions,
  email,
  footer,
}) => {
  return (
    <div className="bg-gray-50 p-5  rounded-[20px]">
      <div>
        <Heading className="uppercase font-semibold">{day}</Heading>
        <div className="h-[3px] bg-green-hover my-[30px]" />
      </div>
      <Paragraph className="mb-[30px]">{description}</Paragraph>
      <div>
        <Heading type="h3" className="font-semibold uppercase mb-2.5">
          Key Highlights:
        </Heading>
        {highlights.map((item, index) => (
          <div key={item.title} className="flex flex-row items-center mb-3">
            <Paragraph className="font-semibold">
              <span className="text-black-20 font-semibold mr-1">
                {index + 1}.
              </span>
              {item.title}:
              <span className="font-normal ml-1">{item.description}</span>
            </Paragraph>
          </div>
        ))}
      </div>
      <div className="mt-[30px]">
        <Heading type="h3" className="font-semibold uppercase mb-2.5">
          Anticipated Outcomes:
        </Heading>
        {outcomes.map((item) => (
          <div key={item} className="flex flex-row items-center mb-3">
            <span className="bg-black-20 block h-2 w-2 rounded-full mr-2" />
            <Paragraph>{item}</Paragraph>
          </div>
        ))}
      </div>
      <Paragraph className="my-[30px]">{caption}</Paragraph>
      <div className="space-y-[30px]">
        {sessions.sectionA.map((item) => (
          <div key={item.title}>
            <Heading type="h3" className="font-semibold uppercase mb-2.5">
              {item.title}
            </Heading>
            <Paragraph>{item.description}</Paragraph>
          </div>
        ))}
        <Image
          height={267}
          width={1072}
          alt="executive_summary"
          src={sessions.sectionAImage.path}
        />
      </div>
      <div className="space-y-[30px] mt-[30px]">
        {sessions.sectionB.map((item) => (
          <div key={item.title}>
            <Heading type="h3" className="font-semibold uppercase mb-2.5">
              {item.title}
            </Heading>
            <Paragraph>{item.description}</Paragraph>
          </div>
        ))}
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-2.5 md:grid-cols-3">
          {sessions.sectionBImage.map((item) => (
            <div key={item}>
              <Image
                height={195}
                width={351.6}
                alt="sectionBImage"
                src={item}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[30px]">
        <Paragraph className="my-[30px]">
          {footer} <span className="text-green-hover">{email}</span>
        </Paragraph>
        <div className="h-[1px] bg-gray-40 mt-[30px]" />
        <Paragraph className="text-2xl font-normal font-bebas bebas  md:font-semibold text-right mt-[30px]">
          {day}
        </Paragraph>
      </div>
    </div>
  );
};

export default EventSummaryCard;
