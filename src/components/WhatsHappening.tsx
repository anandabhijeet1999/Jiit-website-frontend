"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Logo from "../../public/Icon/Frame 247 (2).png";
import Logo1 from "../../public/Icon/Untitled-1 5.png";

export default function WhatsHappening() {
  return (
    <section className="bg-[#FDF6EC] relative">
      {/* Title */}
      <div className="max-w-7xl py-0 grid lg:grid-cols-3 gap-6 relative">
        <div className="lg:col-span-2">
          <div className="w-full min-w-screen bg-white p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex flex-col ml-10">
              What’s Happening <span className="font-normal">@ JIIT</span>
            </h2>
          </div>

          {/* Wrapper */}
          <div className="mt-8 flex flex-col lg:flex-row gap-6">
            {/* Left side (Cards Section) */}
            <div className="flex-1 p-6 rounded-lg relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative ml-10">
                {/* Card 1 */}
                <div className="p-4 rounded-lg">
                  <Image
                    src={Logo}
                    alt="Event 1"
                    width={400}
                    height={250}
                    className="rounded-md w-full h-auto"
                  />
                  <p className="mt-4 font-bold text-gray-900">
                    JULY 01 2024 | 11:00 AM
                  </p>
                  <p className="mt-2 text-gray-700 text-sm">
                    Dept of CSE & IT is organizing a 2-week Summer School on
                    "Emerging Trends in Software Development: Tools and
                    Techniques" from 01 -13 July 2024
                  </p>
                  <div className="mt-3 flex items-center text-gray-800 font-medium hover:text-black cursor-pointer">
                    <ArrowUpRight size={18} className="mr-1" /> Read More
                  </div>
                </div>

                {/* Card 2 */}
                <div className="p-4 rounded-lg">
                  <Image
                    src={Logo1}
                    alt="Event 2"
                    width={400}
                    height={250}
                    className="rounded-md w-full h-auto"
                  />
                  <p className="mt-4 font-bold text-gray-900">
                    JULY 16 2024 | 01:00 PM
                  </p>
                  <p className="mt-2 text-gray-700 text-sm">
                    Dept of PMSE is organizing One Week FDP on "Computational
                    techniques using High Performance Computing (HPC) in
                    Physical Sciences” from 16th – 22nd July 2024
                  </p>
                  <div className="mt-3 flex items-center text-gray-800 font-medium hover:text-black cursor-pointer">
                    <ArrowUpRight size={18} className="mr-1" /> Read More
                  </div>
                </div>
              </div>

              {/* Bottom View All button */}
              <div className="flex justify-center sm:justify-between mt-6">
                <button className="flex items-center gap-1 border px-4 py-0 rounded-full text-gray-800 hover:bg-gray-100 ml-10">
                  View All <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right side (Event Archive) */}
        <div className="absolute right-0 top-10 w-full lg:w-1/3 bg-[#B9E4E7] rounded-lg p-10 flex flex-col justify-between self-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Event Archive
            </h3>

            {[
              {
                text: "Jaypee Business School wishes a heartfelt congratulations to Vansh Chopra for his placement in Dynamics Archer.",
                date: "May 28, 2024",
              },
              {
                text: "Jaypee Business School proudly wishes a heartfelt congratulations to Rishab Tyagi and Aditya Sharma for their successful placement in IGT Solutions.",
                date: "May 28, 2024",
              },
              {
                text: "With an unwavering commitment to empowering and inspiring students.",
                date: "May 28, 2024",
              },
              {
                text: "A truly enlightening session by Mr. Manoj Kumar Sharma on Corporate Governance and Ethics.",
                date: "May 28, 2024",
              },
            ].map((event, i) => (
              <div
                key={i}
                className={`mt-4 ${i < 3 ? "border-b border-gray-300 pb-4" : ""}`}
              >
                <p className="text-gray-800 text-sm">{event.text}</p>
                <p className="text-gray-900 font-medium text-sm mt-1">
                  {event.date}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Buttons */}
          <div className="mt-6 flex justify-between items-center">
            <div className="flex space-x-2">
              <span className="h-2 w-6 rounded-full bg-orange-500"></span>
              <span className="h-2 w-6 rounded-full bg-gray-300"></span>
              <span className="h-2 w-6 rounded-full bg-gray-300"></span>
              <span className="h-2 w-6 rounded-full bg-gray-300"></span>
            </div>
            <button className="flex items-center gap-1 border px-3 py-1 rounded-full text-gray-800 hover:bg-gray-100">
              View All <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
