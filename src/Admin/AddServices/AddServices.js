import React from 'react';

const AddServices = () => {
    return (
        <div >
            <div className='text-center mb-5'>
                <h3 className="text-gray-500 text-4xl font-bold">Add Services Information</h3>
            </div>

            <form className='w-2/3 mx-auto'>
                <input type="text" name="serviceName" id="" placeholder='Service Name' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600' />
                <textarea type="text" name="description" id="" placeholder='Service description' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' />
                <input type="text" name="rating" id="" placeholder='Raging' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' />
                <input type="text" name="cost" id="" placeholder='Service Cost' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' />
                <input type="text" name="serviceImg" id="" placeholder='Image url' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' />
                <input type="text" name="duration" id="" placeholder='Trip Duration' className='w-full border px-3 py-3 rounded-md border-indigo-300 outline-indigo-600 mt-3' />
                <div className='flex justify-center mt-3'>
                    <button type='submit' className='w-1/3 px-5 py-3 bg-indigo-500 text-gray-100 rounded-md'>Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddServices;