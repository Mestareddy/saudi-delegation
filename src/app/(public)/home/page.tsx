import Footer from "@/components/public/footer/Footer";
import Header from "@/components/public/header/Header";
import React from "react";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Attend from "./components/Attend";
import Speakers from "./components/Speakers";

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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
