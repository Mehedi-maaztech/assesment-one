import React from 'react';
import './Caro.css';
import brembo from '../assets/download.jpg';
import luminus from '../assets/download (1).jpg';
import motor from '../assets/images.png';
const Caro = () => {
    
    return (
        <div className="overflow-hidden mx-auto">
            {/* <div className="auto-scroll space-x-25">
                <div className="bg-[#1a1625] rounded-xl flex items-center justify-center">
                    <img src={luminus} className="h-8 w-48"/>
                </div>
                <div className="bg-[#1a1625] rounded-xl flex items-center justify-center">
                    <img src={brembo} className="h-8 w-48"/>
                </div>
                <div className="bg-[#1a1625] rounded-xl flex items-center justify-center">
                    <img src={motor} className="h-8 w-48"/>
                </div>
                {/* <!-- duplicate items for seamless loop --> */}
                {/* <div className="bg-[#1a1625] rounded-xl flex items-center justify-center">
                    <img src={luminus} className="h-8 w-48"/>
                </div>
                <div className="bg-[#1a1625] rounded-xl flex items-center justify-center">
                    <img src={brembo} className="h-8 w-48"/>
                </div>
                <div className="bg-[#1a1625] rounded-xl flex items-center justify-center">
                    <img src={brembo} className="h-8 w-48"/>
                </div>
                <div className="bg-[#1a1625] rounded-xl flex items-center justify-center">
                    <img src={motor} className="h-8 w-48"/>
                </div>
            </div> */}
            
        </div>
    );
};

export default Caro;