import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({ service }) => {
    const { cost, description, rating, serviceImg, serviceName } = service;
    return (
        <div className="max-w-md rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <PhotoProvider>
                <PhotoView src={serviceImg}>
                    <img src={serviceImg} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                </PhotoView>
            </PhotoProvider>

            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-wide">{serviceName}</h2>
                    <p className="dark:text-gray-100 text-justify">{description}</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-700 dark:text-gray-200">Read more</button>
            </div>
        </div>
    );
};

export default Service;