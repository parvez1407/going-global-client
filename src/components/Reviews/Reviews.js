import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    console.log(reviews)
    useTitle('Review')

    useEffect(() => {
        fetch(`https://going-global-server.vercel.app/reviews?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('going-global-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to Delete your Review?')
        if (proceed) {
            fetch(`https://going-global-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('going-global-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('Data Successfully Deleted', { autoClose: 500 })
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }

    return (
        <div>
            {
                reviews.length === 0 ?
                    <h1 className='text-center font-bold text-4xl text-indigo-500'>No reviews were added</h1>
                    :
                    <div>
                        <h2 className='text-center text-2xl font-bold text-indigo-500 my-5'>You Gave {reviews?.length} Review</h2>
                        <div>
                            <div className="overflow-x-auto rounded-md" data-aos="fade-right"
                                data-aos-duration="2000">
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
                                                handleDelete={handleDelete}
                                            ></ReviewRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Reviews;