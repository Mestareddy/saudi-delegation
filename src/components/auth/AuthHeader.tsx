import React from "react";
import { Heading, Paragraph } from "../common";

const AuthHeader: React.FunctionComponent = () => {
  return (
    <div>
      <Paragraph className="font-normal md:basis-2/4">
        Don&apos;t miss out! Join the Nigeria Saudi Business Forum for strategic
        collaboration, Networking, and growth. Explore exhibition booths and
        speaker opportunities. Register to attend. #NSBF2023
        #BusinessCollaboration
      </Paragraph>
      <div className="flex flex-row items-center space-x-2.5 my-2.5 md:my-10">
        <div className="h-[3px] w-[26%] md:w-[15%] bg-green-hover" />
        <Heading type="h3" className="font-bold">
          Monday, January 29, 2024
        </Heading>
        <div className="h-[3px] w-[26%] md:w-[15%] bg-green-hover" />
      </div>
    </div>
  );
};

export default AuthHeader;
