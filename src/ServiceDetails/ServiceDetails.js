import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    return (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-12'>
            <div className='my-10 grid lg:col-span-6'>

                <div className="max-w-full p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-md">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={service?.serviceImg} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center justify-between text-lg text-red-400">
                                <span>Rating: {service?.rating}</span>
                                <span>Service Cost: ${service?.cost}</span>
                                <span>Approximate {service?.duration} days</span>
                            </div>
                        </div>
                        <div className="space-y-2">

                            <h3 className="text-xl font-semibold dark:text-indigo-300">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>

                            <p className="leading-snug dark:text-gray-300 text-justify">{service?.description}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='my-10 grid lg:col-span-6'>
                <div className='mx-auto'>
                    {
                        !user?.uid ?
                            <>
                                <Link to='/login' className='text-xl font-semibold bg-slate-500 rounded-sm px-4 py-2'>Login</Link>
                            </>
                            :
                            <>
                                <img src={user?.photoURL} alt={user?.displayName} className='rounded-full h-24 w-24' />
                                <h1>{user?.displayName}</h1>
                            </>
                    }
                </div>
                {
                    user?.uid ?
                        <div>

                        </div>
                        :
                        <>
                            <h1 className='text-center'>Please Login to give review</h1>
                        </>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;