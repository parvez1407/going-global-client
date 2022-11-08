import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <div className="dark:bg-gray-100 dark:text-gray-100 my-5">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 8, 2022</span>
                        <Link rel="noopener noreferrer" to="/" className="px-2 py-1 font-bold rounded dark:bg-indigo-400 dark:text-gray-900">Javascript</Link>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline">Nos creasse pendere crescit angelos etc</h2>
                        <p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
                    </div>
                    <div className="flex  justify-end mt-4">

                        <div>
                            <div className="flex items-center">
                                <img src="https://pbs.twimg.com/profile_images/1348885195924017152/lrfCT2P__400x400.jpg" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                <span className="hover:underline dark:text-gray-400">Nahid Parvez</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;