import { Divider, Space } from "antd";
import Link from "next/link";
import React from "react";
import {
  companyLinks,
  informationLinks,
  resourcesLinks,
} from "../../../mockData/footerData";
import {
  ArrowRightUpIcon,
  InstagramIcon,
  LinkedinIcon,
  SlackIcon,
  TwitterIcon,
} from "@/components/icons";
import Dropdownitem from "../../common/FooterDropdownitem";

const Footer = () => {
  return (
    <footer className="bg-white w-full flex justify-center itmes-center">
      <div className="innerDiv w-[95%] sm:w-[80%] lg:w-[1112px] flex flex-col my-12">
        <section className="topSection flex text-[14px] gap-2">
          <div className="left w-[50%] sm:w-[60%] flex gap-2 flex-col sm:flex-row">
            <div className="col1 grow">
              <div className="company my-2">
                <h1 className="text-[#00A96E] text-sm font-bold font-['SF Pro Display']">
                  Company
                </h1>
                <div className="links flex flex-col">
                  {companyLinks.map((company) => (
                    <Link
                      href={company.link}
                      key={company.id}
                      className="text-[#333333] py-1"
                    >
                      {company.text}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="resources my-2 lg:mt-2">
                <h1 className="text-[#00A96E] text-sm font-bold font-['SF Pro Display']">
                  Resources
                </h1>
                <div className="links flex flex-col">
                  {resourcesLinks.map((resource) => (
                    <Link
                      href={resource.link}
                      key={resource.id}
                      className="text-[#333333] py-1"
                    >
                      {resource.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col2 grow my-2">
              <div className="information">
                <h1 className="text-[#00A96E] text-sm font-bold font-['SF Pro Display']">
                  Information
                </h1>
                <div className="links flex flex-col">
                  {informationLinks.map((info) => (
                    <Link
                      href={info.link}
                      key={info.id}
                      className="text-[#333333] py-1"
                    >
                      {info.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col3 grow-1 my-2">
              <div className="nigeria">
                <h1 className="text-[#00A96E] text-sm font-bold font-['SF Pro Display']">
                  Nigeria
                </h1>
                <div className="links flex flex-col">
                  <h1 className="addressOne text-stone-500 text-sm font-['Circular Std'] leading-[21px] py-1">
                    21 Ajose Adeogun, Victoria Island, Lagos.
                  </h1>
                  <p className="phoneOne text-zinc-800 text-sm font-['Circular Std'] leading-[21px] py-1">
                    +234 56 6890 1234
                  </p>
                  <h1 className="addresstwo text-stone-500 text-sm font-['Circular Std'] leading-[21px] py-1">
                    21 Ajose Adeogun, Victoria Island, Lagos.
                  </h1>
                  <p className="phoneTwo text-zinc-800 text-sm font-['Circular Std'] leading-[21px] py-1">
                    +234 (1) 290 0808
                  </p>
                </div>
              </div>
              <div className="saudi mt-2">
                <h1 className="text-[#00A96E]  text-sm font-bold font-['SF Pro Display']">
                  Saudi Arabia
                </h1>
                <div className="links flex flex-col">
                  <h1 className="addressOne text-stone-500 text-sm font-['Circular Std'] leading-[21px] py-1">
                    Level 3, 480 Collins Street, Mecca , VIC 3000, Australia
                  </h1>
                  <p className="phoneOne text-zinc-800 text-sm font-['Circular Std'] leading-[21px] py-1">
                    +61 123 456 7890
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right w-[50%] sm:w-[40%] flex">
            <div className="divider w-[0px] h-[100%] mr-4 origin-top-left border border-neutral-200" />
            <div className="rightContent flex flex-col">
              <div className="top row-span-1 sm:row-span-1 ">
                <h1 className="text-[#00A96E] text-sm font-bold font-['SF Pro Display']">
                  Business
                </h1>
                <div className="links flex flex-col">
                  <h1 className="addressOne text-stone-500 text-sm font-['Circular Std'] leading-[21px] py-1">
                    Automate your business journey with established scalable
                    policies.
                  </h1>
                  <p className="phoneOne flex items-center flex-row text-slate-900 text-base font-semibold font-['SF Pro Display'] py-1">
                    Learn More <ArrowRightUpIcon size="18px" className="ml-1" />
                  </p>
                </div>
              </div>
              <div className="bottom row-span-1 sm:row-span-1 mt-2">
                <h1 className="text-[#00A96E]  text-sm font-bold font-['SF Pro Display']">
                  Industries
                </h1>
                <div className="links flex flex-col">
                  <h1 className="addressOne text-stone-500 text-sm font-['Circular Std'] leading-[21px] py-1">
                    Help your organisations gauge their defences through
                    operational network security evaluations
                  </h1>
                  <p className="phoneOne flex items-center flex-row text-slate-900 text-base font-semibold font-['SF Pro Display'] py-1">
                    Learn More <ArrowRightUpIcon size="18px" className="ml-1" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="inquiriesSection mt-4">
          <Space>
            <a
              href="mailto:inquiries@email.com"
              className="text-zinc-800 text-sm font-['Circular Std'] leading-[21px] !text-[#333333]"
            >
              inquiries@email.com
            </a>
            <a href="https://twitter.com/">
              <TwitterIcon size="16" />
            </a>
            <a href="https://linkedin.com/">
              <LinkedinIcon size="16" />
            </a>
            <a href="https://slack.com/">
              <SlackIcon size="16" />
            </a>
            <a href="https://instagram.com/">
              <InstagramIcon size="16" />
            </a>
          </Space>
        </section>
        <Divider />
        <section className="copyrightSection flex justify-between">
          <div className="left text-zinc-800 text-sm font-['Circular Std'] leading-[21px]">
            Copyright © Nigeria Saudi Business Forum {new Date().getFullYear()}.
            All Right Reserved.
          </div>
          <Dropdownitem />
        </section>
      </div>
    </footer>
  );
};

export default Footer;
