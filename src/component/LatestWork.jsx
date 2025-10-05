import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.jpg'
const LatestWork = () => {
    return (
        <div className="max-w-7xl mx-auto py-20 px-4">
            
            <div className="tag flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
                    Our Latest Work
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Based on the description of Metro Solver and the image provided, here is
                    <br className="hidden sm:block" /> a 6-step process that Metro Solver uses
                    to scale a customer's business.
                </p>
            </div>

            <div className="first-sect grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={one} alt="Project 1" className="w-full object-cover" />
                    </figure>
                </div>

                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={two} alt="Project 2" className="w-full object-cover" />
                    </figure>
                </div>

                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={three} alt="Project 3" className="w-full object-cover" />
                    </figure>
                </div>

                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={four} alt="Project 4" className="w-full object-cover" />
                    </figure>
                </div>

                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={five} alt="Project 5" className="w-full object-cover" />
                    </figure>
                </div>
            </div>

            <div className="second-sect grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={one} alt="Project 1" className="w-full object-cover" />
                    </figure>
                </div>

                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={two} alt="Project 2" className="w-full object-cover" />
                    </figure>
                </div>

                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={three} alt="Project 3" className="w-full object-cover" />
                    </figure>
                </div>

                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={four} alt="Project 4" className="w-full object-cover" />
                    </figure>
                </div>
            </div>

            <div className="third-sect grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={one} alt="Project 1" className="w-full object-cover" />
                    </figure>
                </div>

                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={two} alt="Project 2" className="w-full object-cover" />
                    </figure>
                </div>

                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={three} alt="Project 3" className="w-full object-cover" />
                    </figure>
                </div>

                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={four} alt="Project 4" className="w-full object-cover" />
                    </figure>
                </div>

                <div className="card bg-base-100 shadow-xl overflow-hidden">
                    <figure>
                        <img src={five} alt="Project 5" className="w-full object-cover" />
                    </figure>
                </div>
            </div>
        </div>

    );
};

export default LatestWork;