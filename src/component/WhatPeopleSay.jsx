
const WhatpeopleSay = () => {
    return (
        <div>
            <div className="text-white text-center space-y-4 my-10 max-w-md mx-auto">
                <h2 className="text-5xl font-bold">What People Say</h2>
                <p>Based on the description of Metro Solver and the image provided, here is a 6-step process that Metro Solver Uses to scale a customer's business</p>
            </div>
            <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center mb-20'>
                <div className="card bg-[#0A111C] w-96 shadow-sm p-5">
                    <div className='flex items-center gap-4 mt-4'>
                        <figure>
                            <img src="https://i.pravatar.cc/200" className="w-16 h-16 rounded-full mb-2" />
                        </figure>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                            </div>
                        </div>
                    </div>
                    <div className="card-body text-white p-0 mt-4">
                        <h3><span className='font-bold'>Matt Bridson </span><span>|</span> <span>Founder of Starva</span></h3>
                        <p>Metro Solver is a creative technology studio that blends design, strategy, and analytics to help brands grow. We build intuitive digital products and marketing systems that turn ideas into measurable results.</p>
                    </div>
                </div>
                <div className="card bg-[#241F3E] w-96 shadow-sm p-5 bg-gradient-to-b from-purple-600 to-indigo-600 border-2">
                    <div className='flex items-center gap-4 mt-4'>
                        <figure>
                            <img src="https://i.pravatar.cc/200" className="w-16 h-16 rounded-full mb-2" />
                        </figure>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                            </div>
                        </div>
                    </div>
                    <div className="card-body text-white p-0 mt-4">
                        <h3><span className='font-bold'>Matt Bridson </span><span>|</span> <span>Founder of Starva</span></h3>
                        <p>Metro Solver is a results-oriented digital studio dedicated to helping brands evolve in the modern world. We craft meaningful products and strategies that connect creativity with measurable success.</p>
                    </div>
                </div>
                <div className="card bg-[#0A111C] w-96 shadow-sm p-5">
                    <div className='flex items-center gap-4 mt-4'>
                        <figure>
                            <img src="https://i.pravatar.cc/500" className="w-16 h-16 rounded-full mb-2" />
                        </figure>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" defaultChecked />
                            </div>
                        </div>
                    </div>
                    <div className="card-body text-white p-0 mt-4">
                        <h3><span className='font-bold'>Matt Bridson </span><span>|</span> <span>Founder of Starva</span></h3>
                        <p>Metro Solver is a modern tech-driven agency focused on transforming ideas into scalable digital solutions. Our team blends creativity and strategy to deliver experiences that engage users and strengthen brands.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatpeopleSay;