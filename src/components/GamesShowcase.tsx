
import { useState } from "react";
import { Bitcoin, Gamepad } from "lucide-react";
import { Button } from "@/components/ui/button";

type GameCardProps = {
  title: string;
  category: string;
  image: string;
  players: string;
  earnings: string;
};

const GameCard = ({ title, category, image, players, earnings }: GameCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden relative group"
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
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1 text-white/70 text-sm">
            <Users className="w-4 h-4 text-crypto-blue" />
            <span>{players}</span>
          </div>
          <div className="flex items-center gap-1 text-white/70 text-sm">
            <Bitcoin className="w-4 h-4 text-crypto-yellow" />
            <span>{earnings}</span>
          </div>
        </div>
        
        <div className="mt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button className="bg-crypto-blue/90 hover:bg-crypto-blue text-white w-full">
            Play Now
          </Button>
        </div>
      </div>
    </div>
  );
};

// Dummy component to fix the Users icon import issue
const Users = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GamesShowcase = () => {
  const games = [
    {
      title: "Crypto Legends",
      category: "RPG",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwNjUxOTkz&ixlib=rb-1.2.1&q=80&w=1200",
      players: "120K+",
      earnings: "$1.2M+",
    },
    {
      title: "Blockchain Rush",
      category: "Racing",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwNjUxOTkz&ixlib=rb-1.2.1&q=80&w=1200",
      players: "85K+",
      earnings: "$950K+",
    },
    {
      title: "NFT Warriors",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwNjUxOTkz&ixlib=rb-1.2.1&q=80&w=1200",
      players: "200K+",
      earnings: "$2.5M+",
    },
    {
      title: "Meta Explorers",
      category: "Adventure",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwNjUxOTkz&ixlib=rb-1.2.1&q=80&w=1200",
      players: "150K+",
      earnings: "$1.8M+",
    },
  ];

  return (
    <section id="games" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-crypto-purple/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Games</span>
            </h2>
            <p className="text-white/70 max-w-xl">
              Discover the most popular blockchain games in our ecosystem. Play, earn, and trade with thousands of players worldwide.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <Button variant="outline" className="border-crypto-blue/50 text-white hover:bg-crypto-blue/10 gap-2">
              <Gamepad className="h-4 w-4" />
              View All Games
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <GameCard
              key={index}
              title={game.title}
              category={game.category}
              image={game.image}
              players={game.players}
              earnings={game.earnings}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesShowcase;
