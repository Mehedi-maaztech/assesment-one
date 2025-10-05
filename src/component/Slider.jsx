import { useState } from 'react';
import slideranim from '../assets/Comp 1_4.gif';
import frame_3 from '../assets/Frame 3.gif';
import SupportFlyout from './SupportFlyout'; // Make sure SupportFlyout is exported correctly

const Slider = () => {
    const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);

    return (
        <div className="hero min-h-[90vh] text-white max-w-7xl mx-auto">
            <div className="hero-content flex-col lg:flex-row relative">
                <div className="max-w-full">
                    <h1 className="text-5xl font-bold mb-2">Expert to<br />Digitalise Your</h1>
                    <h1 className="text-5xl font-bold text-[#b46aff] mb-4">Growth</h1>
                    <p className="mb-6 text-sm text-gray-300">
                        We are constantly growing or learning and improving. Enter your the personal real estate sanctuary, where finding the ideal home is
                    </p>
                    <button className="btn bg-[#6c47ff] text-white px-8 py-3 rounded-full shadow-lg hover:bg-[#b46aff] transition-all flex items-center gap-2">
                        <span>✨</span> Explore Now
                    </button>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src={slideranim}
                        alt="Slider Animation"
                        className="w-[400px] h-auto"
                    />
                </div>
                {/* Floating Button to Open Chat */}
                <div className="absolute -bottom-10 right-8">
                    <div
                        className="rounded-full p-3 cursor-pointer"
                        onClick={() => setIsFlyoutOpen(true)}
                        aria-label="Open Support Panel"
                    >
                        <img src={frame_3} alt="Support Icon" width="40" height="40" />
                    </div>
                </div>

                {/* Chat Flyout */}
                <SupportFlyout
                    isOpen={isFlyoutOpen}
                    onClose={() => setIsFlyoutOpen(false)}
                />
            </div>
        </div>
    );
};

export default Slider;
