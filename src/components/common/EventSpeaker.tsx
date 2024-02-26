import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FacebookIcon, XIcon } from "../icons";
import LinkedInIcon from "../icons/Linkedin";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface EventSpeakerProps {
  title: string;
  image: string;
  position?: string;
  description?: string;
  socials: {
    facebook: Url;
    linkedIn: Url;
    x: Url;
  };
}

const EventSpeaker: React.FunctionComponent<EventSpeakerProps> = ({
  description,
  position,
  socials,
  title,
  image,
}) => {
  return (
    <div className="bg-white rounded-b-xl rounded-t-xl">
      <Image
        src={image}
        alt={title}
        height={300}
        width={464}
        className="rounded-t-xl"
      />
      <div className="flex flex-col flex-1 justify-between items-start h-[260px] p-2.5 rounded-b-xl">
        <div>
          <Heading type="h3" className="sm:mb-2.5 text-start">
            {title}
          </Heading>
          <p className="text-gray-20 font-medium text-start circular">
            {position}
          </p>
          <p className="mt-2.5 line-clamp-5 text-start sm:text-[16px] text-[#000000] circular font-[450]">
            {description}
          </p>
        </div>
        <div className="flex flex-row space-x-2.5 mt-2.5 mb-2.5">
          <Link target="_blank" href={socials?.linkedIn}>
            <LinkedInIcon size={"20"} fill="black" />
          </Link>
          <Link target="_blank" href={socials?.x}>
            <XIcon size={"20"} />
          </Link>{" "}
          <Link target="_blank" href={socials?.facebook}>
            <FacebookIcon size={"20"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventSpeaker;
