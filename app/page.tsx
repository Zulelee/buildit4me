import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TeamSection from "@/components/team-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <ServicesSection />
      <TeamSection />
    </main>
  );
}
