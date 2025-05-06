
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { telegram } from "lucide-react";

const CommunitySection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <section id="community" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-crypto-green/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-crypto-dark-gray/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join Our <span className="text-gradient">Community</span>
              </h2>
              <p className="text-white/70 mb-6">
                Connect with like-minded players, investors, and developers. Stay updated on latest games, 
                token drops, and exclusive events.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-crypto-green/20 flex items-center justify-center">
                    <span className="text-crypto-green font-bold">1</span>
                  </div>
                  <p className="text-white/80">Join our Telegram for daily discussions and support</p>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <Button
                  className="bg-[#229ED9] hover:bg-[#229ED9]/80 text-white"
                  onClick={() => window.open("https://t.me/+cFpo2VMq47w5YzI8", "_blank")}
                >
                  <telegram className="w-4 h-4 mr-2" />
                  Telegram
                </Button>
              </div>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-2">Subscribe to Updates</h3>
              <p className="text-white/70 mb-6">
                Get early access to new games, token airdrops, and exclusive investment opportunities.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-crypto-light-gray/20 border-white/10 text-white placeholder:text-white/40"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-crypto-blue to-crypto-purple hover:opacity-90 text-white"
                >
                  Subscribe Now
                </Button>
              </form>
              
              <p className="text-white/40 text-xs mt-4">
                By subscribing, you agree to receive marketing emails from OpenStartGate. 
                You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
