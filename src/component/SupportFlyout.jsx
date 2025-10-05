import React from 'react';

const SUPPORT_ICON_URL = "https://placehold.co/32x32/7e3afc/ffffff?text=S"; // Placeholder for Support Icon

const SupportFlyout = ({ isOpen, onClose }) => {
    const flyoutClasses = `fixed top-0 right-0 z-50 h-full w-full max-w-xs md:max-w-sm shadow-2xl transition-transform duration-500 ease-in-out transform flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
    }`;

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black bg-opacity-70 backdrop-blur-sm"
                    onClick={onClose}
                    aria-hidden="true"
                ></div>
            )}

            {/* Flyout Panel */}
            <div
                className={flyoutClasses}
                style={{ backgroundColor: '#0d061c', borderLeft: '2px solid #6D28D9' }}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-violet-800/50 text-white">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-sm font-bold">
                            <img src={SUPPORT_ICON_URL} alt="Support Icon" className="rounded-full w-full h-full p-1" />
                        </div>
                        <span className="text-lg font-semibold">Customer Support</span>
                    </div>
                    <button className="text-gray-400 hover:text-white" onClick={onClose} aria-label="Close Support Panel">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>

                {/* Chat Body */}
                <div className="flex-1 overflow-y-auto p-4 text-white">
                    {/* Support Message */}
                    <div className="flex flex-col mb-4 items-start">
                        <div className="p-3 rounded-xl max-w-[85%] bg-violet-700 text-white rounded-tl-none shadow-md">
                            <p className="text-sm font-medium">Welcome to our Agency.</p>
                        </div>
                    </div>

                    {/* User Message */}
                    <div className="flex flex-col mb-4 items-end">
                        <div className="p-3 rounded-xl max-w-[85%] bg-gray-800 text-white rounded-br-none shadow-md">
                            <p className="text-sm font-medium">Hello</p>
                        </div>
                    </div>

                    {/* Another Support Message */}
                    <div className="flex flex-col mb-4 items-start">
                        <div className="p-3 rounded-xl max-w-[85%] bg-violet-700 text-white rounded-tl-none shadow-md">
                            <p className="text-sm font-medium">How can we assist you today?</p>
                        </div>
                    </div>

                    <p className="text-xs text-center text-gray-600 my-6">Chat history cleared. Start a new conversation.</p>
                </div>

                {/* Input Area (Static) */}
                <div className="p-4 border-t border-violet-800/50">
                    <div className="flex items-center bg-gray-900 rounded-full px-4 py-2 space-x-3 border border-violet-700">
                        {/* Attachment Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 7l-5.5 5.5-2-2-4.5 4.5V11L14 3h7v7l-9.5 9.5-2-2-4.5 4.5V13z"></path>
                        </svg>

                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 bg-transparent border-none focus:outline-none text-white placeholder-gray-500 cursor-default"
                            disabled
                        />

                        {/* Send Icon */}
                        <div className="p-2 rounded-full text-white cursor-pointer"
                            style={{ background: 'linear-gradient(90deg, #6D28D9 0%, #9333EA 100%)' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 14 2 10 22 2"></polygon>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupportFlyout;
