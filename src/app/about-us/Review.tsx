import React from "react";
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { MdOutlineStar } from "react-icons/md";

const reviews = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    review:
      "AI Scientist’s Education, There are many variations of passages of the ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    image: "/images/review/review1.png",
    rating: 5,
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    review:
      "AI Scientist’s Education,  There are many variations of passages of the ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    image: "/images/review/review2.png",
    rating: 4,
  },
  {
    name: "Alice Brown",
    email: "alice.brown@example.com",
    review:
      "AI Scientist’s Education,  There are many variations of passages of the ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    image: "/images/review/review1.png",
    rating: 4,
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    review:
      "AI Scientist’s Education,  There are many variations of passages of the ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    image: "/images/review/review2.png",
    rating: 3,
  },
  {
    name: "Charlie Williams",
    email: "chalie@gamil.com",
    review:
      "AI Scientist’s Education,  There are many variations of passages of the ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    image: "/images/review/review1.png",
    rating: 5,
  },
  {
    name: "Diana Green",
    email: "diana.green@example.com",
    review:
      "AI Scientist’s Education,  There are many variations of passages of the ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    image: "/images/review/review2.png",
    rating: 3,
  },
];

// Function to render stars
const renderStars = (rating: number) => {
  return Array(rating)
    .fill(0)
    .map((_, i) => (
      <span key={i} className="text-yellow-500">
        <MdOutlineStar />
      </span>
    ));
};
const Review = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row bg-gray-100 p-6 gap-8">
          {/* Left div */}
          <div className="w-full md:w-1/4 flex flex-col  items-center md:items-start  justify-center gap-8">
            <h1 className="text-4xl font-bold">What My Learner&apos;s Says</h1>
            <p className="text-[rgba(107,115,133,1)]">
              There are many variations of passages of the ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour.
            </p>
            <button className="px-4 py-3 bg-[rgba(26,182,157,1)] text-white rounded-lg transition duration-300 ease-in-out hover:bg-[rgba(20,170,160,1)]">
              Learn More
            </button>
          </div>

          {/* Right div */}
          <div className="w-full md:w-2/3 flex flex-col justify-between space-y-6 overflow-hidden">
            {/* First row of cards */}
            <Marquee direction="left">
              {reviews.slice(0, 3).map((review, index) => (
                <div
                  key={index}
                  className="w-96 h-56 bg-white rounded shadow p-4 mx-2 flex flex-col justify-between  inset-0 bg-gradient-to-r from-transparent to-white"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="rounded-full  border-2 border-gray-400 p-[0.5px]"
                    />
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-sm font-bold">{review.email}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[rgba(107,115,133,1)]">
                    {review.review}
                  </p>
                  <div className="mt-2 flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              ))}
            </Marquee>

            {/* Second row of cards */}
            <Marquee direction="right">
              {reviews.slice(3, 6).map((review, index) => (
                <div
                  key={index}
                  className="w-96 h-56 bg-white rounded shadow p-4 mx-2 flex flex-col justify-between inset-0 bg-gradient-to-r from-transparent to-white"
                >
                  <div className="flex items-center space-x-4 ">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="rounded-full border-2 border-gray-400 p-[0.5px]"
                    />
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-sm font-bold">{review.email}</p>
                    </div>
                  </div>
                  <p className="mt-4  text-[rgba(107,115,133,1)]">
                    {review.review}
                  </p>
                  <div className="mt-2 flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
