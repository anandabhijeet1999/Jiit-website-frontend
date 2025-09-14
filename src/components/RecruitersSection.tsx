
import React from "react";

const recruiters: string[] = [
  "/linkedin.png",
  "/microsoft.png",
  "/cisco.png",
  "/amazon.png",
  "/morgan.png",
  "/playsimple.png",
  "/zs.png",
];

export default function RecruitersSection() {
  return (
   <section className="p-6 bg-[#E8EDF3]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center items-center">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Key Recruiters</h2>
          <span>Placements Companies</span>
        </div>

        <div className="flex flex-wrap gap-6 items-center justify-center ml-6">
          {recruiters.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Recruiter Logo"
              className="h-12 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
