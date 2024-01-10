"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { patnersData } from "../../mockData/homeData";
import Image from "next/image";

const Partners = () => {
  return (
    <Marquee gradient={true} autoFill={true} speed={20} className="py-2">
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
