import React, { useState } from "react";
import Image from "next/image";
// import infant from '../../public/images/package/infant.png'
// import toddler from '../../public/images/package/toddler.png'
// import preschool from '../../public/images/package/preschool.png'
// import kindergarten from '../../public/images/package/kindergarten.png'
import onlinecourse from "../../public/images/courses/onlinecourse.png";
const Curriculum = () => {
  const [hovered, setHovered] = useState(null);
  const [divContent, setDivContent] = useState([
    {
      id: 1,
      image: "../../public/images/package/infant.png",
      title: "Infant",
      p1: "Health & Wellness",
      p2: "Literacy and Language",
      p3: "Social Emotional Learning",
      p4: "Visual and Creative Art",
      p5: "Thinking and learning",
      href: "Learn More",
    },
    {
      id: 2,
      image: "../../public/images/package/toddler.png",
      title: "Toddler/Twos",
      p1: "Health & Wellness",
      p2: "Literacy and Language",
      p3: "Social Emotional Learning",
      p4: "Visual and Creative Art",
      p5: "Thinking and learning",
      href: "Learn More",
    },
    {
      id: 3,
      image: "../../public/images/package/preschool.png",
      title: "Preschool",
      p1: "Health & Wellness",
      p2: "Literacy and Language",
      p3: "Social Emotional Learning",
      p4: "Visual and Creative Art",
      p5: "Thinking and learning",
      href: "Learn More",
    },
    {
      id: 4,
      image: "../../public/images/package/kindergarten.png",
      title: "Kindergarten",
      p1: "Health & Wellness",
      p2: "Literacy and Language",
      p3: "Social Emotional Learning",
      p4: "Visual and Creative Art",
      p5: "Thinking and learning",
      href: "Learn More",
    },
  ]);

  const handleHover = (index: any) => {
    setHovered(index);
  };

  return (
    <div className=" pt-28 lg:pb-16">
      <div className="flex flex-col gap-5 w-[70%] justify-center items-center mx-auto">
        <div className="flex justify-center items-center">
          <a
            href="/"
            className="bg-[rgb(232,221,252)] text-[rgba(192,119,233,1)] py-2 px-6 rounded-full flex items-center justify-center text-sm font-popin"
          >
            OUR CURRICULUM
          </a>
        </div>
        <div className="flex justify-center items-center ">
          <h2 className=" text:2xl sm:text-3xl font-popin font-bold">
            Our Curriculum
          </h2>
        </div>

        <div className="flex justify-center items-center text-center">
          <p>
            There are many variations of passages of the ipsum available, but
            the majority have suffered alteration in some form, by injected
            humor.
          </p>
        </div>
      </div>
      {/* Packages section start */}
      <div className="grid grid-cols-1 p-4 lg:p-16 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {/* infant section */}
        {divContent.map((data, index) => {
          return (
            <>
              <div
                key={index}
                className={`bg-[rgb(255,252,207,1)] flex flex-col
              items-center py-4 rounded-lg ${
                hovered === index ? "bg-gray-200" : ""
              }`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <Image
                  className="rounded-t px-4"
                  src={data.image}
                  alt="Logo"
                  width={300}
                  height={200}
                />
                {hovered === index ? (
                  <div className="p-4 text-left">
                    <p className="text-[rgb(107,115,133,1)] pl-4 mb-2 text-sm font-popin">
                      Babies enjoy classroom made for exploring with teahcers
                      who support todays big milestone
                    </p>
                    <a
                      className="mt-4 font-popin text-sm transition duration-300 ease-in-out
 transform hover:cursor-pointer hover:text-gray-500"
                    >
                      Learn More
                    </a>
                  </div>
                ) : (
                  <div className="p-4 text-left">
                    <h2 className="text-lg font-semibold mb-2 font-Poetsen text-left ">
                      {data.title}
                    </h2>

                    <p className="text-[rgb(107,115,133,1)] pl-4 mb-2 text-sm font-popin">
                      {data.p1}
                    </p>
                    <p className="text-[rgb(107,115,133,1)] pl-4 mb-2 text-sm font-popin">
                      {data.p2}
                    </p>

                    <p className="text-[rgb(107,115,133,1)] pl-4 mb-2 text-sm font-popin">
                      {data.p3}
                    </p>

                    <p className="text-[rgb(107,115,133,1)] pl-4 mb-2  text-sm font-popin">
                      {data.p4}
                    </p>
                    <p className="text-[rgb(107,115,133,1)] pl-4 mb-2 text-sm font-popin">
                      {data.p5}
                    </p>

                    <p
                      className="mt-4 font-popin text-sm transition duration-300 ease-in-out
 transform hover:cursor-pointer hover:text-gray-500"
                    >
                      {data.href}
                    </p>
                  </div>
                )}
                {/* show on mouse enter section start */}

                {/* show on mouse out section end */}
              </div>
            </>
          );
        })}
      </div>
      {/* Packages section end */}

      {/* bottom section */}
      <div className="relative mx-auto">
        <div className="md:static lg:absolute top-3 left-[69px] flex flex-col w-[94%] sm:w-[95%] md:w-[96%] lg:w-[87%] xl:w-[90%] lg:flex-row justify-center items center mx-auto gap-6">
          {/* Left side section */}
          <div className="flex flex-col justify-between items-center mx-auto p-4 w-[97%] md:flex-row md:w-full lg:w-[90%] bg-[rgb(255,255,255,1)] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex flex-col gap-6 justify-center">
              <div>
                <a
                  href="/"
                  className="text-[rgb(107,115,133,1)] font-popin text-sm bg border border-[rgb(107,115,133,1)] px-6 py-3 rounded-full hover:bg-gray-200 transition ease-in-out delay-200 cursor-pointer"
                >
                  {" "}
                  New Collection
                </a>
              </div>

              <div>
                <h3 className="font-popin text-2xl font-bold">
                  Online Courses
                </h3>
                <p className="font-popin font-bold">From AI Scientist</p>
                <p className="text-sm font-popin text-[rgb(107,115,133,1)] mt-3">
                  Top Instructor From <br />
                  Around The World
                </p>
              </div>
            </div>
            <div>
              <Image
                className="mt-4 md:mt-0"
                src={onlinecourse}
                alt="Logo"
                width={300}
                height={200}
              />
            </div>
          </div>
          {/* right side section */}
          <div className="flex flex-col justify-between items-center mx-auto p-4 w-[97%] md:flex-row md:w-full lg:w-[90%] bg-[rgb(255,255,255,1)] rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <div className="flex flex-col  justify-center gap-6">
              <div className="flex justify-center sm:justify-start">
                <a
                  href="/"
                  className="text-[rgb(107,115,133,1)] font-popin text-sm bg border border-[rgb(107,115,133,1)] px-12 p-3 sm:px-6 sm:py-3 rounded-full hover:bg-gray-200 transition ease-in-out delay-200 cursor-pointer"
                >
                  {" "}
                  Top Teacher
                </a>
              </div>
              <div>
                <h3 className="font-popin text-2xl font-bold text-center sm:text-left">
                  Free Online Courses From Ai Scientist’s
                </h3>
                <p className="font-popin font-bold text-center sm:text-left">
                  School To Education
                </p>
                <p className="text-sm font-popin text-[rgb(107,115,133,1)] mt-3 text-center sm:text-left">
                  Top Instructors From Around The World
                </p>
              </div>
              <div className="flex justify-center sm:justify-start">
                <a
                  href="/"
                  className="bg-[rgba(26,182,157,1)] px-16 py-4 sm:px-8 sm:py-3 rounded-xl text-lg text-white font-popin border-2 border-[rgba(26,182,157,1)]
 transition duration-300 ease-in-out hover:bg-white hover:text-black cursor-pointer"
                >
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom end */}
    </div>
  );
};

export default Curriculum;
