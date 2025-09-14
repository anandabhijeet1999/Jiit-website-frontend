"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

import BuildingImage from "../../public/Image/Back.jpg";
import StartupIcon from "../../public/Image/Stutap.png";
import Publication from "../../public/Image/Publication.png";
import Found from "../../public/Image/Fund.png";
import Accro from "../../public/Image/Acco.png";
import Appro from "../../public/Image/ajct.png";

export default function HeroSection() {
  const cards = [
    {
      title: "6719",
      subtitle: "Publications",
      desc: "Impactful research through JIIT’s publications",
      image: Publication,
    },
    {
      title: "88",
      subtitle: "Funded Projects",
      desc: "Supporting innovation with funded projects",
      image: Found,
    },
    {
      title: "16",
      subtitle: "Startups",
      desc: "Empowering ideas into startups at JIIT",
      image: StartupIcon,
    },
    {
      title: "Accreditation",
      subtitle: "NAAC 'A' Grade",
      desc: "Accredited by NAAC with 'A' grade in 2023",
      image: Accro,
    },
    {
      title: "Approval",
      subtitle: "AICTE",
      desc: "AICTE approved Institution since 2018",
      image: Appro,
    },
    
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 bg-gray-100 mt-8">
        <div className="relative h-[500px] md:h-[600px]">
          {/* Background Image */}
          <Image
            src={BuildingImage}
            alt="JIIT Campus"
            fill
            className="object-cover rounded-xl"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent rounded-xl" />

          {/* Content */}
          <div className="absolute top-1/4 left-6 md:left-12 text-white max-w-lg">
            <h1 className="text-3xl md:text-3xl font-bold mb-4 text-[#292F80]">
              Explore Life-Changing <br /> Opportunities
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Providing the best of everything for overall growth
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-4xl shadow-lg">
              Know More About the JIIT <span className="p-2">→</span>
            </button>
          </div>

          {/* Stats */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-6 text-white">
            {[
              { number: "712", label: <>Placement <br /> (Till Date)</> },
              { number: "88", label: "Funded Projects" },
              { number: "30", label: "Patents" },
              { number: "6719", label: "Publications" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-start">
                <span className="text-2xl md:text-3xl font-bold">
                  {item.number}
                </span>
                <span className="text-sm md:text-base">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Buttons */}
        <div className="hidden md:flex flex-col gap-3 fixed top-2/4 right-0 z-50">
          <button className="bg-orange-600 text-white px-4 py-2 rounded-l-lg shadow-lg rotate-180 [writing-mode:vertical-rl]">
            Admission Open
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-l-lg shadow-lg rotate-180 [writing-mode:vertical-rl]">
            Enquire Now
          </button>
        </div>
      </section>

      {/* Strength Section with Carousel */}
      <section className="py-16 bg-[#E9EDF8]">

        <div className="max-w-6xl mx-auto text-left">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap mb-4 md:mb-0">
              Our Strength
            </h2>
            <p className="text-gray-600 md:ml-10">
              Jaypee Institute of Information Technology (JIIT) is a premier
              institution for a reason. We align our curriculum with the latest
              industry trends, ensuring you graduate with the necessary skills
              and knowledge sought by the top players in various industries.
            </p>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 1000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {cards.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="group  p-6 shadow-md flex flex-col items-left justify-center text-left 
                    bg-white transition-all duration-300 hover:bg-orange-600 hover:text-white h-full"
                >
                  {/* Icon / Image */}
                  <div className="mb-4">
                    <Image
                      src={item.image}
                      alt={item.subtitle}
                      className="w-20 h-20 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`${
                      index <= 2
                        ? "text-2xl font-bold"
                        : "text-xl font-semibold"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-lg font-medium">{item.subtitle}</p>

                  {/* Description */}
                  <p className="text-sm mt-2">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}
