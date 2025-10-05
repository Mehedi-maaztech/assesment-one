import React, { useState } from 'react';
import { Users, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';

const CARD_DATA = [
  { 
    id: 1, 
    title: 'The Future of Metro Systems',
    description: 'Highlight your mission, core expertise, and value proposition in a concise paragraph.',
    metrics: [
      { value: '50M+', label: 'Views', icon: Users },
      { value: '39% Lower', label: 'CPA', icon: TrendingUp },
      { value: '$2M+', label: 'Sales Generated', icon: DollarSign },
    ],
    imageUrl: 'https://media.istockphoto.com/id/1367899893/photo/multi-racial-diverse-group-of-people-working-with-paperwork-on-a-board-room-table-at-a.jpg?s=612x612&w=0&k=20&c=2t0t2NfFIpuggzGw54kqtYanxj3f7if1CVjnPh5YRCc=',
    category: 'Success Stories',
    hasAvatar: false,
  },
  { 
    id: 2, 
    title: 'Optimizing Operations with AI',
    description: 'How AI transformed client operations and delivered measurable efficiency gains.',
    metrics: [
      { value: '98%', label: 'Uptime', icon: Users },
      { value: '25% Faster', label: 'Deployment', icon: TrendingUp },
      { value: '4.9/5', label: 'Client Score', icon: DollarSign },
    ],
    imageUrl: 'https://media.istockphoto.com/id/2148178472/photo/hispanic-programmers-collaborating-on-software-development-in-a-modern-office-setting.jpg?s=612x612&w=0&k=20&c=zLh00Lt30vgOdyHmcB8LGBuZloVc5iODcj_hDQAzVAs=',
    category: 'Case Studies',
    hasAvatar: false,
  },
  { 
    id: 3, 
    title: 'Emerging Market Trends',
    description: 'Analysis of recent market shifts and technological advancements.',
    metrics: [
      { value: '20k+', label: 'Reads', icon: Users },
      { value: '12%', label: 'Growth', icon: TrendingUp },
      { value: 'Weekly', label: 'Insights', icon: DollarSign },
    ],
    imageUrl: 'https://media.istockphoto.com/id/905819004/photo/business-people-meeting-using-laptop-computer-calculator-notebook-stock-market-chart-paper-for.jpg?s=612x612&w=0&k=20&c=SARHel0V6ZRAp_vs72uMxIGp4sw0snQkXMqu7EeX0_A=',
    category: 'Blog and News',
    hasAvatar: false,
  },
];

const MetricBadge = ({ value, label, icon : Icon}) => (
  <div className="flex items-center justify-center text-white/80 bg-[#241A30] p-1 rounded-2xl">
    <div className="flex items-center space-x-1 mb-1 text-sm font-semibold">
      <Icon className="w-4 h-4 text-purple-400" />
      <span>{value}</span>
    </div>
    <span className="text-xs text-white/50">{label}</span>
  </div>
);

const ContentCard = ({ data }) => (
  <div className="relative bg-[#1e002d] border border-purple-800 rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105">
    <img
      src={data.imageUrl}
      alt={data.title}
      loading="lazy"
      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/600x400/331155/ffffff?text=No+Image'; }} 
    />

    {/* Avatar Overlay */}
    {data.hasAvatar && (
      <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 z-20">
        <div className="w-14 h-14 rounded-full ring-2 ring-purple-500 overflow-hidden shadow-lg">
          <img src="https://placehold.co/100x100/4c1d95/ffffff?text=P" alt="Profile Avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    )}

    <div className="p-4 mt-6 text-white">
      <h2 className="text-xl font-bold mb-2">{data.title}</h2>
      <p className="text-sm text-white/70 mb-4">{data.description}</p>

      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        {data.metrics.slice(0, 2).map((metric, idx) => (
          <MetricBadge key={idx} {...metric} />
        ))}
        <div className="col-span-2">
          <MetricBadge {...data.metrics[2]} />
        </div>
      </div>
    </div>
  </div>
);

const SuccesStories = () => {
  const [activeTab, setActiveTab] = useState('Success Stories');

  return (
    <div className="min-h-screen p-6 sm:p-12 font-sans bg-gradient-to-b from-[#1e002d] to-[#0a0014]">
      <div className="max-w-7xl mx-auto">

        <header className="text-center mb-10 text-white">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-wider">
            Success Stories, Case Studies & Blog
          </h1>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-white/70">
            Discover how Metro Solver scales businesses using modern strategies and AI integration.
          </p>
        </header>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex space-x-4">
            {['Success Stories', 'Case Studies', 'Blog and News'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full font-semibold transition duration-300
                  ${activeTab === tab 
                    ? 'bg-purple-600 text-white shadow-xl shadow-purple-900/50' 
                    : 'bg-white/10 text-white/70 hover:bg-white/20'}`
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {CARD_DATA.map(card => (
            <ContentCard key={card.id} data={card} />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <button className="flex items-center bg-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-2xl transition duration-300">
            View More
            <ArrowRight className="w-5 h-5 ml-2"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccesStories;
