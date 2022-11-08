import React from 'react';
import adminImage from '../../assets/admin.svg'

const Admin = () => {
    return (
        <div >
            <h1 className='text-center font-bold text-4xl text-indigo-400'>Welcome to Admin Panel</h1>
            <img src={adminImage} alt="Admin" className='mx-auto mt-5' />
        </div>
    );
};

export default Admin;
