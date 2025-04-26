import React from "react";
import { User, Users } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Ethan Cole",
    position: "Chief Executive Officer (CEO)",
    img: "/lovable-uploads/5ad9bc88-66f3-48f3-b6c2-3d075df78a46.png", // M1
  },
  {
    name: "Sophie Lang",
    position: "Director of Blockchain Engineering",
    img: "/lovable-uploads/678f2efe-2e1d-418a-8403-39e0d041f94d.png", // F1
  },
  {
    name: "Dr. Adrian Novak",
    position: "Chief AI Engineer",
    img: "/lovable-uploads/aae99c3f-1faa-4d6d-b5d2-a3c121673b00.png", // M2
  },
  {
    name: "Lucas Zhang",
    position: "Product Manager",
    img: "/lovable-uploads/3fbce681-6bf0-4baf-8484-c206201f7807.png", // M3
  },
  {
    name: "Olivia Tan",
    position: "Head of Community",
    img: "/lovable-uploads/7b9b431c-035e-4b94-839a-9ed5dd647365.png", // F2
  },
];

const TeamSection = () => (
  <section id="team" className="py-20 px-4 relative z-10">
    <div className="container mx-auto max-w-5xl">
      <div className="bg-crypto-dark-gray/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4 flex items-center gap-3">
          <Users className="text-crypto-green" /> Meet the Team
        </h2>
        <p className="mb-10 text-white/80 text-lg max-w-2xl">
          At OpenStarGate, talent from blockchain, AI, and crypto gaming unite. Our diverse team brings modern innovation and leadership to build the next-gen Web3 entertainment platform.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="relative bg-crypto-dark-gray/50 rounded-xl border border-crypto-purple/30 p-6 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300 animate-fade-in"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-crypto-purple shadow-lg"
                loading="lazy"
              />
              <div className="text-xl font-semibold text-white mb-1">{member.name}</div>
              <div className="text-sm text-crypto-purple/80 font-medium mb-2">
                {member.position}
              </div>
              <div className="flex gap-2 items-center text-xs text-gray-400 mt-auto">
                <User className="w-4 h-4" />
                {["CEO", "Director", "Chief", "Manager", "Head"].some((kw) =>
                  member.position.includes(kw)
                )
                  ? "Leadership"
                  : "Team"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
