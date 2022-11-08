import React from 'react';
import Banner from '../Banner/Banner';
import GetUpdate from '../GetUpdate/GetUpdate';
import Growth from '../Growth/Growth';
import TripTips from '../TripTips/TripTips';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TripTips></TripTips>
            <GetUpdate></GetUpdate>
            <Growth></Growth>
        </div>
    );
};

export default Home;