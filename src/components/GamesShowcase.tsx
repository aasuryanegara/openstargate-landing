
import { useState } from "react";
import { Bitcoin } from "lucide-react";
import { Button } from "@/components/ui/button";

type GameCardProps = {
  title: string;
  category: string;
  image: string;
  description: string;
};

const GameCard = ({ title, category, image, description }: GameCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden relative group max-w-3xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
      
      <img
        src={image}
        alt={title}
        className={`w-full h-80 object-cover transition-transform duration-700 ${
          isHovered ? "scale-110" : "scale-100"
        }`}
      />
      
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <div className="bg-crypto-dark-gray/30 backdrop-blur-sm px-3 py-1 rounded-full inline-block mb-2 w-fit">
          <span className="text-xs font-medium text-white/80">{category}</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
        
        <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button className="bg-crypto-blue/90 hover:bg-crypto-blue text-white w-full">
            Play Now
          </Button>
        </div>
      </div>
    </div>
  );
};

const GamesShowcase = () => {
  return (
    <section id="games" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80">
        <img src="/lovable-uploads/4dcbb498-1a33-45a4-a684-a743aaef306d.png" alt="OpenStarGate Logo" className="w-full h-full object-contain opacity-10" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Game</span>
            </h2>
            <p className="text-white/70 max-w-xl">
              Play, predict, and earn with our flagship OpenStarGate game.
            </p>
          </div>
        </div>

        <GameCard
          title="OPENSTARGATE"
          category="Guessing Game"
          image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwNjUxOTkz&ixlib=rb-1.2.1&q=80&w=1200"
          description="Guess the last two digit bitcoin price from last 3 minutes."
        />
      </div>
    </section>
  );
};

export default GamesShowcase;
