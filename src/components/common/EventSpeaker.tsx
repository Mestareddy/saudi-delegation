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
    <div className="bg-white">
      <Image src={image} alt={title} height={300} width={464} />
      <div className="flex flex-col flex-1 justify-between h-[260px] p-2.5">
        <div>
          <Heading type="h3" className="mb-2.5">
            {title}
          </Heading>
          <Paragraph className="text-gray-20 font-medium">{position}</Paragraph>
          <Paragraph type="body1" className="mt-2.5 line-clamp-5">
            {description}
          </Paragraph>
        </div>
        <div className="flex flex-row space-x-2.5 mt-2.5">
          <Link target="_blank" href={socials?.linkedIn}>
            <LinkedInIcon size={"20"} />
          </Link>
          <Link target="_blank" href={socials?.x}>
            <XIcon />
          </Link>{" "}
          <Link target="_blank" href={socials?.facebook}>
            <FacebookIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventSpeaker;
