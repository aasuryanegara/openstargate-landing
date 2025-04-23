
import { CircleDollarSign } from "lucide-react";

type RoadmapItemProps = {
  quarter: string;
  title: string;
  description: string;
  completed?: boolean;
  current?: boolean;
};

const RoadmapItem = ({ quarter, title, description, completed, current }: RoadmapItemProps) => (
  <div className="relative pl-10 pb-10 last:pb-0">
    {/* Timeline line */}
    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-crypto-light-gray/30">
      {!completed && !current && (
        <div className="absolute -left-1.5 top-0 w-3.5 h-3.5 rounded-full border-2 border-crypto-light-gray/50 bg-crypto-dark"></div>
      )}
      {completed && (
        <div className="absolute -left-1.5 top-0 w-3.5 h-3.5 rounded-full bg-crypto-green border-2 border-crypto-green/50"></div>
      )}
      {current && (
        <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-crypto-blue animate-pulse-glow">
          <div className="absolute inset-0 rounded-full bg-crypto-blue opacity-50 animate-ping"></div>
        </div>
      )}
    </div>
    
    <div className={`pl-6 ${current ? "border-l-2 border-crypto-blue/30 pb-2" : ""}`}>
      <span className="inline-block px-3 py-1 rounded-full bg-crypto-dark-gray/50 text-xs font-medium mb-2">
        {quarter}
      </span>
      <h3 className={`text-xl font-semibold mb-2 ${completed ? "text-crypto-green" : current ? "text-crypto-blue" : "text-white"}`}>
        {title}
      </h3>
      <p className="text-white/70">{description}</p>
    </div>
  </div>
);

const RoadmapSection = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2025",
      title: "Platform Launch",
      description: "Initial release of OpenStartGate with core wallet connectivity and first batch of partnered games.",
      completed: true,
    },
    {
      quarter: "Q2 2025",
      title: "Marketplace Integration",
      description: "Launch of NFT marketplace for game assets with cross-game functionality and token-based rewards.",
      current: true,
    },
    {
      quarter: "Q3 2025",
      title: "Developer SDK",
      description: "Release of comprehensive SDK for game developers to easily integrate with the OpenStartGate ecosystem.",
    },
    {
      quarter: "Q4 2025",
      title: "DAO Governance Launch",
      description: "Introduction of full decentralized governance allowing token holders to vote on platform development.",
    },
    {
      quarter: "Q1 2026",
      title: "Cross-Chain Expansion",
      description: "Support for multiple blockchain networks to increase accessibility and game variety.",
    },
  ];

  return (
    <section id="roadmap" className="py-20 relative">
      <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-crypto-purple/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Development <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-white/70">
            Our strategic plan for building the most comprehensive crypto gaming platform in the industry.
            Every milestone brings new features and opportunities to our community.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -left-6 top-0 w-12 h-12 rounded-full bg-crypto-dark-gray/50 flex items-center justify-center border border-white/10">
            <CircleDollarSign className="w-6 h-6 text-crypto-blue" />
          </div>
          
          <div className="mt-12">
            {roadmapItems.map((item, index) => (
              <RoadmapItem
                key={index}
                quarter={item.quarter}
                title={item.title}
                description={item.description}
                completed={item.completed}
                current={item.current}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
