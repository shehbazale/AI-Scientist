import React from "react";
import HeroSection from "./HeroSection";
import Card from "./Card";

const page = () => {
  return (
    <>
      <div className="shadow-sm">
        <HeroSection />
        <Card />
      </div>
    </>
  );
};

export default page;
