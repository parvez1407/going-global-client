import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Shared/Footer/Footer';
import Header from '../../components/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className='bg-indigo-700'>
                <div className='max-w-screen-2xl mx-auto'>
                    <Header></Header>
                </div>
            </div>
            <div className='max-w-screen-2xl mx-auto mb-12'>
                <Outlet></Outlet>
            </div>
            <div className='bg-indigo-700'>
                <div className='max-w-screen-2xl mx-auto bg-indigo-700  py-16'>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Main;