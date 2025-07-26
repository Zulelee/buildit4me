import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TeamSection from "@/components/team-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
    </main>
  );
}
