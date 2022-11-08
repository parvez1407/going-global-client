import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../Admin/Sidebar/Sidebar';
import Footer from '../../components/Shared/Footer/Footer';
import Header from '../../components/Shared/Header/Header';

const Subsidiary = () => {
    return (
        <div>
            <div className='bg-indigo-700'>
                <div className='max-w-screen-2xl mx-auto'>
                    <Header></Header>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 lg:grid-cols-12'>
                <div className='my-10 grid lg:col-span-2'>
                    <Sidebar></Sidebar>
                </div>
                <div className='my-10 grid lg:col-span-10'>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className='bg-indigo-700'>
                <div className='max-w-screen-2xl mx-auto bg-indigo-700  py-16'>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Subsidiary;