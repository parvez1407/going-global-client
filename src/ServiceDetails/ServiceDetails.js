import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { cost, description, rating, serviceImg, serviceName, duration, _id } = service;

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = service?.serviceName;
        const name = user?.displayName || 'Unregistered';
        const reviewDesc = form.reviewDesc.value;
        const userRating = form.userRating.value;
        const email = user?.email || 'Unregistered';
        const phone = form.phone.value;
        const date = form.date.value;


        const review = {
            service: _id,
            serviceName,
            name,
            reviewDesc,
            userRating,
            email,
            phone,
            date
        }

        fetch('https://going-global-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Thank you for your valuable feedback', { autoClose: 500 })
                    event.target.reset()
                }
            })
            .catch(err => console.error(err))

    }

    return (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-12'>
            <div className='my-10 grid lg:col-span-6'>

                <div className="max-w-full p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-md">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src={serviceImg} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <div className="flex items-center justify-between text-lg text-red-400">
                                <span>Rating: {rating}</span>
                                <span>Service Cost: ${cost}</span>
                                <span>Approximate {duration} days</span>
                            </div>
                        </div>
                        <div className="space-y-2">

                            <h3 className="text-xl font-semibold dark:text-indigo-300">{serviceName}</h3>

                            <p className="leading-snug dark:text-gray-300 text-justify">{description}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='my-10 grid lg:col-span-6'>
                <div className='mx-auto'>
                    {
                        !user?.uid ?
                            <>
                                <Link to='/login' className='text-xl font-semibold bg-gray-500 rounded-sm px-4 py-2 text-gray-100'>Login</Link>
                            </>
                            :
                            <>
                                <img src={user?.photoURL} alt={user?.displayName} className='rounded-full h-24 w-24' />
                                <h1 className='text-lg font-semibold'>{user?.displayName}</h1>
                            </>
                    }
                </div>
                {
                    user?.uid ?
                        <div>

                            <div className='text-center mb-5'>
                                <h3 className="text-gray-500 text-4xl font-bold">Please Give Your <br /> Valuable <span className='text-indigo-600'>Feedback</span></h3>
                            </div>

                            <form onSubmit={handleReview} className='w-2/3 mx-auto'>
                                <input defaultValue={serviceName} type="text" name="serviceName" id="" placeholder='Service Name' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600' required readOnly />
                                <input defaultValue={user?.displayName} type="text" name="name" id="" placeholder='Your Name' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' required readOnly />
                                <textarea type="text" name="reviewDesc" id="" placeholder='Your Valuable Feedback Description' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' required />
                                <input type="text" name="userRating" id="" placeholder='Rating' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' required />
                                <input defaultValue={user?.email} type="email" name="email" id="" placeholder='Your Email' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' required readOnly />
                                <input type="number" name="phone" id="" placeholder='Phone Number' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' required />
                                <input type="date" name="date" id="" placeholder='Image url' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' required />
                                <div className='flex justify-center mt-3'>
                                    <button type='submit' className='w-1/3 px-5 py-3 bg-indigo-500 text-gray-100 rounded-md'>Submit Review</button>
                                </div>
                            </form>

                        </div>
                        :
                        <>
                            <h1 className='text-center font-bold text-indigo-500 text-3xl'>Please Login to give review</h1>
                        </>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;