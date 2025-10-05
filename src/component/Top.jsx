import React from 'react';

const Top = () => {
    return (
        <div className="w-full flex flex-wrap justify-center items-center gap-3 sm:gap-4 bg-neutral text-neutral-content py-3 px-4 text-sm sm:text-base font-normal text-center">
            <span>Budget friendly</span>
            <span className="hidden sm:inline">•</span>
            <span>No. 1 in Europe</span>
            <span className="hidden sm:inline">•</span>
            <span>On your first order</span>

            <button className="btn btn-sm btn-error rounded-full px-4 font-semibold text-white">
                30% OFF
            </button>

            <span>For all products buy now get the offer</span>
            <span className="hidden sm:inline">•</span>
            <span>User Friendly</span>
            <span className="hidden sm:inline">•</span>
            <span>24/7 Service</span>
        </div>
    );
};

export default Top;