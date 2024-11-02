import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Heading title={'Browse Coffees by Category'} subtitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste.'}></Heading>
        </div>
    );
};

export default Home;