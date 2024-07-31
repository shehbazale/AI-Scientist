"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const HeaderMain = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-white relative text-black  p-4 shadow-xl z-10 font-popin">
      <div className="max-w-[1240px]  items-center flex justify-between  mx-auto font-popin text-base">
        <div className="order-1 sm:order-2 md:order-1 w-[90%] sm:w-auto md:w-[80%] lg:w-auto">
          <div className="w-24 sm:w-32 md:w-48">
            <Image
              src="/images/Group 2.png"
              alt="Logo"
              width={200}
              height={150}
            />
          </div>
        </div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-2xl lg:hidden block text-green-600 order-1 md:order-2"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-2xl lg:hidden block text-green-600 order-1 md:order-2"
          />
        )}

        <ul className="hidden lg:flex  justify-center gap-4 lg:5 text-sm font-semibold font-popin order-1 md:order-2">
          <li
            className="transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Home
          </li>
          <li
            className="transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            About Us
          </li>
          <li
            className="transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Syllabus
          </li>
          <li
            className="transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Paper Pattern
          </li>
          <li
            className="transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Gallery
          </li>
          <li
            className="transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Results
          </li>
          <li
            className="transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Download
          </li>
          <li
            className="transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Contact Us
          </li>
        </ul>
        {/* <div className='flex items-center justify-center gap-5'> */}
        <div className=" flex justify-center items-center gap-3 md:gap-5 ml-4 xlml-8 order-3">
          <div className="h-8 sm:h-12 border-l border-gray-500"></div>
          <IoSearchOutline className="text-2xl hover:cursor-pointer hover:opacity-" />
          <MdOutlineShoppingCart className="text-2xl text-green-600 hover:text-green-500 transition ease-in-out delay-150 cursor-pointer" />
          {/* </div> */}
        </div>

        {/* Responsive  */}
        <ul
          className={`py-6 justify duration-700 lg:hidden w-full text-white text-sm fixed bg-gray-500 top-[132px] sm:top-[149px] md:top-[162px] z-10
        ${toggle ? "left-[0]" : "left-[-100%]"}`}
        >
          <li className="font-popin border-b border-low-intensity border-[#cfcfcf] w-[90%] mx-auto py-2 pl-2 hover:bg-gray-400 transition duration-1000 ease-in-out cursor-pointer ">
            Home
          </li>
          <li className="font-popin border-b border-low-intensity border-[#cfcfcf] w-[90%] mx-auto mt-3 py-2 pl-2  hover:bg-gray-400 transition duration-1000 ease-in-out cursor-pointer">
            About Us
          </li>
          <li className="font-popin border-b border-low-intensity border-[#cfcfcf] w-[90%] mx-auto mt-3 py-2 pl-2  hover:bg-gray-400 transition duration-1000 ease-in-out cursor-pointer">
            Syllabus
          </li>
          <li className="font-popin border-b border-[#cfcfcf] w-[90%] mx-auto mt-3 py-2 pl-2  hover:bg-gray-400 transition duration-1000 ease-in-out cursor-pointer">
            Paper Pattern
          </li>
          <li className="font-popin border-b border-[#cfcfcf] w-[90%] mx-auto mt-3 py-2 pl-2  hover:bg-gray-400 transition duration-1000 ease-in-out cursor-pointer">
            Gallery
          </li>
          <li className="font-popin border-b border-[#cfcfcf] w-[90%] mx-auto mt-3 py-2 pl-2  hover:bg-gray-400 transition duration-1000 ease-in-out cursor-pointer">
            Results
          </li>
          <li className="font-popin border-b border-[#cfcfcf] w-[90%] mx-auto mt-3 py-2 pl-2  hover:bg-gray-400 transition duration-1000 ease-in-out cursor-pointer">
            Download
          </li>
          <li className="font-popin border-b border-[#cfcfcf] w-[90%] mx-auto mt-3 py-2 pl-2  hover:bg-gray-400 transition duration-1000 ease-in-out cursor-pointer">
            Contact Us
          </li>
        </ul>
      </div>

      {/* extra styling */}
    </div>
  );
};

export default HeaderMain;
