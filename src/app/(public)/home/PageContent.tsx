"use client";
import React from "react";
import Footer from "@/components/public/footer/Footer";
import Header from "@/components/public/header/Header";
import History from "@/app/(public)/home/components/History";
import Gallery from "@/app/(public)/home/components/Gallery";
import Exploring from "@/components/common/Exploring";
import Hero from "@/app/(public)/home/components/Hero";
import Partners from "@/app/(public)/home/components/Partners";
import Attend from "@/app/(public)/home/components/Attend";
import Speakers from "@/app/(public)/home/components/Speakers";
import { useAppDispatch } from "@/lib/hooks";
import { toggleRegisterModalOpen } from "@/lib/features/registerModalSlice";
import Exhibition from "./components/Exhibition";

const HomePageContent: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const showModal = () => {
    dispatch(toggleRegisterModalOpen());
  };

  return (
    <div>
      <Header onRegister={showModal} />
      <div className="content mt-[100px]">
        <div className="innerdiv">
          <Hero />
          <Partners />
          <Attend />
          <Speakers />
          <Exhibition />
          <History />
          <Gallery />
          <Exploring />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePageContent;
