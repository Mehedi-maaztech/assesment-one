import React from "react";

const AboutHeroSect = () => {
  return (
    <header className="min-h-screen flex items-center font-inter text-white py-24">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* --- Left Column --- */}
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Unveiling the Essence
            <br />
            Of Our Metro Solver
          </h1>

          <p className="text-white/70 text-lg leading-relaxed">
            Welcome to Metro Solver, where creativity meets strategy, and brands
            come to life. We are not just a branding agency; we are architects of
            identity, storytellers of success, and partners in your growth journey.
            Metro Solver is a hub of innovative minds, passionate about turning
            concepts into captivating brand experiences.
          </p>

          <p className="text-white/70 text-lg leading-relaxed">
            Our goal is to redefine industry standards by providing a dynamic and
            adaptive platform. We empower businesses to optimise operations, foster
            growth, and build lasting customer relationships.
          </p>

          <button
            className="btn btn-lg rounded-xl border-none text-white px-10 py-3 text-lg font-semibold
                       bg-gradient-to-r from-violet-700 to-purple-600 shadow-lg hover:shadow-purple-500/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            Book Now
          </button>
        </div>

        <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] mt-10 lg:mt-0">
          <div
            className="absolute inset-0 p-3 rounded-[3rem]"
            style={{
              background:
                "linear-gradient(135deg, #6D28D9 0%, #9333EA 100%)",
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 90%, 80% 100%, 0% 100%)",
            }}
          >
            <div
              className="w-full h-full overflow-hidden rounded-[2.5rem]"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 90%, 80% 100%, 0% 100%)",
                backgroundColor: "#171520",
              }}
            >
              <img
                src="https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=612x612&w=0&k=20&c=EvWROZsfro1ghOVViXVj-tKS364-NeabwNNYkyvhxoY="
                alt="Metro Solver Team Working"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeroSect;
