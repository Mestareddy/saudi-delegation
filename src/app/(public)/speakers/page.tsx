import { Heading, PageHeader, Paragraph, Speaker } from "@/components/common";
import { speakers } from "@/mockData/speakers";
import { Col, Row } from "antd";
import React from "react";

const page: React.FunctionComponent = () => {
  return (
    <div>
      <PageHeader title="Speakers" description="view speakers" />
      <div>
        <Heading type="h1">Speakers</Heading>
        <div className="flex flex-row mt-4">
          <Paragraph className="text-xl font-medium md:basis-2/4">
            Industry leaders tailored who have delivered value-based guidance
            specific to their unique situation and environment to improve their
            business posture through a continuous improvement approach.
          </Paragraph>
          <div className="basis-2/4 hidden md:hidden" />
        </div>
        <div className="mt-[30px] mx-auto">
          <Row gutter={[10, 30]} wrap>
            {speakers.map((item) => (
              <Col className="gutter-row" span={8} md={8} xs={24}>
                <Speaker
                  key={item.id}
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
    </div>
  );
};

export default page;
