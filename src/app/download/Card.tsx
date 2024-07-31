import React from "react";
import Image from "next/image";
const Card = () => {
  const cardElement = [
    {
      image: "/images/download/pdf.png",
      name: "Registration Form",
    },
    {
      image: "/images/download/pdf.png",
      name: "Winner's Form",
    },
    {
      image: "/images/download/pdf.png",
      name: "Computer & GK Quiz 2024",
    },
    {
      image: "/images/download/pdf.png",
      name: "Instruction Comp GK 2024",
    },
  ];

  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      py-16 px-12  justify-center gap-8 w-full mx-auto"
      >
        {cardElement.map((data, index) => {
          return (
            <>
              <div
                key={index}
                className="bg-[rgb(255,255,255)] flex flex-col gap-10 shadow-[-5px_5px_3px_0px_#38a169,1px_1px_5px_4px_#cbd5e0]
          p-4 rounded-lg transform transition-transform duration-1000 hover:scale-105 cursor-pointer "
              >
                <div className="flex justify-center">
                  <Image
                    className="rounded-t"
                    src={data.image}
                    alt="Logo"
                    width={50}
                    height={50}
                  />
                </div>
                {/* bottom section */}
                <div className="flex justify-center">
                  <h2 className="text-lg md:text-xl font-popin font-bold">
                    {data.name}
                  </h2>
                </div>
                <div className="flex justify-center">
                  <button className="cursor-pointer rounded-tl-3xl rounded-br-3xl  flex justify-between  bg-[rgba(225,95,120,1)] px-3 py-3  text-white tracking-wider shadow-xl hover:bg-[#d0546d] hover:scale-105 duration-500 w-[150px]">
                    Download
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="w-5 h-5 animate-bounce"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                      ></path>
                    </svg>
                  </button>
                </div>
                {/* bottom section end */}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
