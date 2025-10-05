import React from "react";

const AboutMissionStory = () => {
  const InfoCard = ({ title, children }) => (
    <div
      className="card shadow-xl bg-[#221234] border border-violet-500/30 rounded-xl backdrop-blur-md"
      style={{
        background: "rgba(29, 0, 70, 0.2)", // soft transparent background
      }}
    >
      <div className="card-body p-8">
        <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-white/70 leading-relaxed">{children}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-[#0d061c] text-white py-24 font-inter">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px]">
          <div
            className="absolute inset-0 p-3 rounded-[3rem]"
            style={{
              background: "linear-gradient(135deg, #6D28D9 0%, #9333EA 100%)",
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 90%)",
            }}
          >
            <div
              className="w-full h-full overflow-hidden rounded-[2.5rem]"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 90%)",
                backgroundColor: "#171520",
              }}
            >
              <img
                src="https://media.istockphoto.com/id/1827291486/photo/a-dedicated-mentor-is-explaining-mentees-importance-of-project-while-sitting-at-the-boardroom.jpg?s=612x612&w=0&k=20&c=whMTmOCyOUfNqoNBe8GPlmcNUM-aCfqD-0whdFPQpO4="
                alt="Metro Solver Team Working on Strategy"
                className="w-full h-full object-cover opacity-80"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://media.istockphoto.com/id/1827291486/photo/a-dedicated-mentor-is-explaining-mentees-importance-of-project-while-sitting-at-the-boardroom.jpg?s=612x612&w=0&k=20&c=whMTmOCyOUfNqoNBe8GPlmcNUM-aCfqD-0whdFPQpO4=";
                }}
              />
            </div>
          </div>
        </div>

        {/* --- Right Column: Mission & Story --- */}
        <div className="space-y-8">
          <InfoCard title="Metro Solver Mission">
            Our mission is to cover all your digital needs by providing innovative,
            comprehensive, and affordable solutions that meet your specific
            requirements and exceed your expectations. We are dedicated to
            delivering top-quality services that empower businesses to succeed in a
            competitive digital landscape.
          </InfoCard>

          <InfoCard title="Metro Solver Story">
            In July 2023, a vision took shape that would redefine the landscape of
            digital services. This vision came from Nayemul Karim, the founder and
            director of Metro Solver. The story begins with Nayemul and his
            co-founder, Shazan Mahmud, who faced a significant challenge while
            trying to launch their first business in the UK. They encountered a
            digital services market that was not only exorbitantly expensive but
            also lacked a comprehensive, all-in-one solution...
            <a
              href="#"
              className="text-violet-400 font-semibold hover:text-violet-300 ml-1"
            >
              Read More
            </a>
          </InfoCard>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionStory;
