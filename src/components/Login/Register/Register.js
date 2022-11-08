import React from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../../assets/login.svg';

const Register = () => {
    return (
        <div className="sm:px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <img src={loginImage} alt="" />
                </div>
                <div className="lg:w-1/2">
                    <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100 mt-10">
                        <h1 className="text-3xl font-bold text-center">Register</h1>
                        <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-1 text-sm">
                                <label htmlFor="userName" className="block dark:text-gray-400">Name</label>
                                <input type="text" name="name" id="userName" placeholder="Enter Your Name" className="w-full px-4 py-3 rounded-md border-gray-500 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-400" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="imageUrl" className="block dark:text-gray-400">Photo URL</label>
                                <input type="text" name="photoURL" id="imageUrl" placeholder="Enter Your Image URL" className="w-full px-4 py-3 rounded-md border-gray-500 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-400" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="userEmail" className="block dark:text-gray-400">Email</label>
                                <input type="email" name="email" id="userEmail" placeholder="Enter Your Email" className="w-full px-4 py-3 rounded-md border-gray-500 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-400" />
                            </div>
                            <div className="space-y-1 text-sm">
                                <label htmlFor="password" className="block dark:text-gray-400">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter Your Password" className="w-full px-4 py-3 rounded-md border-gray-500 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-400" />
                            </div>
                            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-200 bg-indigo-600 hover:bg-indigo-500">Register</button>
                        </form>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                            <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <button aria-label="Log in with Google" className="p-3 rounded-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-current">
                                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                </svg>
                            </button>
                        </div>
                        <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
                            <Link rel="noopener noreferrer" to="/login" className="underline dark:text-gray-100"> Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;