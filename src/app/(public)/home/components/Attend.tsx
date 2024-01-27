"use client";
import React, { useEffect, useState } from "react";
import { Button, Collapse } from "antd";
// import { attendData } from "@/mockData/homeData";
import Image from "next/image";
import {
  ArrowRightIcon,
  EyeIcon,
  PeopleIcon,
  ThumbsUpIcon,
} from "@/components/icons";
import { useAppDispatch } from "@/lib/hooks";
import { toggleRegisterModalOpen } from "@/lib/features/registerModalSlice";

const { Panel } = Collapse;

const attendData = [
  {
    id: 1,
    title: "Tailored and value-based solutions",
    paragraph:
      "We offer clients tailored and value-based guidance specific to their unique situation and environment to improve their security posture through a continuous improvement approach.",
    image: "/images/attend/image_1.png",
    icon: <PeopleIcon />,
  },
  {
    id: 2,
    title: "Seamless and Scalable",
    paragraph:
      "We deliver and implement solutions and services that are seamless, scalable, and protect organisations ensuring the confidentiality, integrity, and availability of their information and assets.",
    image: "/images/attend/image_2.png",
    icon: <ThumbsUpIcon />,
  },
  {
    id: 3,
    title: "Vast and Fluid",
    paragraph:
      "We work with hundreds of organisations, from successful brands to local small businesses that cut across government agencies, financial institutions, network services providers, automobiles, health agencies, oil, aviation, and many more.",
    image: "/images/attend/image_3.png",
    icon: <EyeIcon />,
  },
];

const Attend = () => {
  const [activeKey, setActiveKey] = useState<string | string[]>("0");
  const [selectedId, setSelectedId] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setActiveKey("0"); // Force initial image to show
    setSelectedId(0);
  }, []);

  const handleCollapseChange = (key: string | string[]) => {
    setActiveKey(key);
    setSelectedId(+key);
  };

  const toggleRegisterModal = () => {
    dispatch(toggleRegisterModalOpen());
  };

  return (
    <div
      id="#attend"
      className="w-full flex justify-center items-center bg-[#ffffff]"
    >
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] my-10">
        <div className="grid grid-cols-6">
          <div className="col-span-5 lg:col-span-2 my-5">
            <h1 className="text-zinc-800 bebas text-[36px] leading-[43.2px] font-normal font-bebas uppercase">
              Why you should{" "}
              <span className="text-emerald-600 bebas text-[36px] leading-[42.96px] font-normal font-bebas">
                Attend
              </span>
            </h1>
            <p className="text-zinc-900 text-sm font-['Circular Std'] leading-[21px]">
              We offer clients tailored and value-based guidance specific to
              their unique situation and environment to improve their security
              posture through a continuous improvement approach.
            </p>
          </div>
        </div>
        <div className="my-2 grid grid-cols-6 gap-4">
          <div className="col-span-3 lg:col-span-2">
            <Collapse
              defaultActiveKey={["0"]}
              activeKey={activeKey}
              onChange={handleCollapseChange}
              accordion
              ghost
            >
              {attendData.map((item, index) => (
                <Panel
                  key={index}
                  header={item.title}
                  className="bg-white border-none shadow-md rounded-[4px] mb-4"
                >
                  <div className="flex flex-col items-start lg:ml-6">
                    {item.paragraph}
                    <Button
                      type="default"
                      style={{
                        border: "none",
                        boxShadow: "none",
                        borderRadius: "0",
                      }}
                      ghost
                      onClick={toggleRegisterModal}
                      className="flex flex-row items-center justify-center text-[16px] !text-[#333333] leading-[19px] font-semibold my-5 !border-none !p-0"
                    >
                      Attend <ArrowRightIcon size="16px" className="ml-1" />
                    </Button>
                  </div>
                </Panel>
              ))}
            </Collapse>
          </div>
          <div className="col-span-3 lg:col-span-4">
            <Image
              src={attendData[selectedId]?.image}
              alt={attendData[selectedId]?.title}
              layout="responsive"
              width={100}
              height={100}
              className="!w-full !h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attend;
