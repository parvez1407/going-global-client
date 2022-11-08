import React from 'react';
import companyLogo from '../../../assets/logo.png';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

                <div className="space-y-2 text-sm">
                    <p className="text-base font-bold tracking-wide text-indigo-300">
                        Contacts
                    </p>
                    <div className="flex">
                        <p className="mr-1 text-indigo-200">Phone:</p>
                        <a
                            href="tel:850-123-5021"
                            aria-label="Our phone"
                            title="Our phone"
                            className="transition-colors duration-300 text-indigo-400 hover:text-indigo-200"
                        >
                            850-123-5021
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-indigo-200">Email:</p>
                        <a
                            href="mailto:info@lorem.mail"
                            aria-label="Our email"
                            title="Our email"
                            className="transition-colors duration-300 text-indigo-400 hover:text-indigo-200"
                        >
                            info@gglobal.com
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-indigo-200">Address:</p>
                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Our address"
                            title="Our address"
                            className="transition-colors duration-300 text-indigo-400 hover:text-indigo-200"
                        >
                            312 Lovely Street, NY
                        </a>
                    </div>
                    <div className="flex">
                        <p className="mr-1 text-indigo-200">web:</p>
                        <a
                            href="https://www.google.com/maps"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Our address"
                            title="Our address"
                            className="transition-colors duration-300 text-indigo-400 hover:text-indigo-200 underline"
                        >
                            www.gglobal.com
                        </a>
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <a
                        href="/"
                        aria-label="Go home"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img className='w-1/12' src={companyLogo} alt="Going-Global" />
                        <span className="ml-2 text-3xl font-bold tracking-wide text-gray-100 uppercase">
                            oing-Global
                        </span>
                    </a>
                    <div className="mt-6 lg:max-w-sm">
                        <p className="text-sm text-gray-200">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                        <p className="mt-4 text-sm text-gray-200">
                            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>
                <div>
                    <span className="text-base font-bold tracking-wide text-indigo-200">
                        Connect
                    </span>
                    <div className="flex items-center mt-3 space-x-3">
                        <a
                            href="https://www.facebook.com/"
                            target='blank'
                            className="text-indigo-200 hover:text-gray-200 text-3xl transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <FaFacebookSquare />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target='black'
                            className="text-indigo-200 hover:text-gray-200 text-3xl transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <FaInstagramSquare />
                        </a>
                        <a
                            href="https://twitter.com/"
                            target='black'
                            className="text-gray-200 hover:text-indigo-300 text-3xl transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <FaTwitterSquare />
                        </a>
                    </div>
                </div>
            </div>
            <div className="pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-400 text-center">
                    © Copyright 2023 Going-Global. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;