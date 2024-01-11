"use client"
import Footer from "@/components/public/footer/Footer";
import Header from "@/components/public/header/Header";
import React, { useState } from "react";
import Hero from "../../../components/homeComponents/Hero";
import Partners from "../../../components/homeComponents/Partners";
import Attend from "../../../components/homeComponents/Attend";
import Speakers from "../../../components/homeComponents/Speakers";
import History from "@/components/homeComponents/History";
import Gallery from "@/components/homeComponents/Gallery";
import Exploring from "@/components/common/Exploring";
import { RegistrationModal } from "@/components/auth";

const HomePage = () => {
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

export default HomePage;
