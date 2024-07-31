import React from "react";
import Image from "next/image";
import image1 from "../../public/images/classes/class1.png";
import image2 from "../../public/images/classes/class2.png";
import image3 from "../../public/images/classes/class3.png";
import { HiOutlineArrowRight } from "react-icons/hi2";

const Courses = () => {
  return (
    <div className="py-20 bg-[rgba(240,244,245,1)] mt-20 h-full">
      {/* Top section */}
      <div className="flex flex-col gap-5 w-[70%] justify-center items-center mx-auto lg:pt-40">
        <div className="flex justify-center items-center">
          <a
            href="/"
            className="bg-[rgb(232,221,252)] text-[rgba(192,119,233,1)] py-2 px-6 rounded-full flex items-center justify-center text-sm font-popin"
          >
            AI SCIENTIST’S COURSE
          </a>
        </div>
        <div className="flex justify-center items-center ">
          <h2 className="text-2xl md:text-4xl font-popin font-bold">
            Weekly Online Classes
          </h2>
        </div>

        <div className="flex justify-center items-center text-center">
          <p className="text-[rgb(107,115,133,1)] text-sm sm:text-lg">
            There are many variations of passages of the ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor.
          </p>
        </div>
      </div>
      {/* top section end  */}

      {/* card section start */}
      <div className="grid grid-cols-1 p-4 lg:p-16 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {/* cart 1 */}
        <div
          className="bg-[rgb(255,255,255)] flex flex-col justify-center gap-8
         md:gap-10 px-4 md:px-6 py-4 md:py-6 rounded-lg shadow-lg shadow-slate-200 transform transition-transform duration-1000 hover:scale-105 cursor-pointer"
        >
          <Image
            className="rounded-t w-full h-56"
            src={image1}
            alt="Logo"
            width={300}
            height={200}
          />
          {/* bottom section */}
          <div className="flex justify-between w-full items-center">
            <div className="w-[85%]">
              <h2 className="text-lg md:text-xl font-popin font-bold">
                Ten Reliable Resources To Learn Education.
              </h2>
            </div>
            <div className="w-[8%]">
              <a href="/">
                <HiOutlineArrowRight className="text-2xl md:text-3xl" />
              </a>
            </div>
          </div>
          {/* bottom section end */}
        </div>
        {/* cart 2 */}
        <div
          className="bg-[rgb(255,255,255)] flex flex-col justify-center gap-8 
        md:gap-10 px-4 md:px-6 py-4 md:py-6 rounded-lg shadow-lg shadow-slate-200 transform transition-transform duration-1000 hover:scale-105 cursor-pointer"
        >
          <Image
            className="rounded-t  w-full h-56"
            src={image2}
            alt="Logo"
            width={300}
            height={200}
          />
          {/* bottom section */}
          <div className="flex justify-between w-full items-center">
            <div className="w-[85%]">
              <h2 className="text-lg md:text-xl font-popin font-bold">
                Five Things You Should Do In Education.
              </h2>
            </div>
            <div className="w-[8%]">
              <a href="/">
                <HiOutlineArrowRight className="text-2xl md:text-3xl" />
              </a>
            </div>
          </div>
          {/* bottom section end */}
        </div>
        {/* cart 3*/}

        <div
          className="bg-[rgb(255,255,255)] flex flex-col justify-center gap-8 md:gap-10 px-4 
        md:px-6 py-4 md:py-6 rounded-lg shadow-lg shadow-slate-200 transform transition-transform duration-1000 hover:scale-105 cursor-pointer"
        >
          <Image
            className="rounded-t w-full h-56"
            src={image3}
            alt="Logo"
            width={300}
            height={200}
          />
          {/* bottom section */}
          <div className="flex justify-between w-full items-center">
            <div className="w-[85%]">
              <h2 className="text-lg md:text-xl font-popin font-bold">
                Five Ways To learn Education Effectively.
              </h2>
            </div>
            <div className="w-[8%]">
              <a href="/">
                <HiOutlineArrowRight className="text-2xl md:text-3xl" />
              </a>
            </div>
          </div>
          {/* bottom section end */}
        </div>
        {/* cart 3 end */}
      </div>
      {/* cart section end */}

      {/* more courses button */}
      <div className="flex justify-center pt-12">
        <a
          href="/"
          className="bg-[rgba(26,182,157,1)] shadow-lg shadow-slate-200 px-12 py-6 sm:px-10 sm:py-5 rounded-xl text-lg text-white font-popin border-2 border-[rgba(26,182,157,1)]
transition duration-300 ease-in-out hover:bg-white hover:text-black  cursor-pointer"
        >
          Load More Course
        </a>
      </div>
    </div>
  );
};

export default Courses;
