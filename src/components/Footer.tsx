import { MapIcon, PhoneCall, MailIcon, ExternalLink, } from "lucide-react";
import Image from "next/image";
import Image1 from "../../public/FooterIcon/Soc.png";
export default function Footer() {
  const images = [
    { src: "/image/Rectangle 109.png", text: "JIIT, Noida" },
    { src: "/image/Rectangle 108.png", text: "JUET, Guna" },
    { src: "/image/Rectangle 110.png", text: "JUIT, Waknaghat" },
    { src: "/image/Rectangle 111.png", text: "JUA, Anoopshahr" },
  ];

  const buttons = [
    { text: "Anunaad - The Institute Newsletter", icon: "/FooterIcon/Frame.png" },
    { text: "Annual Reports", icon: "/FooterIcon/2 (1).png" },
    { text: "Enquire Now!", icon: "/FooterIcon/3 (1).png" },
    { text: "Webmail", icon: "/FooterIcon/4 (1).png" },
    { text: "Webportal", icon: "/FooterIcon/5 (1).png" },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-br from-[#2F3472] to-[#1e2a5e] text-white">
        {/* Top Red Banner */}
        <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl">
          <div className="bg-gradient-to-r from-[#ED4200] to-[#ff6b35] w-full h-24 sm:h-32 md:h-40 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 md:px-12 rounded-xl sm:rounded-2xl shadow-2xl">
            <div className="text-center md:text-left mb-3 sm:mb-4 md:mb-0">
              <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl leading-tight text-white">
                Jaypee <br className="hidden md:block" />
                Universities
              </h2>
              
            </div>

            <div className="flex  overflow-x-auto max-w-full">
              {images.map((item, index) => (
                <div key={index} className="relative flex-shrink-0 group cursor-pointer">
                  <div className="relative overflow-hidden   shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    <Image
                      src={item.src}
                      alt={item.text}
                      width={100}
                      height={100}
                      className="object-cover w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-34 lg:w-40 lg:h-40 border-1 border-white"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <p className="absolute bottom-1 left-1 right-1 sm:bottom-2 sm:left-2 sm:right-2 text-center text-white text-xs font-bold bg-black/40 px-1 sm:px-2 py-0.5 sm:py-1 rounded">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto pt-32 pb-12 px-4 md:px-8">
          {/* Top Section - Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
      {buttons.map((btn, i) => (
        <button
          key={i}
          className="group flex items-center justify-center gap-2 border-2 border-white/30 hover:border-[#ED4200] hover:bg-[#ED4200] rounded-xl py-3 px-4 text-sm font-medium w-full transition-all duration-300 transform hover:scale-105"
        >
          <Image
            src={btn.icon}
            alt={btn.text}
            width={24}
            height={24}
            className="object-contain"
          />
          <span>{btn.text}</span>
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      ))}
    </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapIcon className="w-6 h-6 text-white shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      A-10, Sector-62, Noida-201 309,<br />
                      Uttar Pradesh, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneCall className="w-6 h-6 text-white shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">24X7 Helpline</p>
                    <p className="text-lg font-bold text-white">+91-120-2400973</p>
                    <p className="text-xs text-gray-300">(For admission-related queries)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MailIcon className="w-6 h-6 text-white shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-white">admission@jiit.ac.in</p>
                  </div>
                </div>
                <div className="ml-10">
                    <h3 className="text-xl font-bold text-white mb-4 ">Contact Us</h3>
                    <div className="w-2/3 h-0.5 bg-white mb-4 "></div>
                    <div className="">
                    <Image
                    src={Image1}
                    alt="socal"
                    />
                    </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <div className="w-full h-0.5 bg-white mb-4 "></div>
              <ul className="space-y-3">
                {[
                  "About JIIT",
                  "Governance",
                  "MOA",
                  "NAD",
                  "Grievances",
                  "Career Openings",
                  "Contact Us",
                  "Reach Us",
                ].map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-[#ED4200] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#ED4200] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Important Links</h3>
              <div className="w-full h-0.5 bg-white mb-4"></div>
              <ul className="space-y-3">
                {[
                  "Mandatory Disclosures - UGC",
                  "Mandatory Disclosures - AICTE",
                  "Teaching Methodology",
                  "Jaypee Business School",
                  "IQAC",
                  "ICC",
                  "Anti-Ragging Compliance",
                  "Departments",
                ].map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-[#ED4200] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#ED4200] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* R&D */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Research & Development</h3>
              <div className="w-full h-0.5 bg-white mb-4"></div>
              <ul className="space-y-3">
                {[
                  "Guidelines for Research",
                  "Centres for Research",
                  "Research Groups",
                  "Sponsored Projects",
                  "All Publications by JIIT Faculty",
                ].map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-[#ED4200] transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#ED4200] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                <a href="#" className="hover:text-[#ED4200] transition-colors duration-300">
                  Terms and Conditions
                </a>
                <a href="#" className="hover:text-[#ED4200] transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-[#ED4200] transition-colors duration-300">
                  Sitemap
                </a>
              </div>
              <div className="text-center md:text-right">
                <p className="text-xs text-gray-400">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-gradient-to-r from-whitw to-white text-black px-4 py-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-center md:text-left">
            © Copyright 2025 - JIIT - All Rights Reserved | Disclaimer
          </p>
          <p className="text-center md:text-right text-black">
            Web Design & Development: <span className="text-black font-semibold">Interactive Bees</span>
          </p>
        </div>
      </div>
    </>
  );
}
