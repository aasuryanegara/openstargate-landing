
import { useState, useEffect } from "react";
import { Bitcoin, Gamepad, Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Provide full translation data
const languages = [
  { code: "en", name: "English" },
  { code: "id", name: "Indonesian" },
  { code: "tr", name: "Turkish" },
  { code: "pt", name: "Brazilian" }
];

const languageLabels: Record<string, string> = {
  en: "English",
  id: "Bahasa Indonesia",
  tr: "Türkçe",
  pt: "Português Brasileiro"
};

const Navbar = ({ selectedLang, setSelectedLang }: { selectedLang: string, setSelectedLang: (lang: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white">
                <Globe className="h-5 w-5 mr-2" />
                {languageLabels[selectedLang]}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="start" className="bg-crypto-dark z-[100] min-w-[180px]">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setSelectedLang(lang.code)}
                  className="cursor-pointer"
                >
                  {languageLabels[lang.code]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
            {/* Mobile language dropdown simplified */}
            <div className="flex flex-col w-full gap-4 mt-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="text-white w-full gap-2">
                    <Globe className="h-4 w-4" />
                    {languageLabels[selectedLang]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="start" className="bg-crypto-dark z-[100] min-w-[180px]">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setMobileMenuOpen(false);
                      }}
                      className="cursor-pointer"
                    >
                      {languageLabels[lang.code]}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
