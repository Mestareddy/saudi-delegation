"use client";
import Footer from "@/components/public/footer/Footer";
import Header from "@/components/public/header/Header";
import React, { useState } from "react";
import History from "@/app/(public)/home/components/History";
import Gallery from "@/app/(public)/home/components/Gallery";
import Exploring from "@/components/common/Exploring";
import { RegistrationModal } from "@/components/auth";
import Hero from "@/app/(public)/home/components/Hero";
import Partners from "@/app/(public)/home/components/Partners";
import Attend from "@/app/(public)/home/components/Attend";
import Speakers from "@/app/(public)/home/components/Speakers";

const HomePageContent: React.FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
          <History />
          <Gallery />
          <Exploring />
        </div>
      </div>
      <Footer />
      <RegistrationModal open={isModalOpen} onClose={handleCancel} />
    </div>
  );
};

export default HomePageContent;
