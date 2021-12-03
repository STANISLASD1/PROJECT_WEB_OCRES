import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HomeScreen from '../components/HomeScreen';
//import Main from '../components/Main';

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