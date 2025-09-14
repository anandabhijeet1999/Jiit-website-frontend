"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const recruiters: string[] = [
  "/key/Frame 1070.png",
  "/key/Frame 1071.png",
  "/key/Frame 1072.png",
  "/key/Frame 1073.png",
  "/key/Frame 1074.png",
  "/key/Frame 1075 (1).png",
  "/key/Frame 1075.png",
  "/key/Frame 1076.png",
];

export default function RecruitersSection() {
  return (
    <section className="p-6 bg-[#E8EDF3]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center items-center">
        <div className="mb-6 text-left w-1/4">
          <h2 className="text-2xl font-bold">Key Recruiters</h2>
          <span className="text-gray-600">Placements Companies</span>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={2}
          slidesPerView={4}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {recruiters.map((logo, i) => (
            <SwiperSlide key={i}>
              <Image
                src={logo}
                alt={`Recruiter Logo ${i + 1}`}
                width={120}
                height={60}
                className="h-16 w-auto mx-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
