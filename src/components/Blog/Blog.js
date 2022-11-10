import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <div className="dark:bg-gray-100 dark:text-gray-100 my-5">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 8, 2022</span>
                        <Link rel="noopener noreferrer" to="/" className="px-2 py-1 font-bold rounded dark:bg-indigo-500 dark:text-gray-900">Database</Link>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline">Ques. Difference between SQL and NoSQL</h2>
                        <p className="mt-2">SQL- <br /> 1. SQL database are primarily called RDBMS or Relational Database 2. Structured Query Language(SQL). 3. SQL database are table based databases 4. SQL databases have a predefined selena 5. Oracle, Postgres, MySql and MsSql <br /><br /> NoSql- <br /> 1. NoSql databases are primarily called as Non-relational or distributed databases 2. No declarative query language 3. NoSql databases can be document based key-value pairs, graph databases 4. NoSql databases use dynamic  5. mongoDB, Redis, Neo4J etc </p>
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
            <div className="dark:bg-gray-100 dark:text-gray-100 my-5">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-700">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 8, 2022</span>
                        <Link rel="noopener noreferrer" to="/" className="px-2 py-1 font-bold rounded dark:bg-indigo-500 dark:text-gray-900">JSON</Link>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline">Ques. What is JWT, and how does it work?</h2>
                        <p className="mt-2">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br /> <br /> JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. <br />

                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
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
            <div className="dark:bg-gray-100 dark:text-gray-100 my-5">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 8, 2022</span>
                        <Link rel="noopener noreferrer" to="/" className="px-2 py-1 font-bold rounded dark:bg-indigo-500 dark:text-gray-900">JS/Node.js</Link>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline">Ques. Difference between Node.JS and Javascript.</h2>
                        <p className="mt-2">--JavaScript <br /> 1. Javascript is a programming language that is used for writing scripts on the website. 2.Javascript can only be run in the browsers. 3.It is basically used on the client-side. 4.Javascript is capable enough to add HTML and play with the DOM. 5.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br /><br />--Node.js <br />NodeJS is a Javascript runtime environment. 2.We can run Javascript outside the browser with the help of NodeJS. 3.It is mostly used on the server-side. 4.Nodejs does not have capability to add HTML tags. 5.V8 is the Javascript engine inside of node.js that parses and runs Javascript. </p>
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
            <div className="dark:bg-gray-100 dark:text-gray-100 my-5">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-700">
                    <div className="flex items-center justify-between">
                        <span className="text-sm dark:text-gray-400">Nov 8, 2022</span>
                        <Link rel="noopener noreferrer" to="/" className="px-2 py-1 font-bold rounded dark:bg-indigo-500 dark:text-gray-900">Node.js</Link>
                    </div>
                    <div className="mt-3">
                        <h2 className="text-2xl font-bold hover:underline">Ques. How NodeJS handle multiple client requests?</h2>
                        <p className="mt-2">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
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