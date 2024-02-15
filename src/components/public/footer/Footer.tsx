import { Divider } from "antd";
import React from "react";
import {
  ArrowRightUpIcon,
  InstagramIcon,
  LinkedinIcon,
  SlackIcon,
  TwitterIcon,
} from "@/components/icons";
import Dropdownitem from "../../common/FooterDropdownitem";
import Event from "./components/Event";
import Resources from "./components/Resources";
import Information from "./components/Information";

const Footer = () => {
  return (
    <footer className="bg-white w-full flex justify-center itmes-center">
      <div className="innerDiv w-[95%] sm:w-[90%] lg:w-[85%] flex flex-col my-12">
        <section className="w-full flex flex-row gap-3">
          <div className="left w-[50%] sm:w-[60%] grid grid-rows-2 gap-2 flex-col">
            <div className="top row-span-1 grid gris-rows-1 sm:grid-cols-4 gap-3">
              <Event />
              <Resources />
              <Information />
            </div>
            <div className="bottom row-span-1 sm:grid sm:grid-cols-2 gap-3">
              <div className="nigeria sm:col-span-1">
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
                    7A, Idejo Street, Victoria Island, Lagos
                  </h1>
                  <p className="phoneTwo text-zinc-800 text-sm font-['Circular Std'] leading-[21px] py-1">
                    +234 (1) 290 0808
                  </p>
                </div>
              </div>
              <div className="saudi sm:col-span-1">
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
          <div className="right w-[50%] sm:w-[40%] gap-2 flex flex-row">
            <div className="divider w-[0px] h-[100%] mr-2 origin-top-left border border-neutral-200" />
            <div className="sm:grid sm:grid-rows-2 gap-2">
              <div className="top sm:row-span-1">
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
              <div className="bottom sm:row-span-1">
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
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <a
              href="mailto:inquiries@nigeriasaudibusinessforum2024.ng"
              className="text-zinc-800 text-[12px] sm:text-[14px] font-['Circular Std'] leading-[21px] !text-[#333333]"
            >
              inquiries@nigeriasaudibusinessforum2024.ng
            </a>
            <div className="flex flex-row items-start gap-2">
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
            </div>
          </div>
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
