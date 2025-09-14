"use client";
import Image from "next/image";
import { useState } from "react";
import Rectangle from "../../public/Icon/Rectangle 50.png";
import Rect from "../../public/Icon/Rectangle 49.png";
import Icon1 from "../../public/Icon/Frame 247.png";
import Icon2 from "../../public/Icon/Frame 247 (1).png";

export default function Innovation() {
  const [activeTab, setActiveTab] = useState("Center of Excellence");

  // 👇 Ye dono states add kiye hai startup ke liye
  const [expand1, setExpand1] = useState(false);
  const [expand2, setExpand2] = useState(false);

  const tabs = [
    "Center of Excellence",
    "Innovation Projects",
    "Giant Projects",
  ];

  const projects = [
    {
      img: Rectangle,
      title: "Development of fortified periodic cookies using edible seeds",
      year: "2022-23",
      dept: "Biotechnology",
      coord: "Dr Smriti Gaur",
    },
    {
      img: Rect,
      title: "Automated Photoluminescence Detention using image processing",
      year: "2023-24",
      dept: "ECE",
      coord: "Dr. Hemant Kumar, Dr. Parul Arora",
    },
  ];

  return (
    <div className=" bg-[#ACE2E8] mt-6">
      <div className="max-w-7xl  py-0 grid lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2">
          <div className="w-full min-w-screen bg-white p-6 -bg-conic-30">
            <h1 className="text-3xl font-bold text-gray-900 ml-10">
              Innovation Hub
            </h1>
            <p className="mt-2 text-gray-600 max-w-xl ml-10">
              Be creative, collaborative, and engage in entrepreneurial roles
              with the JIIT Innovation Hub. It is a place for aspiring
              innovators to find resources and support to turn their ideas into
              reality.
            </p>

            {/* Tabs */}
            <div className="mt-6 flex space-x-6 border-b ml-10 w-2/5" role="tablist ">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  role="tab"
                  className={`pb-2 font-medium ${
                    activeTab === tab
                      ? "border-b-2 bg-orange-500 text-white p-2"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          {/* Cards with full-width blue background */}
          <div className="w-full  mt-6 relative ml-10">
            <div className="max-w-7xl mx-auto px-4 py-10 grid sm:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <div key={i} className=" rounded-xl  p-4">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={500}
                    height={300}
                    className="rounded-lg w-full"
                  />
                  <h3 className="mt-4 font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Year:</strong> {p.year} <br />
                    <strong>Department:</strong> {p.dept} <br />
                    <strong>Coordinator:</strong> {p.coord}
                  </p>
                </div>
              ))}
            </div>
            <button className="mt-4 px-4 py-2 rounded-4xl border flex items-center gap-2 text-sm m-6">
              View All
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="bg-indigo-900 text-white rounded-xl p-6 ab">
          <h2 className="text-2xl font-bold">Startups</h2>

          {/* Startup 1 */}
          <div className="mt-6 border-b border-white/30 pb-6">
            <p className="mt-2 font-medium">Econea Selini Pvt Ltd</p>
            <p className="text-sm">
              <strong>Student Name:</strong> Divyansh Chauhan, Rika Verma
            </p>
            <div className="flex gap-2">
              <Image
                src={Icon1}
                alt="Econea Selini Pvt Ltd logo"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <div className="text-sm mt-2 w-2/3">
                <p className={expand1 ? "" : "line-clamp-5"}>
                  <strong>Business Idea:</strong> We have 3 verticals of
                  business. Namely Nea Selini, Barter with Nea and Remix by Nea.
                  At Nea Selini shop we upcycle deadstock rejects into new
                  sustainable clothing, reducing dependence on virgin materials
                  for production. At Barter with Nea, our consumers can give
                  back 3 Nea Selini Clothing and receive one new Nea Selini
                  clothing of their choice for free. The clothes they give back
                  to us help us in remodularising clothing in our Nea Shop with
                  the help of predictive data analysis. At Remix by Nea, our
                  customers can upload pictures of their old clothing and our AI
                  will guide them in redesigning it into new clothing, which
                  will then be remanufactured by us. This is we call Fashion as
                  a Service.
                </p>
                <button
                  onClick={() => setExpand1(!expand1)}
                  className="text-blue-300 mt-1 underline"
                >
                  {expand1 ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>

          {/* Startup 2 */}
          <div className="mt-6">
            <p className="mt-2 font-medium">Naturally</p>
            <p className="text-sm">
              <strong>Student Name:</strong> Ishmeet Singh
            </p>
            <div className="flex gap-2">
              <Image
                src={Icon2}
                alt="Naturally logo"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <div className="text-sm mt- w-2/3">
                <p className={expand2 ? "" : "line-clamp-5"}>
                  <strong>Business Idea:</strong> At Naturally, our central
                  business idea revolves around creating a ubiquitous brand
                  offering sustainable and superior products accessible to all.
                  By prioritizing environmental consciousness and health
                  benefits, we aim to revolutionize consumer goods. Our strategy
                  encompasses penetrating both Indian and foreign markets,
                  ensuring our products reach diverse demographics worldwide.
                  Through meticulous research and development, we craft items
                  that are not only environmentally friendly but also enhance
                  personal well-being. Naturally seeks to redefine the market
                  landscape by marrying accessibility with sustainability, thus
                  empowering individuals to make conscious choices for
                  themselves and the planet.
                </p>
                <button
                  onClick={() => setExpand2(!expand2)}
                  className="text-blue-300 mt-1 underline"
                >
                  {expand2 ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>

          <button className="mt-6 px-4 py-2 rounded-4xl bg-white text-indigo-900 font-medium ml-64">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
