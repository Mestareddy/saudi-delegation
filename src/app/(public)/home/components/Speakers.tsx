import { ArrowRightUpIcon } from "@/components/icons";
import { speakers } from "@/mockData/speakers";
import { Col } from "antd";
import Link from "next/link";
import React from "react";
import { EventSpeaker } from "../../../../components/common";

const Speakers = () => {
  return (
    <div className="bg-[#F2F2F2] w-full flex justify-center items-center py-10">
      <div className="innerDiv w-[95%] sm:w-[90%] lg:w-[85%]">
        <div className="top flex flex-row justify-between">
          <h1 className="bebas text-[#333333] leading-[38px] font-bold text-[32px] uppercase">
            KEY <span className="text-green-minst">SPEAKERS</span>
          </h1>
          <Link
            href="/speakers"
            className="flex flex-row items-center justify-center text-[16px] text-[#333333] leading-[19px] font-semibold"
          >
            View all <ArrowRightUpIcon size="16px" className="ml-1" />
          </Link>
        </div>
        <div className="bottom flex overflow-x-auto whitespace-no-wrap gap-5 my-5">
          {speakers.map((item) => (
            <Col key={item.id} className="gutter-row" span={8} md={8} xs={24}>
              <EventSpeaker
                title={item.name}
                image={item.image}
                position={item.field}
                socials={item.socials}
                description={item.experience}
              />
            </Col>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
