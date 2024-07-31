"use client";
import React from "react";
import Marquee from "react-fast-marquee";
const HeaderTop = () => {
  return (
    <div className="bg-black p-4">
      <div className="max-w-[1240px] items-center flex justify-between  mx-auto font-popin text-base">
        {/* left div */}
        <div className="text-white hidden lg:flex gap-14 md:w-[60%]">
          <Marquee>
            <div className="lg:flex gap-14 text-base ">
              <a href="/">Have any questions</a>
              <a href="mailto:example@example.com">example@example.com</a>
              <a href="tel:+1234567890">123-456-7890</a>
            </div>
          </Marquee>
        </div>
        {/* right div */}
        <div className="flex text-white gap-8 text-sm md:text-lg justify-center items-center w-full">
          <a href="/" className="">
            Register / Logins
          </a>
          <a
            href="/"
            className="bg-gradient-to-r from-green-600 to-green-500 px-3 py-2 rounded-lg"
          >
            Join Now
          </a>
          {/* <li className="hover:text-[#f7b141] transition ease-in-out delay-150 cursor-pointer ">OUR STORY</li> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
