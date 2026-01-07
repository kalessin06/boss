import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Presentation from "@/components/Presentation";
import Timeline from "@/components/Timeline";
import DressCode from "@/components/DressCode";
import Ambiance from "@/components/Ambiance";
import PracticalInfo from "@/components/PracticalInfo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Presentation />
      <Timeline />
      <DressCode />
      <Ambiance />
      <PracticalInfo />
      <CTA />
      <Footer />
    </main>
  );
}
