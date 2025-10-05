import React, { useState } from 'react';
import frame from '../assets/Frame.gif';
const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'Home', href: '#' },
      { name: 'About us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'User Profile', href: '#' },
      { name: 'White Labelling', href: '#' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { name: 'Our Stories', href: '#' },
      { name: 'Career', href: '#' },
      { name: 'Send Message', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms and Conditions', href: '#' },
      { name: 'Start Earning', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Digital Marketing', href: '#' },
      { name: 'Creative Writing Solution', href: '#' },
      { name: 'Web & Software Development', href: '#' },
      { name: 'E-Commerce Solution', href: '#' },
      { name: 'Graphic Design', href: '#' },
      { name: 'Multimedia & Video Editing', href: '#' },
      { name: 'Merchandise', href: '#' },
      { name: 'Premium Website', href: '#' },
      { name: 'Premium Domains', href: '#' },
      { name: 'Special Combo', href: '#' },
    ],
  },
];

const LogoSection = () => (
  <div className="flex items-center justify-center gap-3">
    <figure>
        <img src={frame} alt="" />
    </figure>
    <div>
      <h2 className="text-2xl font-bold text-white">METRO SOLVER</h2>
      <p className="text-xs text-white uppercase tracking-widest">your it partner</p>
    </div>
  </div>
);

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail('');
    alert('Subscription simulated!');
  };

  return (
    <footer className="bg-[#0d061c] text-white font-['Inter']">
      {/* Top: Newsletter Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 lg:px-10">
        <div className="rounded-xl border border-violet-700/30 bg-violet-900/10 p-8 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-left space-y-3">
            <LogoSection />
            <h3 className="text-2xl md:text-3xl font-bold mt-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm text-white/70">Join 25,000+ clients of Metro Solver today.</p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full max-w-md rounde">
            <div className="join w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered join-item w-full bg-white text-gray-800 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="btn join-item bg-gradient-to-r from-violet-600 to-fuchsia-600 border-none text-white font-semibold hover:opacity-90"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Middle: Footer Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 py-12 px-4 lg:px-10 border-t border-violet-700/20">
        {/* Contact Info */}
        <div className="col-span-1 md:col-span-4 space-y-6">
          <h3 className="text-3xl font-extrabold leading-tight">
            Got Questions?
            <br /> Call us!
          </h3>

          <div className="space-y-3 text-white/80">
            <div className="flex items-start gap-3">
              <span className="text-violet-400">📍</span>
              <p>
                Head office: Metro Solver Limited
                <br />
                Grantham Road, London E12 5LX, United Kingdom
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-violet-400">📞</span>
              <p>+44 7936 455446</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-violet-400">✉️</span>
              <p>official@metrosolver.com</p>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Country Currency</p>
            <select className="select select-bordered bg-transparent text-white border-violet-700 w-full max-w-xs">
              <option className="bg-gray-900 text-white">🇬🇧 GBP - British Pound</option>
              <option className="bg-gray-900 text-white">🇺🇸 USD - US Dollar</option>
              <option className="bg-gray-900 text-white">🇪🇺 EUR - Euro</option>
            </select>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="col-span-1 md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-lg font-bold mb-2">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 hover:text-violet-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 border-t border-violet-700/20 text-white/50 text-sm">
        © {new Date().getFullYear()} METRO SOLVER. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
