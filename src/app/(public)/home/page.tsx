import Footer from "@/components/public/footer/Footer";
import Header from "@/components/public/header/Header";
import React from "react";
import Hero from "../../../components/homeComponents/Hero";
import Partners from "../../../components/homeComponents/Partners";
import Attend from "../../../components/homeComponents/Attend";
import Speakers from "../../../components/homeComponents/Speakers";
import History from "@/components/homeComponents/History";
import Gallery from "@/components/homeComponents/Gallery";
import Exploring from "@/components/common/Exploring";

const HomePage = () => {
  return (
    <div>
      <Header />
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
    </div>
  );
};

export default HomePage;
