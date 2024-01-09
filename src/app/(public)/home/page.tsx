import Footer from "@/components/public/footer/Footer";
import Header from "@/components/public/header/Header";
import React from "react";
import Hero from "./components/Hero";

type Props = {};

const HomePage = (props: Props) => {
  console.log(props);
  return (
    <div>
      <Header />
      <div className="content h-[170vh] mt-[100px]">
        <div className="innerdiv">
          <Hero />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
