// app/components/PlacementHighlights.tsx
import React from "react";

interface Stat {
  value: string;
  label: string;
  sub: string;
  color: string;
}

const stats: Stat[] = [
  {
    value: "₹60.71 LPA",
    label: "Highest Package",
    sub: "Offered by LinkedIn",
    color: "#9ADCE3",
  },
  {
    value: "252",
    label: "Companies Visited",

    sub: "In 2024",
    color: "#F6CAB5",
  },
  {
    value: "1667",
    label: "Placements & Internships",
    sub: "2024 Batch",
    color: "#F6E6A1",
  },
  {
    value: "₹1.25 LPM",
    label: "Highest Internship",
    sub: "Stipend by Microsoft",
    color: "#C6E7C8",
  },
];

export default function PlacementHighlights() {
  return (
<section className="p-6 bg-[#E8EDF3]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 items-center justify-center">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Placement</h2>
            <span>Highlights</span>
          </div>

          <p className="ml-24 mt-2 text-gray-700">
            With our excellent placement record, you can land your dream role. Top
            employers recruit from JIIT, offering top salary packages and
            establishing a lucrative career ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-xl p-6 text-left shadow hover:shadow-lg transition"
              style={{ backgroundColor: s.color }}
            >
              <h3 className="text-xl font-bold text-blue-900">{s.value}</h3>
              <p className="font-medium mt-1">{s.label}</p>
              <p className="text-gray-700 text-sm mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
