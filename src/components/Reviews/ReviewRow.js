import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete }) => {
    const { date, email, _id, phone, reviewDesc, service, serviceName, userRating } = review;
    const [reviewService, setReviewService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/allServices/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data))
    }, [service])


    return (
        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 ">
            <td className="p-3">
                {
                    reviewService?.serviceImg &&
                    <img src={reviewService.serviceImg} alt="" className='w-28 rounded-md' />
                }
            </td>
            <td className="p-3">
                <p>{serviceName}</p>
            </td>
            <td className="p-3">
                <p>{reviewDesc}</p>
            </td>
            <td className="p-3">
                <p>{date}</p>
            </td>
            <td className="p-3">
                <p>{email}</p>
            </td>
            <td className="p-3">
                <p>{phone}</p>
            </td>
            <td className="p-3 text-right">
                <p>{userRating}</p>
            </td>
            <td className="p-3 text-right">
                <Link>Edit</Link>
            </td>
            <td className="p-3 text-right">
                <button onClick={() => handleDelete(_id)} className='px-3 py-1 bg-indigo-500 rounded-sm text-gray-100'>Delete</button>
            </td>
        </tr>
    );
};

export default ReviewRow;