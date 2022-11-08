import React from 'react';
import banner from '../../../assets/banner.svg'

const Banner = () => {
    return (
        <section className=" dark:text-gray-400">
            <div className="container flex flex-col justify-center lg:p-6 sm:p-0 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="lg:text-6xl font-bold leading-none text-3xl">Ac mattis
                        <span className="text-indigo-500">senectus</span>erat pharetra
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold rounded bg-indigo-500 text-gray-200">Suspendisse</a>
                        <a rel="noopener noreferrer" href="/" className="px-8 py-3 text-lg font-semibold border rounded dark:border-indigo-300 text-indigo-300">Malesuada</a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={banner} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Banner;