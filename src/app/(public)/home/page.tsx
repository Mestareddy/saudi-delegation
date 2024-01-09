import Footer from "@/components/public/footer/Footer";
import Header from "@/components/public/header/Header";
import React from "react";
import Hero from "./components/Hero";
import Partners from "./components/Partners";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="content h-[170vh] mt-[100px]">
        <div className="innerdiv">
          <Hero />
          <Partners />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
