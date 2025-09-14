"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, Search } from "lucide-react";
import Student from "../../public/Icon/image (5).png";
import Rectangle from "../../public/Icon/Rectangle 73.png";
export default function Latest() {
  const [announcements] = useState([
    {
      text: `Corrigendum for EOI for Extreme Cold Weather Clothing: 
        "The last date for issuing of EOI is extended till 10th June 2024 (Monday) 
        and the last date for submission of filled Expression of Interest (EOI) 
        is extended till 20th June 2024 (Thursday) by 05:00 PM."`,
      isNew: true,
    },
    {
      text: "BTech (Direct Admission-10+2 based) in EE(VLSI), EC(ACT), ECM, M&C",
    },
    {
      text: "BTech (Direct Admission-10+2 based) in EE(VLSI), EC(ACT), ECM, M&C (Last date 31 May 2024)",
    },
    {
      text: "BTech Biotechnology (Last date 15 June 2024)",
    },
  ]);

  return (
    <main className="flex flex-col w-full">
      {/* 🔹 Announcements Section */}
      <section className="w-full bg-white px-6 py-10 md:px-16 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Latest
            </h2>
            <p className="text-gray-700 font-medium mt-1">Announcements</p>

            <h3 className="text-xl md:text-2xl font-semibold text-red-600 mt-6">
              Admission 2025
            </h3>
            <p className="mt-4 text-gray-800">Latest @ University</p>

            <Image
            src={Rectangle}
            alt="Rectangle"
            />
          </div>

          {/* Right side */}
          <div className="flex flex-col space-y-4">
            {announcements.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between border-b pb-3"
              >
                <div className="flex items-start space-x-2">
                  <ChevronRight className="mt-1 text-gray-600 w-4 h-4" />
                  <p className="text-sm md:text-base text-gray-800 leading-snug">
                    {item.text}
                  </p>
                </div>
                {item.isNew && (
                  <span className="ml-2 text-xs bg-red-500 text-white px-2 py-0.5 rounded">
                    New
                  </span>
                )}
              </div>
            ))}

            <button className="mt-4 px-4 py-2 border rounded-md text-gray-800 hover:bg-gray-100 w-fit">
              View All
            </button>
          </div>
        </div>
      </section>

      {/* 🔹 Program Section */}
      <section className="w-full  text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-[#2f3472]">
          {/* Left Image */}
          <div className="w-full">
            <Image
              src={Student} // replace with actual image in /public
              alt="Students"
              className="rounded-lg w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="px-4 ">
            <h2 className="text-2xl md:text-3xl font-bold">Find Your Program</h2>
            <p className="mt-3 text-gray-200 text-sm md:text-base w-[550px]">
              At JIIT, you’ll find a program that aligns aptly with your academic
              interests and career aspirations. Leave the crowd and make your own
              path.
            </p>

            <div className="flex flex-wrap gap-3 mt-6 ">
              <button className="px-12 py-2 border-2 border-[#0680F0] text-white rounded-md font-medium hover:bg-gray-400">
                Undergraduate
              </button>   
              <button className="px-12 py-2 border-2 border-[#0680F0] text-white rounded-md font-medium hover:bg-gray-400">
                Graduate
              </button>
              <button className="px-10 py-2 border-2 border-[#0680F0] text-white rounded-md font-medium hover:bg-gray-400">
                Doctoral
              </button>
            </div>

            {/* Search Box */}
            <div className="mt-6 flex flex-col md:flex-row items-center  gap-3 w-[550px]">
              <select className="flex-1 px-4 py-2 rounded-md border-2 border-[#0680F0] text-white">
                <option>Search Course and Programs</option>
                <option>BTech</option>
                <option>MTech</option>
                <option>PhD</option>
              </select>
              <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 flex justify-center items-center">
                Search 
                <Search className="m-1"/>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
