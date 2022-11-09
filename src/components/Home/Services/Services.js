import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState();
    console.log(services);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mb-20'>
            <h1 className='text-center my-10 text-gray-400 text-5xl font-bold'>Explore All <span className='text-indigo-600'>Services</span></h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='flex justify-center mt-3'>
                <Link><button className='px-5 py-3 bg-indigo-500 text-gray-100 rounded-md'>Explore More</button></Link>
            </div>
        </div>
    );
};

export default Services;