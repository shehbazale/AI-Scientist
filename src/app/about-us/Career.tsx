import React from "react";
import Image from "next/image";
import { HiOutlineArrowRight } from "react-icons/hi2";
import onlinecourse from "../../../public/images/courses/onlinecourse.png";
const Career = () => {
  return (
    <div>
      <div className="flex flex-col justify-center gap-6 items-center mx-auto px-4 py-10 w-full md:flex-row lg:w-[90%] bg-[rgb(255,255,255,1)] ">
        {/* lerft side */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="flex items-center justify-center md:justify-start">
            <a
              href="/"
              className="bg-[rgba(228,233,253,1)] text-[rgb(47,87,239,1)] font-popin text-sm bg border px-10 lg:px-4 xl:px-6 py-2 rounded-full hover:bg-[#cdd5ef] transition ease-in-out delay-200 cursor-pointer"
            >
              {" "}
              How we work
            </a>
          </div>

          <div className="w-[80%] mx-auto md:mx-0 justify-center md:justify-start">
            <h2 className="font-popin text-center md:text-left text-4xl font-bold py-2">
              Build Your career And
            </h2>
            <h2 className="font-popin text-center md:text-left text-4xl font-bold py-2">
              Upgrade Your Life.
            </h2>
            <p className="text-center md:text-left text-[rgb(107,115,133,1)] mt-3">
              There are many variations of passages of the ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour.
            </p>
          </div>
          <div className="flex relative items-center justify-center md:justify-start">
            <div className="flex absolute z-10 transform -translate-x-[250%] md:-translate-x-[50%] w-10 h-10 rounded-full bg-[rgb(188,200,248,1)]"></div>
            <div className="flex items-center gap-5 relative z-20">
              <h2 className="font-popin font-bold">Learn More About Us</h2>
              <a href="/">
                <HiOutlineArrowRight className="text-2xl " />
              </a>
            </div>
          </div>
        </div>
        {/* right siede */}
        <div className="">
          <Image
            className="mt-4 md:mt-0 h-96 w-[100%]"
            src={onlinecourse}
            alt="Logo"
            // width={500}
            // height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Career;
