import { EventSpeaker, Heading, Paragraph } from "@/components/common";
import { speakers } from "@/mockData/speakers";
import { Col, Row } from "antd";
import React from "react";


const PageContent: React.FunctionComponent = () => {
  return (
    <div>
      <Heading type="h1">Gallery</Heading>
      <div className="flex flex-row mt-4">
        <Paragraph className="text-xl font-medium md:basis-2/4">
          We offer clients tailored and value-based guidance specific to their unique situation and environment to improve their security posture through a continuous improvement approach.
        </Paragraph>
        <div className="basis-2/4 hidden md:hidden" />
      </div>
      <div className="mt-[30px] mx-auto">
        <Row gutter={[10, 30]} wrap>
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
        </Row>
      </div>
    </div>
  );
};

export default PageContent;
