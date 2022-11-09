import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({})
    console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
            <h2 className='text-center text-2xl font-bold text-indigo-500 my-5'>You Have {reviews?.length} Reviews</h2>
            <div>
                <div className="overflow-x-auto rounded-md">
                    <table className="min-w-full text-md">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-700">
                            <tr className="text-center text-gray-300 text-md">
                                <th className="p-3">Service Image</th>
                                <th className="p-3">Service Name</th>
                                <th className="p-3">Review Content</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Phone</th>
                                <th className="p-3 text-right">Rating</th>
                                <th className="p-3">Action</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center text-gray-300'>
                            {
                                reviews?.map(review => <ReviewRow
                                    key={review._id}
                                    review={review}
                                ></ReviewRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Reviews;