import React from 'react';
import {
  BsTelephone,
  BsBarChart,
  BsHeadset,
  BsBoxSeam,
  BsShieldCheck,
} from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

const stepsRight = [
  { label: 'Book a Call', icon: <BsTelephone className="w-6 h-6 text-white" /> },
  { label: 'Requirement Analysis', icon: <BsBarChart className="w-6 h-6 text-white" /> },
  { label: 'Service Customisation', icon: <BsHeadset className="w-6 h-6 text-white" /> },
];

const stepsLeft = [
  { label: 'Implement & Develop', icon: <FiSettings className="w-6 h-6 text-white" /> },
  { label: 'Quality Assurance', icon: <BsShieldCheck className="w-6 h-6 text-white" /> },
  { label: 'Delivery and Support', icon: <BsBoxSeam className="w-6 h-6 text-white" /> },
];

export default function HowItWorks() {
  return (
      <section className=" py-20 px-4 text-white"> {/* bg-gradient-to-br from-purple-950 to-black*/}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center gap-16 relative">

        <div className="flex flex-col gap-10 items-center lg:items-end text-center lg:text-right w-full lg:w-1/3">
          {stepsLeft.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-4">
              <div className="bg-neutral rounded-full p-4">
                {step.icon}
              </div>
              <span className="bg-neutral rounded-full py-3 px-6 text-lg">
                {step.label}
              </span>
            </div>
          ))}
        </div>

        <div className="relative flex items-center justify-center w-[200px] h-[200px] rounded-full bg-gradient-to-br from-purple-700 to-indigo-700 text-center text-xl font-semibold">
          <div>
            How<br />it Works?
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-xs bg-purple-800 rounded-full px-2 py-1">01</div>
          <div className="absolute top-[20%] right-0 -translate-y-1/2 text-xs bg-purple-800 rounded-full px-2 py-1">02</div>
          <div className="absolute bottom-[20%] right-0 -translate-y-1/2 text-xs bg-purple-800 rounded-full px-2 py-1">03</div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs bg-purple-800 rounded-full px-2 py-1">04</div>
          <div className="absolute bottom-[20%] left-0 -translate-y-1/2 text-xs bg-purple-800 rounded-full px-2 py-1">05</div>
          <div className="absolute top-[20%] left-0 -translate-y-1/2 text-xs bg-purple-800 rounded-full px-2 py-1">06</div>
        </div>

        <div className="flex flex-col gap-10 items-center lg:items-start text-center lg:text-left w-full lg:w-1/3">
          {stepsRight.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-4">
              <div className="bg-neutral rounded-full p-4">
                {step.icon}
              </div>
              <span className="bg-neutral rounded-full py-3 px-6 text-lg">
                {step.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
