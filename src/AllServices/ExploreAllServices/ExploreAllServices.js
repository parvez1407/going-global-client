import React, { useContext, useEffect, useState } from 'react';
import Service from '../../components/Home/Service/Service';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Loader from '../../Loader/Loader';

const ExploreAllServices = () => {
    const { loading, setLoading } = useContext(AuthContext);
    const [services, setServices] = useState();
    console.log(services);
    useEffect(() => {
        fetch('https://going-global-server.vercel.app/allServices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [setLoading])
    return (
        <div className='mb-20'>
            <h1 className='text-center font-bold my-10 text-gray-400 text-5xl bg-indigo-500 py-3 rounded-md'>Explore All <span className='text-gray-100'>Services</span></h1>
            <div>
                {
                    loading ?
                        <Loader></Loader>
                        :
                        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                            {
                                services?.map(service => <Service
                                    key={service._id}
                                    service={service}
                                ></Service>)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default ExploreAllServices;