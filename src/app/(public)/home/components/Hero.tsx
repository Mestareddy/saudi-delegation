import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="lg:h-[756px] h-[300px] bg-[url('/images/home_hero_bg.png')] bg-cover w-full flex justify-center items-end">
      <div className="innerDiv mb-5 flex flex-col items-center">
        <Image
          src="/images/nigeria_saudi_arabia_white_logo.png"
          alt=""
          className="logoWhite"
          width={195}
          height={80}
        />
        <h1 className="heroTitle text-center text-white text-5xl font-normal font-['Bebas Neue']">
          The Nigeria Saudi Business Forum
        </h1>
      </div>
    </div>
  );
};

export default Hero;
