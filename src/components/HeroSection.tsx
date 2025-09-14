"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import BuildingImage from "../../public/Image/Back.jpg";
import StartupIcon from "../../public/Image/image 70.png";
import Book from "../../public/Image/Untitled-1 1.png";
import Found from "../../public/Image/image 70 2.png";
import Accro from "../../public/Image/Untitled-1 3.png";
import Appro from "../../public/Image/ajct.png";

export default function HeroSection() {
  const cards = [
    {
      title: "6719",
      subtitle: "Publications",
      desc: "Impactful research through JIIT’s publications",
      image: Book,
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

  const [currentIndex, setCurrentIndex] = useState(0);

  // responsive cards per view
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1); // mobile
      else if (window.innerWidth < 768) setCardsPerView(2); // tablet
      else if (window.innerWidth < 1024) setCardsPerView(3); // laptop
      else setCardsPerView(5); // desktop large
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, cardsPerView]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? cards.length - cardsPerView : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= cards.length - cardsPerView ? 0 : prev + 1
    );
  };

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
              { number: "712", label: "Placement (Till Date)" },
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

      {/* Strength Section */}
      <section className="py-20 bg-[#E9EDF8] mt-10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading + Para */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Our Strength</h2>
            <p className="md:w-2/3 text-center md:text-left">
              Jaypee Institute of Information Technology (JIIT) is a premier
              institution for a reason. We align our curriculum with the latest
              industry trends, ensuring you graduate with the necessary skills
              and knowledge sought by the top players in various industries.
            </p>
          </div>

          {/* Strength Cards (Carousel) */}
          <div className="relative w-full overflow-hidden">
            {/* Slider Wrapper */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / cardsPerView
                }%)`,
              }}
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="min-w-full sm:min-w-1/3 md:min-w-1/4 lg:min-w-1/5 p-6 flex-shrink-0 
                  rounded-2xl shadow-lg text-left flex flex-col items-left bg-gray-50 
                  hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
                >
                  {card.image && (
                    <Image
                      src={card.image}
                      alt={card.subtitle}
                      width={60}
                      height={60}
                      className="mb-4"
                    />
                  )}
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                  <p className="font-semibold mt-2">{card.subtitle}</p>
                  <p className="text-sm mt-2">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Left Button */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Button */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
