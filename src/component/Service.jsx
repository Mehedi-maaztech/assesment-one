
const Service = ({ service }) => {
    const { title, description, icon, link } = service;
    return (
        <div className="card w-80 bg-gradient-to-br from-[#2A174C] to-[#1C102F] text-white rounded-2xl border border-[#ffffff1a] hover:scale-105 transition-all duration-300 shadow-lg p-6">
            <div className="flex flex-col space-y-4">
                {/* Icon */}
                <div className="text-4xl text-yellow-400">{icon}</div>

                {/* Title */}
                <h2 className="text-lg font-bold">{title}</h2>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-300">
                    {description}
                </p>

                {/* Read More */}
                <a
                    href={link}
                    className="text-sm font-medium text-white flex items-center gap-1 hover:text-yellow-400 transition-colors mt-2"
                >
                    Read More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Service;