
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import GamesShowcase from "@/components/GamesShowcase";
import RoadmapSection from "@/components/RoadmapSection";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedGraphics from "@/components/AnimatedGraphics";

const Index = () => {
  return (
    <div className="min-h-screen bg-crypto-dark">
      <ParticleBackground />
      <AnimatedGraphics />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <GamesShowcase />
        <RoadmapSection />
        <CommunitySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
