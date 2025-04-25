
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import FeaturesSection from "@/components/FeaturesSection";
import GamesShowcase from "@/components/GamesShowcase";
import RoadmapSection from "@/components/RoadmapSection";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedGraphics from "@/components/AnimatedGraphics";

// Get language from localStorage or browser
function getInitialLang() {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem("osg_lang");
    if (stored && ["en", "id", "tr", "pt"].includes(stored)) return stored;
    const browser = navigator.language?.slice(0,2);
    if (["en", "id", "tr", "pt"].includes(browser)) return browser;
  }
  return "en";
}

const Index = () => {
  const [lang, setLang] = useState(getInitialLang());

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("osg_lang", lang);
    }
  }, [lang]);

  return (
    <div className="min-h-screen bg-crypto-dark">
      <ParticleBackground />
      <AnimatedGraphics />
      <Navbar selectedLang={lang} setSelectedLang={setLang} />
      <main>
        <HeroSection />
        <IntroSection lang={lang} />
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
