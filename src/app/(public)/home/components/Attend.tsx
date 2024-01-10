"use client";
import React from "react";
import { Tabs } from "antd";
import Image from "next/image";
import { attendData } from "./data";

interface CollapseTabsProps {
  // Add any necessary props
}

const Attend: React.FC<CollapseTabsProps> = () => {
  //   const [activeTab, setActiveTab] = useState("1");

  //   const handleTabChange = (key: string) => {
  //     setActiveTab(key);
  //   };

  //   const callback = (key: string) => {
  //     console.log(key);
  //   };

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-b from-white via-white to-[#EAF9F4]">
      <div className="innerDiv w-[90%] my-10">
        <div className="top grid grid-cols-6">
          <div className="innerItems col-span-2 my-5">
            <h1 className="text-zinc-800 bebas text-[36px] leading-[43.2px] font-normal font-bebas uppercase">
              Why you should{" "}
              <span className="text-emerald-600 bebas text-[36px] leading-[42.96px] font-normal font-bebas">
                Attend
              </span>
            </h1>
            <p className=" text-zinc-900 text-sm font-['Circular Std'] leading-[21px]">
              We offer clients tailored and value-based guidance specific to
              their unique situation and environment to improve their security
              posture through a continuous improvement approach.
            </p>
          </div>
        </div>
        <div className="bottom my-2 grid-cols-5">
          <Tabs
            className="col-span-2"
            tabPosition={"left"}
            items={attendData.map((_, i) => {
              const id = String(i + 1);
              const title = _.title;
              const imageLink = _.image;

              return {
                label: title,
                key: id,
                children: (
                  <div className="!h-[424px]">
                    <Image
                      src={imageLink}
                      alt={title}
                      style={{ width: "100%", height: "100%" }}
                      width={100}
                      height={100}
                    />
                  </div>
                ),
              };
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Attend;

{
  /* <Tabs tabPosition="left" onChange={callback}>
  <TabPane
    tab={
      <Collapse defaultActiveKey={["1"]} ghost>
        <Panel
          key="1"
          header={
            <div className="flex items-center">
              Tab 1
            </div>
          }
        >
          <p>Content of Tab 1</p>
          <Button type="primary" icon={<LinkOutlined />}>
            Link
          </Button>
        </Panel>
      </Collapse>
    }
    key="1"
  >
    <Image
      src="/path/to/your/image.jpg"
      alt="Your Image"
      style={{ width: "100%", height: "auto" }}
      width={100}
      height={100}
    />
  </TabPane>
</Tabs>; */
}
