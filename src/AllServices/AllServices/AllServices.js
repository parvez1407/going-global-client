import React from 'react';
import Banner from '../../components/Home/Banner/Banner';
import GetUpdate from '../../components/Home/GetUpdate/GetUpdate';
import Growth from '../../components/Home/Growth/Growth';
import TripTips from '../../components/Home/TripTips/TripTips';

const AllServices = () => {
    return (
        <div>
            <Banner></Banner>
            <TripTips></TripTips>
            <GetUpdate></GetUpdate>
            <Growth></Growth>
        </div>
    );
};

export default AllServices;