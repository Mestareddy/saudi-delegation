import { Heading, Paragraph } from "@/components/common";
import React from "react";
import { EventSummary } from "../type";
import { speakers } from "../data";
import Link from "next/link";
import { ArrowRightUpIcon } from "@/components/icons";

interface EventSummaryCardProps extends EventSummary {}

const EventSummaryCard: React.FunctionComponent<EventSummaryCardProps> = ({
  outcomes,
  schedule,
  outcomes2,
}) => {
  return (
    <div className="bg-gray-50 p-5 rounded-[20px]">
      <div className="mt-[30px]">
        <Heading type="h3" className="font-semibold uppercase mb-2.5">
          Background:
        </Heading>
        <ul className="p-5 space-y-5">
          {outcomes.map((item, index) => (
            <li key={`${index + 1}`} className="text-black-20 list-disc">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-[30px]">
        <Heading type="h3" className="font-semibold uppercase mb-2.5">
          Saudi-Nigeria Business Roundtable
        </Heading>
        <ul className="p-5 space-y-5">
          {outcomes2.map((item, index) => (
            <li key={`${index + 1}`} className="text-black-20 list-disc">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="bg-green-minst py-2.5 px-5">
          <Heading>Event Brochure</Heading>
        </div>
        <div>
          {schedule.map((eventSchedule, index) => (
            <div
              key={`${index + 1}`}
              className="flex flex-row border border-black-40"
            >
              <div className="py-5 px-2.5 basis-[15%]">
                <Heading>{eventSchedule.day}</Heading>
                <Heading>{eventSchedule.caption}</Heading>
              </div>
              <div className={`border-l border-l-black-40 flex-grow`}>
                <div className="text-black-20 list-decimal">
                  {eventSchedule.event.map((item, index) => (
                    <div
                      key={item}
                      className={`flex flex-row items-center py-2.5 px-5 ${
                        eventSchedule.event.length - 1 !== index
                          ? " border-b border-b-black-40"
                          : ""
                      } `}
                    >
                      <span>{index + 1}.</span>
                      <Paragraph className="pl-2.5">{item}</Paragraph>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-5">
        <div className="bg-green-minst py-2.5 px-5">
          <Heading>Speakers</Heading>
        </div>
        <div>
          {speakers.map((speaker, index) => (
            <div
              key={`${index + 1}`}
              className="flex flex-row border border-black-40"
            >
              <div className={`flex-grow`}>
                <div className="text-black-20 list-decimal">
                  <div className="flex flex-row items-center py-2.5 px-5">
                    <span>{index + 1}.</span>
                    <Paragraph className="pl-2.5">{speaker.name}</Paragraph>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        href="/speakers"
        className="flex flex-row justify-center items-center inter font-semibold !text-[#11142d] leading-[19.36px]"
      >
        See more details about the speakers here{" "}
        <ArrowRightUpIcon className="ml-1" />
      </Link>
      <div className="h-[1px] bg-gray-40 mt-[30px]" />
      <div className="mt-[30px]">
        <Heading type="h3" className="font-semibold uppercase mb-2.5">
          Saudi-Nigeria Business Roundtable
        </Heading>
        <ul className="p-5 space-y-5">
          {outcomes2.map((item, index) => (
            <li key={`${index + 1}`} className="text-black-20 list-disc">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-[30px]">
        <div className="h-[1px] bg-gray-40 mt-[30px]" />
        <Paragraph className="leading-[2rem] font-normal bebas uppercase  md:font-semibold text-right mt-[30px]">
          Executive Summary
        </Paragraph>
      </div>
    </div>
  );
};

export default EventSummaryCard;
