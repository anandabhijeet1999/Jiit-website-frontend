import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CampusSection from "@/components/CampusSection";
import PlacementHighlights from "@/components/PlacementHighlights";
import RecruitersSection from "@/components/RecruitersSection";
import Innovation from "@/components/Innovation";
import Sports from "@/components/Sports";
import Latest from "@/components/Latest";
import WhatsHappening from "@/components/WhatsHappening";
import LifeAtJIIT from "@/components/LifeAtJIIT";
export default function Home() {
  return (
<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <main className="relative">
       <HeroSection/>
      <CampusSection/>
      <PlacementHighlights/>
      <RecruitersSection/>
      <Innovation/>
      <Sports/>
      <Latest/>
      <WhatsHappening/>
      <LifeAtJIIT/>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
