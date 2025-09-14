"use client";

import Image from "next/image";
import Image1 from "../../public/Icon/image (6).png";
import Image2 from "../../public/Icon/image (8).png";
import Image3 from "../../public/Icon/image (9).png";
import Image4 from "../../public/Icon/image (10).png";
import Image5 from "../../public/Icon/image (11).png";
import Image6 from "../../public/Icon/image (12).png";
import Image7 from "../../public/Icon/image (13).png";
import Image8 from "../../public/Icon/image (14).png";
import Image9 from "../../public/Icon/image (15).png";
import Image10 from "../../public/Icon/image (16).png";
import Image11 from "../../public/Icon/image (17).png";

const images = [
 Image1,
 Image2,
 Image3,
 Image4,
 Image5,
 Image6,
 Image7,
 Image8,
 Image9,
 Image10,
 Image11,
];

export default function LifeAtJIIT() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12">
      {/* Title */}
      <div className="text-left max-w-7xl mx-auto flex justify-between items-center flex-row">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
  Life <span className="text-[#111]">@JIIT</span>
</h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed ml-20">
          Get a sneak peek into the dynamic world of JIIT, where we not only
          focus on academics, but focus beyond the classroom to give you an
          enriching and vibrant campus experience. Come together and create
          memories that will last a lifetime.
        </p>
      </div>

      {/* Image Grid with Zig-Zag */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative w-full h-40 md:h-56 lg:h-64 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105
              ${index % 2 === 0 ? "md:translate-y-6" : "md:-translate-y-6"}
            `}
          >
            <Image
              src={src}
              alt={`Life at JIIT ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Colored lines */}
      <div className="flex justify-center space-x-3 mt-6">
        <span className="h-1 w-6 rounded-full bg-orange-500"></span>
        <span className="h-1 w-6 rounded-full bg-sky-400"></span>
        <span className="h-1 w-6 rounded-full bg-red-400"></span>
      </div>
    </section>
  );
}
