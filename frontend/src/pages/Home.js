import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HomeScreen from '../components/HomeScreen';

const Home = () => {
    return(
        <div className="home">
            <Navigation />
            <HomeScreen />
            <Footer />
        </div>
  

    );
};

export default Home;