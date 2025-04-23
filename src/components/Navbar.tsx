import { useState, useEffect } from "react";
import { Bitcoin, Gamepad, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-black/80 backdrop-blur-lg shadow-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-crypto-purple/20 p-2 rounded-lg">
            <Gamepad className="h-6 w-6 text-crypto-purple animate-pulse-glow" />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-white">Open</span>
            <span className="text-gradient">StarGate</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#games"
            className="text-white/80 hover:text-white transition-colors"
          >
            Games
          </a>
          <a
            href="#features"
            className="text-white/80 hover:text-white transition-colors"
          >
            Features
          </a>
          <a
            href="#roadmap"
            className="text-white/80 hover:text-white transition-colors"
          >
            Roadmap
          </a>
          <a
            href="#community"
            className="text-white/80 hover:text-white transition-colors"
          >
            Community
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-white gap-2">
            <Bitcoin className="h-4 w-4" />
            Connect Wallet
          </Button>
          <Button className="bg-crypto-blue hover:bg-crypto-blue/80 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 pt-20 px-4 md:hidden">
          <nav className="flex flex-col gap-6 items-center">
            <a
              href="#games"
              className="text-xl text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Games
            </a>
            <a
              href="#features"
              className="text-xl text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#roadmap"
              className="text-xl text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmap
            </a>
            <a
              href="#community"
              className="text-xl text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </a>
            <div className="flex flex-col w-full gap-4 mt-6">
              <Button variant="outline" className="text-white gap-2 w-full">
                <Bitcoin className="h-4 w-4" />
                Connect Wallet
              </Button>
              <Button className="bg-crypto-blue hover:bg-crypto-blue/80 text-white w-full">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
