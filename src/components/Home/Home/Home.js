import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import GetUpdate from '../GetUpdate/GetUpdate';
import Growth from '../Growth/Growth';
import Services from '../Services/Services';
import TripTips from '../TripTips/TripTips';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <TripTips></TripTips>
            <GetUpdate></GetUpdate>
            <Growth></Growth>
        </div>
    );
};

export default Home;