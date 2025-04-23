
import { Rocket, Zap, CircleDollarSign, Gamepad, Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";

// Particle component for background animation
const Particle = ({ delay, size, left }: { delay: number; size: number; left: string }) => (
  <div
    className="absolute animate-particle-flow opacity-0"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: Math.random() > 0.5 ? "#1EAEDB" : "#8B5CF6",
      borderRadius: "50%",
      left,
      bottom: "0",
      animationDelay: `${delay}s`,
    }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Particle
          key={i}
          delay={Math.random() * 10}
          size={Math.random() * 6 + 2}
          left={`${Math.random() * 100}%`}
        />
      ))}

      {/* Hero content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-block bg-crypto-light-gray/30 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
              <p className="text-sm font-medium flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-crypto-green animate-pulse"></span>
                Revolutionizing Crypto Gaming
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Gateway to <span className="text-gradient">Web3 Gaming</span> Revolution
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              OpenStartGate connects gamers, developers, and investors in a decentralized
              ecosystem where play meets profit and innovation knows no bounds.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-crypto-blue hover:bg-crypto-blue/80 text-white rounded-lg gap-2"
              >
                <Zap className="h-5 w-5" />
                Start Gaming
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-crypto-purple/50 text-white hover:bg-crypto-purple/10 rounded-lg gap-2"
              >
                <CircleDollarSign className="h-5 w-5" />
                Invest Now
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-crypto-blue">200K+</span>
                <span className="text-sm text-white/60">Active Gamers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-crypto-purple">50+</span>
                <span className="text-sm text-white/60">Games</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-crypto-green">$10M+</span>
                <span className="text-sm text-white/60">Trading Volume</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[400px] md:h-[500px] animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-crypto-blue/20 via-crypto-purple/20 to-crypto-green/20 rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-crypto-blue/20 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-crypto-purple/20 rounded-full filter blur-3xl"></div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rotate-12">
                  <div className="relative w-64 h-64 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 p-5 flex items-center justify-center shadow-xl">
                    <Rocket className="w-20 h-20 text-crypto-purple glow-purple" />
                    <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-crypto-dark-gray rounded-lg flex items-center justify-center border border-white/5 rotate-12 shadow-lg">
                      <Gamepad className="w-8 h-8 text-crypto-blue glow-blue" />
                    </div>
                    <div className="absolute -top-6 -left-6 w-14 h-14 bg-crypto-dark-gray rounded-lg flex items-center justify-center border border-white/5 -rotate-12 shadow-lg">
                      <Bitcoin className="w-7 h-7 text-crypto-yellow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
