import React from "react";
import { tacData } from "../data/tacData";

const TermsAndConditionsCard = () => {
  return (
    <div className="bg-[#f2f2f2] p-5 rounded-[20px] flex justify-center">
      <div className="innerDiv w-[95%] py-5">
        <h1 className="uppercase bebas font-normal text-[36px] leading-[42.2px] text-[#333333]">
          Terms of Service
        </h1>
        <div className="breakLine w-full h-[0px] mr-2 origin-top-left border border-green-minst my-5" />
        <p className="text-[16px] leading-[20.24px] text-[#333333]">
          These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of
          the The Nigeria Saudi Business Forum website and any related services
          provided by The Nigeria Saudi Business Forum. By accessing and using
          the website, you agree to comply with these Terms. If you do not agree
          with these Terms, please do not use the website.
        </p>
        <div className="my-5">
          {tacData.map((tac) => (
            <ol key={tac.id}>
              <div className="py-3">
                <li className="bebas font-normal text-[24px] leading-[28.8px] text-[#333333]">
                  {tac.text}:
                </li>
                <ul className="list-disc pl-5">
                  {tac.subitems.map((item) => (
                    <li
                      className="font-[450] text-[16px] leading-[32px] text-[#333333]"
                      key={item.id}
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </ol>
          ))}
          <p className="my-3 text-[16px] leading-[20.24px] font-[450] text-[#333333]">
            Take the first step, and let us assist you in achieving SOC 2
            compliance. contact us{" "}
            <a
              href="mailto:inquiries@delegation.com"
              className="!text-[#00A96E]"
            >
              inquiries@delegation.com
            </a>
          </p>
          <div className="breakLine w-full h-[0px] mr-2 origin-top-left border border-[#bdbdbd] my-5" />
          <div className="w-full flex flex-row justify-end">
            <h1 className="bebas font-normal text-[24px] leading-[28.8px] text-[#4f4f4f] text-left">
              Terms of Service
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsCard;
