import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateReviews = () => {
    const storedReview = useLoaderData();
    const [review, setReview] = useState(storedReview);


    const handleEditReview = event => {
        event.preventDefault()
        // console.log(review);
        fetch(`http://localhost:5000/reviews/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Data Updated Successfully', { autoClose: 500 })
                }
            })
    }

    const handleOnChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
    }


    return (
        <div>

            <div className='text-center mb-5'>
                <h3 className="text-gray-500 text-4xl font-bold">Please <span className='text-indigo-600'>Update</span> Your <br /> Valuable <span className='text-indigo-500'>Feedback</span></h3>
            </div>

            <form onSubmit={handleEditReview} className='w-2/3 mx-auto'>
                <input onChange={handleOnChange} defaultValue={storedReview.serviceName} type="text" name="serviceName" id="" placeholder='Service Name' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600' required readOnly />
                <input onChange={handleOnChange} defaultValue={storedReview?.name} type="text" name="name" id="" placeholder='Your Name' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' required readOnly />
                <textarea onChange={handleOnChange} defaultValue={storedReview.reviewDesc} type="text" name="reviewDesc" id="" placeholder='Your Valuable Feedback Description' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' required />
                <input onChange={handleOnChange} defaultValue={storedReview.userRating} type="text" name="userRating" id="" placeholder='Rating' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' required />
                <input onChange={handleOnChange} defaultValue={storedReview?.email} type="email" name="email" id="" placeholder='Your Email' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' required readOnly />
                <input onChange={handleOnChange} defaultValue={storedReview.phone} type="number" name="phone" id="" placeholder='Phone Number' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' required />
                <input onChange={handleOnChange} defaultValue={storedReview.date} type="date" name="date" id="" placeholder='Image url' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' required />
                <div className='flex justify-center mt-3'>
                    <button type='submit' className='w-1/3 px-5 py-3 bg-indigo-500 text-gray-100 rounded-md'>Update</button>
                </div>
            </form>

        </div>
    );
};

export default UpdateReviews;