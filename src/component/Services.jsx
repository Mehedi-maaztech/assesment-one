import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-7xl text-white text-center'>Our Services</h2>
            <p className='text-center text-white'>Enter your personal real state sanctuary, where finding the <br /> ideal home is effortless and comfortable with out assistance.</p>

            <div className='flex flex-wrap justify-center w-full gap-6 py-10'> 
                {
                    services.map(service => <Service 
                        key={service.id} 
                        service={service} 
                        className="
                            flex-[1_1_100%] sm:flex-[1_1_100%] 
                            md:flex-[1_1_45%] lg:flex-[1_1_30%] 
                            max-w-full sm:max-w-full md:max-w-[50%] lg:max-w-[40%]
                        "
                        style={{ minWidth: 0 }}
                        ></Service>)
                }
                
            </div>

        </div>
    );
};

export default Services;