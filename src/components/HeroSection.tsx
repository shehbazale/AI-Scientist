import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-screen ">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/HeroBg/herobg.png')" }}
      >
        <div className="flex flex-col h-full justify-center items-center sm:items-start py-8 gap-6 md:gap-12 sm:px-16">
          {/* memes marry section start */}
          <div className="flex flex-row sm:pl-0">
            <a
              href="/"
              className="bg-[rgb(232,221,252)] px-4 py-2 rounded-full flex items-center justify-center"
            >
              <Image
                src="/images/HeroBg/heroImg.png"
                alt="Logo"
                width={40}
                height={40}
              />
              <p className="ml-2 text-sm font-semibold">
                {" "}
                Learn With{" "}
                <span className="text-[rgba(26,182,157,1)]"> Mames Marry</span>
              </p>
            </a>
          </div>
          {/* memes marry section end */}
          {/*  */}
          <div className="w-[90%] sm:w-[60%] text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold ">
              Computer &{" "}
              <span className="text-[rgba(238,74,1)]">
                General Knowledge Quiz 2024
              </span>
            </h1>
          </div>
          <div className="w-[70%] sm:w-[40%] text-center sm:text-left">
            <p className="font-popin text-xl text-[rgba(73,84,108,1)] sm:pl-0">
              We just don’t give our student only lecture but ral life
              experience.
            </p>
          </div>

          {/* package section start */}
          <div className="hidden sm:flex flex-row gap-3 sm:pl-0">
            {/* no credit card */}
            <div className="flex flex-row gap-3 items-center">
              <div className="w-2 h-2 rounded-full bg-[rgb(255,255,255,1)] p-4 shadow-[1px_2px_10px_rgb(0,0,0,0.2)] shadow-gray-500"></div>
              <p className="text-sm">No Credit Card</p>
            </div>
            {/* 14 day trial */}
            <div className="flex flex-row gap-3 items-center">
              <div className="w-2 h-2 rounded-full bg-[rgb(255,255,255,1)] p-4 shadow-[1px_2px_10px_rgb(0,0,0,0.2)] shadow-gray-500"></div>
              <p className="text-sm">14 Days Trial</p>
            </div>
            {/* free for teacher */}
            <div className="flex items-center flex-row gap-3">
              <div className="w-2 h-2 rounded-full bg-[rgb(255,255,255,1)] p-4 shadow-[1px_2px_10px_rgb(0,0,0,0.2)] shadow-gray-500"></div>
              <p className="text-sm">Free For Teachers</p>
            </div>
          </div>
          {/* package section end */}

          {/* get started  Button */}
          <div className="flex">
            <a
              href="/"
              className="bg-[rgba(26,182,157,1)] px-3 py-3 sm:px-6 sm:py-4 rounded-xl text-sm sm:text-lg text-white font-popin border-2 border-[rgba(26,182,157,1)]
           placeholder:transition duration-300 ease-in-out hover:bg-white hover:text-black cursor-pointer"
            >
              Get Started Today
            </a>
          </div>
          {/* get started  Button */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
