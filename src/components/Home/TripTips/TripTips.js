import React from 'react';

const TripTips = () => {
    return (
        <section className="p-4 lg:p-8 dark:bg-indigo-600 rounded-lg dark:text-gray-100">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://thegreenpagebd.com/wp-content/uploads/2020/09/St.-Martins-Island-is-feared-to-be-Coral-less-by-2045.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                        <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                        <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                        <button type="button" className="self-start">Action</button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://news.cgtn.com/news/78637a4e356b7a4e7949444e7941444d794d444f31457a6333566d54/img/03510f045e154357b9dfaae34c341cfe/03510f045e154357b9dfaae34c341cfe.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                        <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                        <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                        <button type="button" className="self-start">Action</button>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/3715808_best%20places%20to%20visit%20Maldives.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                        <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                        <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                        <button type="button" className="self-start">Action</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TripTips;