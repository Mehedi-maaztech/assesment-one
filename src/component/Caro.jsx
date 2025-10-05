import React from 'react';
import Marquee from 'react-fast-marquee'; // Optional: smoother scroll
import luminus from '../assets/download (1).jpg';
import brembo from '../assets/download.jpg';
import motor from '../assets/images.png';

const logos = [luminus, brembo, motor, luminus, brembo, motor];

const LogoMarquee = () => {
  return (
    <div className="overflow-hidden mx-auto max-w-7xl py-8">
      <Marquee
        gradient={false} // Remove default gradient
        speed={50}       // Adjust scroll speed
        pauseOnHover={true}
      >
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="
              rounded-xl 
              flex items-center justify-center 
              w-48
              mx-4 
              p-4 
              shadow-lg 
              hover:scale-105 
              transition-transform duration-300
            "
          >
            <img src={logo} alt={`Logo ${idx}`} className="h-12 sm:h-16 object-contain" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
