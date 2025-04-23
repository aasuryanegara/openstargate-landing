
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-crypto-dark via-crypto-blue/10 to-crypto-purple/10 opacity-50"></div>
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-lg border border-white/5 rounded-2xl p-8 md:p-12 group hover:border-crypto-blue/20 transition-all duration-500 overflow-hidden">
          {/* Animated glow effect */}
          <div className="absolute -inset-[150px] bg-crypto-purple/10 rounded-full filter blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          <div className="text-center relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-crypto-blue/20 to-crypto-purple/20 flex items-center justify-center group-hover:from-crypto-blue/30 group-hover:to-crypto-purple/30 transition-all duration-500">
                <Rocket className="w-8 h-8 text-crypto-purple group-hover:text-white transition-colors duration-500" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
              Ready to Enter the <span className="text-gradient">Future of Gaming</span>?
              <div className="h-1 w-24 bg-gradient-to-r from-crypto-blue to-crypto-purple rounded-full mx-auto mt-4 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
            </h2>
            
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of players, developers, and investors in the OpenStartGate ecosystem. 
              Experience blockchain gaming like never before.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="bg-gradient-to-r from-crypto-blue to-crypto-purple hover:opacity-90 text-white px-8 py-6 h-auto text-lg rounded-xl group-hover:shadow-lg group-hover:shadow-crypto-purple/20 transition-all duration-500">
                Launch App Now
              </Button>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 px-8 py-6 h-auto text-lg rounded-xl">
                Read Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
