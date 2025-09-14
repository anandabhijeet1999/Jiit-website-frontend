import React from "react";
import Image from "next/image";
import Logo from "../../public/Image/18.25.png";
import MainCam from "../../public/Image/image (2).png";
import Wish from "../../public/Image/image (3).png";
import Vidya from "../../public/Image/image (4).png";
import Location from "../../public/Image/Group (2).png";
import Logo1 from "../../public/Icon/Frame 65.png";
import Logo2 from "../../public/Icon/Frame 66.png";
import Logo3 from "../../public/Icon/Frame 67.png";
import Logo4 from "../../public/Icon/Frame 68.png";
import Logo5 from "../../public/Icon/Frame 220.png";
import Logo6 from "../../public/Icon/Frame 219.png";
import Logo7 from "../../public/Icon/Frame 218.png";
import Logo8 from "../../public/Icon/Frame 217.png";
import Logo9 from "../../public/Icon/Frame 216.png";

export default function CampusSection() {
  return (
    <div className="px-4 py-10 md:px-16 lg:px-24 bg-white">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8">JIIT Campus</h1>

      {/* Campus Section */}
      <div className="grid md:grid-cols-4 gap-6 items-start">
        {/* Main Campus */}
        <div className="rounded-lg overflow-hidden shadow-md border">
          <Image
            src={MainCam}
            alt="Main Campus"
            width={400}
            height={200}
            className="object-cover w-full h-40"
          />
          <div className="bg-indigo-900 text-white text-left py-2 font-semibold flex items-center justify-between px-2">
            Main Campus
            <Image src={Location} alt="location" />
          </div>
        </div>

        {/* Wish Town Campus */}
        <div className="rounded-lg overflow-hidden shadow-md border">
          <Image
            src={Wish}
            alt="Wish Town Campus"
            width={400}
            height={200}
            className="object-cover w-full h-40"
          />
          <div className="bg-indigo-900 text-white text-left py-2 font-semibold flex items-center justify-between px-2">
            Wish Town Campus
            <Image src={Location} alt="location" />
          </div>
        </div>

        {/* Vidya Vihar */}
        <div className="rounded-lg overflow-hidden shadow-md border">
          <Image
            src={Vidya}
            alt="Vidya Vihar"
            width={400}
            height={200}
            className="object-cover w-full h-40"
          />
          <div className="bg-indigo-900 text-white text-left py-2 font-semibold flex items-center justify-between px-2">
            Vidya Vihar
            <Image src={Location} alt="location" />
          </div>
        </div>

        {/* Campus Info */}
        <div className="flex flex-col justify-center items-center bg-[#F5F0E6] rounded-lg shadow-md p-6 text-left mt-2">
          <p className="text-sm">
            Jaypee Institute of Information Technology, has a campus{" "}
            <strong>spanning</strong>
          </p>
          <Image
            src={Logo}
            alt="18.25 acres"
            width={150}
            height={80}
            className="ml-16 -mt-4 object-contain"
          />
          <p className="text-xl font-semibold text-gray-700">acres</p>
        </div>
      </div>

      {/* Logos Section with Horizontal Scroll */}
      <div className="mt-10 overflow-x-auto scrollbar-hide">
        <div className="flex items-center gap-6 w-max px-2">
          {[
            Logo1,
            Logo2,
            Logo3,
            Logo4,
            Logo5,
            Logo6,
            Logo7,
            Logo8,
            Logo9,
          ].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={typeof logo === "string" ? `/${logo}` : logo}
                alt={`logo-${index}`}
                width={100}
                height={60}
                className="object-contain h-24 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
