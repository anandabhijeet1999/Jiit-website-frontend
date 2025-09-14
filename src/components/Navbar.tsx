"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Logo from "../../public/image/image 16.png";
import Group from "../../public/image/Group.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About Us",
    "Academics",
    "For Students",
    "Research & Development",
    "Innovation & Entrepreneurship",
    "Institute Facilities",
    "Contact Us",
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-1">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Left: Logo + Title */}
            <div className="flex items-center gap-4 justify-between w-full lg:w-auto">
              <Image
                src={Logo}
                alt="JIIT University Logo"
                width={80}
                height={100}
                className="w-[70px] h-[90px] md:w-[80px] md:h-[100px] lg:w-[100px] lg:h-[120px] object-contain"
              />
              <div className="max-w-[300px] lg:max-w-full text-center lg:text-left">
                <h1 className="text-base md:text-lg lg:text-xl font-bold text-[#2F3472] leading-tight">
                  JAYPEE INSTITUTE OF INFORMATION TECHNOLOGY, NOIDA
                </h1>
                <p className="text-xs md:text-sm text-gray-600 font-medium mt-1">
                  (Deemed to be a University under section 3 of UGC Act 1956)
                </p>
              </div>
            </div>

            {/* ✅ Right: Contact + Search */}
            <div className="w-full lg:w-auto">
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#2F3472]" />
                  <span className="font-medium">+91-120-2594300/400</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#2F3472]" />
                  <span className="font-medium">admission@jiit.ac.in</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="cursor-pointer">A-</span>
                  <span className="cursor-pointer ml-2">A+</span>
                </div>
              </div>

              {/* Search Box (mobile me neeche, desktop pe side) */}
              <div className="w-full flex justify-end mt-4 lg:mt-4 lg:mr-8">
                <div className="relative w-full lg:w-64">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full border-2 border-gray-200 rounded-full px-4 pr-12 py-2 text-sm bg-[#E8EDF3] focus:outline-none focus:border-[#2F3472] focus:ring-2 focus:ring-[#2F3472]/20 transition-all duration-300"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-[#2F3472] p-1.5 rounded-full w-7 h-7 cursor-pointer hover:bg-[#1e2a5e] transition-colors duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#2F3472] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-8 text-sm font-medium">
              {navItems.map((item, i) => (
                <li key={i} className="relative group">
                  <Link
                    href={`/${item
                      .toLowerCase()
                      .replace(/ & /g, "-")
                      .replace(/ /g, "-")}`}
                    className="hover:text-[#ED4200] transition-colors duration-300 py-2 px-1 relative"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ED4200] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-[#1e2a5e] rounded-lg transition-colors duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="lg:hidden bg-[#1e2a5e] rounded-lg mb-4 overflow-hidden">
              <ul className="flex flex-col">
                {navItems.map((item, i) => (
                  <li
                    key={i}
                    className="border-b border-[#2F3472] last:border-b-0"
                  >
                    <Link
                      href={`/${item
                        .toLowerCase()
                        .replace(/ & /g, "-")
                        .replace(/ /g, "-")}`}
                      className="block py-4 px-6 hover:bg-[#2F3472] transition-colors duration-300 font-medium"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-[#E9EDF8] to-[#F0F4F8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <Image
              src={Group}
              alt="Group Banner"
              className="w-auto h-8 object-contain"
            />
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span className="font-bold text-[#2F3472] text-sm md:text-base">
                Important Announcements:
              </span>
              <span className="text-gray-700 text-sm md:text-base leading-relaxed">
                Admission Round for BTech, BBA & Integrated MBA (After Class
                XII) closing on{" "}
                <span className="font-bold text-[#ED4200]">May 31, 2024</span>.
                Limited Seats Left.
              </span>
            </div>
            <button className="bg-gradient-to-r from-[#ED4200] to-[#ff6b35] hover:from-[#d63900] hover:to-[#e55a2b] text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
