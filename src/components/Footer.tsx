import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logoImage from "../../public/images/logo/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row flex-wrap justify-between p-4 lg:p-16">
        {/* first div left */}
        <div className="md:w-[40%] flex flex-col justify-center gap-10">
          <div className="flex justify-center md:justify-start">
            <Image className="w-48" src={logoImage} alt="logo" />
          </div>
          <div>
            <p className="text-[rgba(107,115,133,1)] text-lg font-popin  text-center md:text-left">
              We are always in search of talented and motivated people. Don’t be
              shy to introduce yourself!
            </p>
          </div>
          {/* social media  */}
          <div className="flex justify-center md:justify-start gap-4 lg:6">
            <a href="abc.com">
              <BsFacebook
                size={28}
                className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </a>
            <a href="abc.com">
              <FaLinkedin
                size={28}
                className=" transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </a>
            <a href="abc.com">
              <FaInstagram
                size={28}
                className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </a>
            <a href="abc.com">
              <FaXTwitter
                size={28}
                className=" transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </a>
          </div>

          {/* contact us */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/"
              className="px-6 py-3 sm:px-10 sm:py-5 rounded-full text-lg text-black font-popin border-2 border-[rgba(26,182,157,1)]
 hover:cursor-pointer"
            >
              Load More Course
            </a>
          </div>
        </div>
        {/* seconf dev left */}
        <div className="flex flex-col py-8 justify-center gap-4 font-popin ">
          <h4
            className="flex justify-center md:justify-start text-black text-xl font-extrabold duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Useful Links
          </h4>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Marketplace
          </p>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Kindergarten
          </p>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            University
          </p>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            GYM Coaching
          </p>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            FAQ
          </p>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            About Us
          </p>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Privacy Policy
          </p>
        </div>
        {/* right  first div */}
        <div className="flex flex-col py-8 justify-center gap-4 font-popin ">
          <h4
            className="flex justify-center md:justify-start text-black text-xl font-extrabold duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Our Company
          </h4>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Contact Us
          </p>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Become Teacher
          </p>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Blog
          </p>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Instructor
          </p>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Event
          </p>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Course
          </p>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Contact
          </p>
        </div>
        {/* right second div */}
        <div className="flex flex-col md:w-[28%] py-9 justify-center gap-6 font-popin ">
          <h4
            className="flex justify-center md:justify-start text-black text-xl font-extrabold duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Get Contact
          </h4>
          <a
            href="tel:+12345789"
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Phone: (406) 555-0120
          </a>
          <a
            href="mailto:aiscientist@example.com"
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Email: aiscientist@example.com
          </a>
          <p
            className="text-center md:text-left text-black text-sm font-semibold transition-all duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
          >
            Address: London
          </p>
          <div>
            <h4
              className="flex justify-center md:justify-start text-black text-xl font-extrabold duration-200 border-b-2 
     border-transparent hover:border-b-2 hover:border-green-600 cursor-pointer"
            >
              Newsletter
            </h4>
          </div>
          {/* button */}

          <div className="relative flex ">
            <button
              className="!absolute right-1 top-1 z-10 select-none rounded-full bg-green-500 py-4 px-5
     text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md
     "
              type="button"
              data-ripple-light="true"
            >
              Subscribe
            </button>
            <input
              type="email"
              className="h-full w-full rounded-full border border-blue-gray-200 bg-transparent px-3 py-4 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border
     placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200
 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder="Enter Your E-mail"
              required
            />
          </div>

          {/* button */}
        </div>
      </div>
      {/*bottem footer  */}
      <div>
        <hr className="border-slate-500 w-[98%] mx-auto pt-5" />
      </div>
      <div className="flex flex-col flex-wrap justify-center gap-4 items-center px-4 md:flex-row md:justify-between py-6 md:px-16 ">
        {/* left side */}
        <div>
          <p className=" text-[rgba(107,115,133,1)] font-popin text-xs md:text-sm md:font-extrabold">
            @2024. All Rights Reserved by{" "}
            <span className="text-black font-popin font-bold">
              AI Scientist.
            </span>{" "}
          </p>
        </div>
        {/* right side */}
        <div className="flex gap-1 md:gap-4">
          <div className="group relative">
            <a
              href="/"
              className="text-center md:text-left text-[rgba(107,115,133,1)] text-xs md:text-sm font-semibold hover-border-bottom"
            >
              Privacy
            </a>
          </div>
          <div className="group relative">
            <a
              href="/"
              className="text-center md:text-left text-[rgba(107,115,133,1)] text-xs md:text-sm font-semibold hover-border-bottom"
            >
              Terms of Services
            </a>
          </div>
          <div className="group relative">
            <a
              href="/"
              className="text-center md:text-left text-[rgba(107,115,133,1)] text-xs md:text-sm font-semibold hover-border-bottom"
            >
              Subscription
            </a>
          </div>
          <div className="group relative">
            <a
              href="/"
              className="text-center md:text-left text-[rgba(107,115,133,1)] text-xs md:text-sm font-semibold hover-border-bottom"
            >
              Login/Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
