"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { patnersData } from "./data";
import Image from "next/image";

const Partners = () => {
  return (
    <Marquee gradient={true} autoFill={true} className="py-2">
      {patnersData.map((partner) => (
        <Image
          key={partner.id}
          src={partner.image}
          alt={partner.name}
          width={50}
          height={50}
        />
      ))}
    </Marquee>
  );
};

export default Partners;
