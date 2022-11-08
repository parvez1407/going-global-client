import React from 'react';
import AddServices from '../AddServices/AddServices';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <div className='grid gap-6 grid-cols-1 lg:grid-cols-12'>
            <div className='my-10 grid lg:col-span-2'>
                <Sidebar></Sidebar>
            </div>
            <div className='my-10 grid lg:col-span-10'>
                <AddServices></AddServices>
            </div>
        </div>
    );
};

export default Admin;
