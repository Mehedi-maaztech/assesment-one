const WhyChooseMetro = () => {
    return (
        <div className="hero min-h-[60vh] text-white max-w-7xl mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex flex-col gap-6 mb-12 text-center lg:text-left">
                    <span className="inni bg-neutral text-white py-3 px-6 rounded-full text-lg shadow-md w-fit mx-auto lg:mx-0 rotate-[-5deg]">Cancel Anytime</span>

                    <span className="minni bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-3 px-6 rounded-full text-lg shadow-md w-fit mx-auto lg:mx-0 rotate-[5deg]">24/7 Customer Service</span>

                    <span className="minni bg-neutral text-white py-3 px-6 rounded-full text-lg shadow-md w-fit mx-auto lg:mx-0 rotate-[-6deg]">Refer & Earn</span>

                    <span className="moae bg-neutral text-white py-3 px-6 rounded-full text-lg shadow-md w-fit mx-auto lg:mx-0">Money Back Guarantee</span>
                </div>

                <div>
                    <h1 className="text-5xl font-bold">Why Choose <br /> Metro Solver?</h1>
                    <p className="py-6">
                        We are constantly growing or learning and improving. Enter your the personal <br /> real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseMetro;