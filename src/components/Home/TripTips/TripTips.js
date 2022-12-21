import React from 'react';

const TripTips = () => {
    return (
        <section className="p-4 lg:p-8 dark:bg-indigo-600 rounded-lg dark:text-gray-100">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row" data-aos="fade-right"
                    data-aos-duration="2000">
                    <img src="https://thegreenpagebd.com/wp-content/uploads/2020/09/St.-Martins-Island-is-feared-to-be-Coral-less-by-2045.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Enjoy The Nature</span>
                        <h3 className="text-3xl font-bold">Buy a small backpack/suitcase</h3>
                        <p className="my-6 dark:text-gray-400">By purchasing a small backpack (I like something around 35/40 liters), you will be forced to pack light and avoid carrying too much stuff. Humans have a natural tendency to want to fill space so if you pack light but have lots of extra room in your bag, you’ll end up going “well, I guess I can take more” and then regret it.</p>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse" data-aos="fade-left"
                    data-aos-duration="2000">
                    <img src="https://news.cgtn.com/news/78637a4e356b7a4e7949444e7941444d794d444f31457a6333566d54/img/03510f045e154357b9dfaae34c341cfe/03510f045e154357b9dfaae34c341cfe.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Enjoy The Nature</span>
                        <h3 className="text-3xl font-bold">Pack light</h3>
                        <p className="my-6 dark:text-gray-400">It’s OK to wear the same t-shirt a few days in a row. Take half the clothes you think you will need…you won’t need as much as you think. Write down a list of essentials, cut it in half, and then only pack that! Plus, since you bought a small backpack like I said, you won’t have much room for extra stuff anyways!</p>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row" data-aos="fade-right"
                    data-aos-duration="2000">
                    <img src="https://sgp1.digitaloceanspaces.com/cosmosgroup/news/3715808_best%20places%20to%20visit%20Maldives.png" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Enjoy The Nature</span>
                        <h3 className="text-3xl font-bold">Make extra copies of your passport and important documents.</h3>
                        <p className="my-6 dark:text-gray-400">Don’t forget to e-mail a copy to yourself too. You never know when you might need to have some sort of documentation with you and might not want to carry your original. Additionally, if your passport gets stolen having a copy will come in handy for your police report.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TripTips;