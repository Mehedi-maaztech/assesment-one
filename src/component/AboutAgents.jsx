import React, { useState } from "react";

// --- Mock Data for Agents ---
const MOCK_AGENTS = [
  { name: "Ayesha Siddiqah", title: "Co-founder Leader", categories: ["All", "Agency", "Creative", "Leadership"], image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=500&q=80" },
  { name: "John milton", title: "Senior Developer", categories: ["All", "Technology"], image: "https://media.istockphoto.com/id/1830126474/photo/portrait-of-a-business-man-sitting-in-an-office.jpg?s=612x612&w=0&k=20&c=jFJl6x5NUZOXEH230n2asejE-vDZ0YtATM0pbfJFTgk=" },
  { name: "Jane Smith", title: "Marketing Strategist", categories: ["All", "Grow Marketing", "Agency"], image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=500&q=80" },
  { name: "David Lee", title: "Lead Designer", categories: ["All", "Creative"], image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=500&q=80" },
  { name: "Sarah Chen", title: "HR Manager", categories: ["All", "Leadership"], image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=500&q=80" },
  { name: "Michael Brown", title: "SEO Specialist", categories: ["All", "Grow Marketing"], image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=500&q=80" },
  { name: "Lisa Rodriguez", title: "Project Manager", categories: ["All", "Agency", "Leadership"], image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80" },
  { name: "Chris Evans", title: "Full Stack Engineer", categories: ["All", "Technology"], image: "https://images.unsplash.com/photo-1614283233556-9e3e96f09ab1?auto=format&fit=crop&w=500&q=80" },
  { name: "Emily White", title: "Content Creator", categories: ["All", "Creative", "Grow Marketing"], image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80" },
  { name: "Omar Malik", title: "Operations Lead", categories: ["All", "Leadership", "Agency"], image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80" },
  { name: "Tina Wong", title: "UI/UX Expert", categories: ["All", "Creative"], image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=500&q=80" },
  { name: "Ben Carter", title: "Sales Director", categories: ["All", "Agency"], image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=500&q=80" },
];

const CATEGORIES = ["All", "Agency", "Creative", "Leadership", "Grow Marketing", "Technology"];

// --- Agent Card ---
const AgentCard = ({ agent }) => (
  <div
    className="card shadow-xl border border-violet-600/30 rounded-xl overflow-hidden group relative transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/70"
    style={{ background: "rgba(29, 0, 70, 0.25)" }}
  >
    {/* Agent Image */}
    <figure className="relative">
      <img
        src={agent.image}
        alt={agent.name}
        className="w-full aspect-square object-cover opacity-90 group-hover:opacity-100 transition duration-300"
      />
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: "inset 0 0 12px rgba(147, 51, 234, 0.6)",
          background: "linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.6))",
        }}
      />
    </figure>

    {/* Info */}
    <div className="card-body items-center text-center px-4 py-6">
      <h4 className="text-lg font-bold text-white">{agent.name}</h4>
      <p className="text-sm text-violet-400">{agent.title}</p>
    </div>

    {/* Checkmark Badge */}
    <div className="absolute top-4 right-4 bg-violet-600 p-1.5 rounded-full shadow-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="3"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  </div>
);

// --- Main Component ---
const AboutAgents = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleAgents, setVisibleAgents] = useState(8);

  const filteredAgents = MOCK_AGENTS.filter(
    (agent) => activeCategory === "All" || agent.categories.includes(activeCategory)
  ).slice(0, visibleAgents);

  return (
    <section className="bg-[#0d061c] text-white py-24 font-inter">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Meet Our Agents</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleAgents(8);
              }}
              className={`btn btn-sm md:btn-md rounded-full font-semibold px-5 transition-all duration-300 ${
                activeCategory === category
                  ? "bg-violet-600 border-violet-600 text-white hover:bg-violet-700"
                  : "bg-transparent border-violet-800 text-violet-300 hover:bg-violet-900/40"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredAgents.map((agent, index) => (
            <AgentCard key={index} agent={agent} />
          ))}
        </div>

        {/* View More */}
        {visibleAgents < MOCK_AGENTS.length && (
          <div className="mt-12">
            <button
              onClick={() => setVisibleAgents((prev) => prev + 4)}
              className="btn btn-lg text-white font-semibold border-none rounded-xl px-10 py-3 text-lg"
              style={{
                background: "linear-gradient(90deg, #6D28D9 0%, #9333EA 100%)",
                boxShadow: "0 4px 15px rgba(147, 51, 234, 0.5)",
              }}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutAgents;
