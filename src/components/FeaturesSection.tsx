
import { SquareCode, Wallet, Users, TrendingUp } from "lucide-react";

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="bg-crypto-dark-gray/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:border-crypto-blue/30 group">
    <div className="w-12 h-12 bg-gradient-to-br from-crypto-blue/20 to-crypto-purple/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-crypto-blue/30 group-hover:to-crypto-purple/30 transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <SquareCode className="w-6 h-6 text-crypto-blue" />,
      title: "Smart Contract Gaming",
      description:
        "Games built on secure, transparent smart contracts ensuring fair play and true ownership of in-game assets.",
    },
    {
      icon: <Wallet className="w-6 h-6 text-crypto-purple" />,
      title: "Seamless Wallet Integration",
      description:
        "Connect your preferred wallet with one click and start trading or playing instantly.",
    },
    {
      icon: <Users className="w-6 h-6 text-crypto-green" />,
      title: "Community Governance",
      description:
        "Token holders participate in platform decisions, from new game approvals to revenue sharing models.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-crypto-pink" />,
      title: "Play-to-Earn Economy",
      description:
        "Earn real crypto assets through gameplay, trading, and contribution to the ecosystem.",
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-crypto-blue/10 rounded-full filter blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-crypto-purple/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Advanced <span className="text-gradient">Features</span> For Gamers
          </h2>
          <p className="text-white/70 leading-relaxed">
            Our platform combines cutting-edge blockchain technology with immersive gaming experiences,
            creating an ecosystem where players truly own their gaming journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
