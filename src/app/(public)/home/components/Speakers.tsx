"use client";
import { ArrowRightUpIcon } from "@/components/icons";
import { speakers } from "@/mockData/speakers";
import { Col } from "antd";
import Link from "next/link";
import React from "react";
import { EventSpeaker } from "../../../../components/common";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useAppDispatch } from "@/lib/hooks";
import {
  setSpeakerData,
  toggleSpeakerModalOpen,
} from "@/lib/features/speakerModalSlice";

// import './styles.css';

const Speakers = () => {
  const dispatch = useAppDispatch();

  const openSpeakerModal = (item: any) => {
    dispatch(toggleSpeakerModalOpen());
    dispatch(setSpeakerData(item));
  };

  return (
    <div className="bg-[#F2F2F2] w-full flex justify-center items-center py-10">
      <div className="innerDiv w-[95%] sm:w-[90%] lg:w-[85%]">
        <div className="top flex flex-row justify-between">
          <h1 className="bebas text-[#333333] leading-[38px] font-normal text-[32px] uppercase">
            KEY <span className="text-green-minst">SPEAKERS</span>
          </h1>
          <Link
            href="/speakers"
            className="flex flex-row items-center justify-center text-[16px] text-[#333333] leading-[19px] font-semibold"
          >
            View all <ArrowRightUpIcon size="16px" className="ml-1" />
          </Link>
        </div>
        <Swiper
          // pagination={{
          //   clickable: true,
          // }}
          slidesPerView={1.5}
          loop={true}
          spaceBetween={10}
          modules={[Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {speakers.map((item) => (
            <SwiperSlide
              key={item.id}
              className="rounded-b-xl rounded-t-xl"
              onClick={() => openSpeakerModal(item)}
            >
              <EventSpeaker
                title={item.name}
                image={item.image}
                position={item.field}
                socials={item.socials}
                description={item.experience}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Speakers;
