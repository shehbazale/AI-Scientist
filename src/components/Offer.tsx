import React from "react";
import Image from "next/image";
import learner from "../../public/images/offer/learner.png";
import course from "../../public/images/offer/course.png";
import certified from "../../public/images/offer/certificate.png";
import reiterated from "../../public/images/offer/reiterated.png";

const Offer = () => {
  return (
    <div className="py-24 md:py-32 bg-gray-200">
      {/* main div> */}
      <div className="flex flex-col md:flex-row w-full justify-between mx-auto">
        {/* left div */}
        <div className="order-2 md:order-1 w-full md:w-[60%] mt-6 md:mt-0 flex flex-col justify-between p-4 md:pl-16 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
            {/* cart 1 */}
            <div
              className="bg-[rgb(255,255,255)] flex flex-col justify-center items-center
             gap-6 px-6 md:px-10 py-6 md:py-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg transform transition-transform duration-1000 hover:scale-105 cursor-pointer"
            >
              <Image
                className="rounded-t"
                src={learner}
                alt="Logo"
                width={100}
                height={100}
              />
              {/* bottom section */}
              <div className="">
                <h2 className="text-xl md:text-5xl font-popin font-extrabold">
                  500+
                </h2>
              </div>
              <div className="">
                <p className="text-xl font-popin">
                  Leaners &<br /> Counting
                </p>
              </div>

              {/* bottom section end */}
            </div>
            {/*  cart 2 */}
            <div
              className="bg-[rgb(255,255,255)] flex flex-col justify-center
             items-center gap-6 px-4 md:px-6 py-4 md:py-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg transform transition-transform duration-1000 hover:scale-105 cursor-pointer"
            >
              <Image
                className="rounded-t"
                src={course}
                alt="Logo"
                width={100}
                height={100}
              />
              {/* bottom section */}
              <div className="text-center">
                <h2 className="text-xl md:text-5xl font-popin font-extrabold">
                  800+
                </h2>
              </div>
              <div className="">
                <p className="text-xl font-popin">Courses & Videos</p>
              </div>

              {/* bottom section end */}
            </div>

            {/* cart 3 */}
            <div
              className="bg-[rgb(255,255,255)] flex flex-col justify-center
             items-center gap-6 px-4 md:px-6 py-4 md:py-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg transform transition-transform duration-1000 hover:scale-105 cursor-pointer"
            >
              <Image
                className="rounded-t"
                src={certified}
                alt="Logo"
                width={100}
                height={100}
              />
              {/* bottom section */}
              <div className="">
                <h2 className="text-xl md:text-5xl font-popin font-extrabold">
                  1000+
                </h2>
              </div>
              <div className="">
                <p className="text-xl font-popin">Certified Students</p>
              </div>

              {/* bottom section end */}
            </div>

            {/* cart 4 */}
            <div
              className="bg-[rgb(255,255,255)] flex flex-col justify-center
             items-center gap-6 px-4 md:px-6 py-4 md:py-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg transform transition-transform duration-1000 hover:scale-105 cursor-pointer"
            >
              <Image
                className="rounded-t"
                src={reiterated}
                alt="Logo"
                width={100}
                height={100}
              />
              {/* bottom section */}
              <div className="">
                <h2 className="text-xl md:text-5xl font-popin font-extrabold">
                  100+
                </h2>
              </div>
              <div className="">
                <p className="text-xl font-popin">Reiterated Enrolls</p>
              </div>

              {/* bottom section end */}
            </div>
          </div>
        </div>
        {/* right dev */}
        <div className="order-1 md:order-2 w-full md:w-[50%] flex flex-col p-2 justify-center">
          <div className="grid grid-cols-1 px-4 lg:pr-16 justify-center  gap-6 lg:gap-8 ">
            {/* 1111 */}
            <div className="flex">
              <a
                href="/"
                className="bg-[rgb(250,236,241,1)] text-[rgba(221,120,153,1)] py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold font-popin"
              >
                Why Choose Us
              </a>
            </div>
            <div className="flex">
              <h2 className="text-2xl lg:text-4xl font-popin font-bold">
                Creating A Community Of Life Long Learners.
              </h2>
            </div>
            <div className="flex">
              <p className="text-[rgb(107,115,133,1)] text-lg sm:text-xl">
                There are many variations of passages of the ipsum available,
                but the majority have suffered alteration in some form, by
                injected humor.
              </p>
            </div>
            {/* Features section */}
            {/* feature 1 */}
            <div className="flex flex-row gap-6 items-center">
              <div className="w-3 h-3 rounded-full bg-[rgb(228,233,253,1)] p-6 shadow-[1px_2px_10px_rgb(0,0,0,0.2)] shadow-gray-500"></div>
              <p className="text-xl font-popin">Flexible Classes</p>
            </div>
            {/* feature 2 */}
            <div className="flex flex-row gap-6 items-center">
              <div className="w-3 h-3 rounded-full bg-[rgb(246,235,252,1)] p-6 shadow-[1px_2px_10px_rgb(0,0,0,0.2)] shadow-gray-500"></div>
              <p className="text-xl font-popin">Learn From Anywhere</p>
            </div>
            {/* feature 3 */}
            <div className="flex flex-row gap-6 items-center">
              <div className="w-3 h-3 rounded-full bg-[rgb(250,236,241,1)] p-6 shadow-[1px_2px_10px_rgb(0,0,0,0.2)] shadow-gray-500"></div>
              <p className="text-xl font-popin">
                Unlimited resources With Strong Support
              </p>
            </div>
            {/* features section end */}
          </div>
        </div>
        {/* right dev end */}
      </div>
    </div>
  );
};

export default Offer;
