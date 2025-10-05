import React, { useState } from "react";

// --- FAQ Data ---
const faqData = [
  {
    category: "Digital Marketing",
    icon: "💡",
    faqs: [
      {
        q: "What services do you offer in digital marketing?",
        a: "We provide SEO, social media management, email marketing, content marketing, PPC campaigns, and more. Our strategies are data-driven to ensure maximum ROI for your business.",
      },
      {
        q: "How can digital marketing help my business?",
        a: "It helps increase brand visibility, drive qualified traffic, generate leads, and ultimately boost sales and revenue by reaching customers where they spend their time online.",
      },
      {
        q: "How do you measure campaign success?",
        a: "We measure success using key performance indicators (KPIs) like conversion rates, ROAS, website traffic, engagement rates, and customer acquisition cost.",
      },
      {
        q: "Do you offer local SEO?",
        a: "Yes, we specialize in local SEO strategies, including Google My Business optimization, local citation building, and geographic targeting to ensure you dominate local searches.",
      },
    ],
  },
  {
    category: "Web & Software Development",
    icon: "💻",
    faqs: [
      {
        q: "What is your typical development process?",
        a: "Our process includes discovery, planning, UI/UX design, development, testing, deployment, and ongoing maintenance.",
      },
      {
        q: "Do you build mobile apps?",
        a: "Yes, we develop high-performance cross-platform and native mobile applications for both iOS and Android.",
      },
      {
        q: "What technologies do you use?",
        a: "We primarily use the MERN stack (MongoDB, Express, React, Node.js) for web apps, and React Native for mobile, alongside cloud services like Firebase.",
      },
    ],
  },
  {
    category: "Graphic Design & Logo",
    icon: "🎨",
    faqs: [
      {
        q: "What is included in a logo package?",
        a: "Multiple design concepts, unlimited revisions, and final files in PNG, SVG, AI, and PDF formats for both web and print.",
      },
      {
        q: "Can you design branding guidelines?",
        a: "Absolutely. We create brand style guides with typography, color palettes, tone of voice, and usage rules.",
      },
    ],
  },
  {
    category: "Multimedia & Video Editing",
    icon: "🎬",
    faqs: [
      {
        q: "Do you handle motion graphics?",
        a: "Yes — from simple explainer videos to complex 3D motion graphics, we cover a full range of multimedia needs.",
      },
    ],
  },
  {
    category: "Creative Writing Solutions",
    icon: "✍️",
    faqs: [
      {
        q: "What types of content do you write?",
        a: "We provide blog posts, website copy, sales emails, case studies, technical documentation, and social media captions.",
      },
    ],
  },
  {
    category: "E-Commerce Solutions",
    icon: "🛒",
    faqs: [
      {
        q: "What platforms do you specialize in?",
        a: "We have expertise in Shopify, WooCommerce, and custom headless commerce solutions for optimal performance.",
      },
    ],
  },
  {
    category: "Refund, Earn & Cancel Policies",
    icon: "📜",
    faqs: [
      {
        q: "What is your refund policy?",
        a: "Our refund policy varies based on the service and project phase. Please refer to our terms of service document for full details.",
      },
    ],
  },
  {
    category: "Getting Started & General Info",
    icon: "🚀",
    faqs: [
      {
        q: "How do I start a project with you?",
        a: "Fill out our contact form or book a 30-minute consultation call on our website — we’ll guide you through everything!",
      },
    ],
  },
  {
    category: "General Policies & Customer Support",
    icon: "📞",
    faqs: [
      {
        q: "What are your support hours?",
        a: "Our support team is available Monday–Friday, 9 AM to 5 PM EST, with 24/7 emergency support for critical services.",
      },
    ],
  },
];

// --- Main Component ---
const QuestionAnswer = () => {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);

  const activeFaqs =
    faqData.find((item) => item.category === activeCategory)?.faqs || [];

  return (
    <div
      className="min-h-screen px-4 lg:px-12 py-16 font-inter text-white"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, #1E003E 0%, #0D061C 80%)",
      }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
        {/* LEFT SECTION */}
        <div className="lg:col-span-5 sticky top-10 self-start space-y-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
            Got Questions?
            <br />
            <span className="text-white bg-clip-text ">
              We’ve got Answers.
            </span>
          </h1>

          <ul className="space-y-3">
            {faqData.map((item) => (
              <li
                key={item.category}
                onClick={() => setActiveCategory(item.category)}
                className={`px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 flex items-center text-lg font-medium ${
                  activeCategory === item.category
                    ? "bg-gradient-to-r from-violet-600/40 to-pink-600/30 border-l-4 border-violet-400 text-white shadow-md shadow-violet-800/40"
                    : "text-gray-300 hover:text-violet-400 hover:bg-violet-900/20"
                }`}
              >
                <span className="text-xl mr-3">{item.icon}</span>
                {item.category}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-semibold mb-8 border-b border-violet-700 pb-3">
            {activeCategory}
          </h2>

          <div className="space-y-4">
            {activeFaqs.map((faq, i) => (
              <div
                key={i}
                className="collapse collapse-plus rounded-xl overflow-hidden border border-violet-700/40 bg-gradient-to-r from-[#1a0835]/60 to-[#0e0118]/60 backdrop-blur-md hover:border-violet-500/70 transition-all duration-300"
              >
                <input
                  type="radio"
                  name="faq-accordion"
                  defaultChecked={i === 0}
                />
                <div className="collapse-title text-lg md:text-xl font-medium py-5 text-white hover:text-violet-400 transition-colors">
                  {faq.q}
                </div>
                <div className="collapse-content border-t border-violet-700/50 py-4 text-gray-300">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>

          {activeFaqs.length === 0 && (
            <div className="text-gray-400 text-center py-10">
              No FAQs found for this category yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
