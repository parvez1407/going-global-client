import React from 'react';
import { Outlet } from 'react-router-dom';
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
            <div>
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

export default Subsidiary;