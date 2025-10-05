import { CiClock1 } from "react-icons/ci";
import { GrSchedule } from "react-icons/gr";
import { CiPlay1 } from "react-icons/ci";

const Podcast = () => {
    return (
        <div className="max-w-7xl mx-auto py-20 px-4">
            <div className="tag flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
                <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
                    Did you listen to our Podcast?
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Based on the description of Metro Solver and the image provided, here is
                    <br className="hidden sm:block" /> a 6-step process that Metro Solver uses
                    to scale a customer's business.
                </p>
            </div>
            <div className='flex items-center gap-5 flex-col lg:flex-row'>
                <div className="card lg:w-1/2 sm:w-full shadow-xl">
                    <figure className="relative">
                        <img src='https://media.istockphoto.com/id/2181950699/photo/mature-woman-hosting-podcast-with-professional-microphone-and-headphones.jpg?s=612x612&w=0&k=20&c=gThhziZKtofpggAD5q7eEME131cLi3mW4pOo3szrp-c=' alt="Podcast" className='w-full rounded-2xl' />
                        <h2 className="card-title text-4xl text-white absolute bottom-2 left-3">Podcast Title</h2>
                        <p className="text-white absolute top-2 left-3 flex items-center gap-2 bg-gray-500 px-3 py-1 rounded-full">
                            <CiClock1 />
                            <span>30 Minute</span>
                        </p>
                        <p className="text-white absolute top-2 right-3 flex items-center gap-2 bg-gray-500 px-3 py-1 rounded-full">
                            <GrSchedule />
                            <span>Mar 11, 2025</span>
                        </p>
                        <p className="text-white absolute top-[50%] right-[50%] flex items-center gap-2 bg-gray-500 p-5 rounded-full">
                            <CiPlay1 />
                        </p>
                    </figure>
                </div>
                <div className="card lg:w-1/2 sm:w-full shadow-xl">
                    <figure className="relative">
                        <img src='https://media.istockphoto.com/id/2181950699/photo/mature-woman-hosting-podcast-with-professional-microphone-and-headphones.jpg?s=612x612&w=0&k=20&c=gThhziZKtofpggAD5q7eEME131cLi3mW4pOo3szrp-c=' alt="Podcast" className='w-full rounded-2xl' />
                        <h2 className="card-title text-4xl text-white absolute bottom-2 left-3">Podcast Title</h2>
                        <p className="text-white absolute top-2 left-3 flex items-center gap-2 bg-gray-500 px-3 py-1 rounded-full">
                            <CiClock1 />
                            <span>30 Minute</span>
                        </p>
                        <p className="text-white absolute top-2 right-3 flex items-center gap-2 bg-gray-500 px-3 py-1 rounded-full">
                            <GrSchedule />
                            <span>Mar 11, 2025</span>
                        </p>
                        <p className="text-white absolute top-[50%] right-[50%] flex items-center gap-2 bg-gray-500 p-5 rounded-full">
                            <CiPlay1 />
                        </p>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Podcast;