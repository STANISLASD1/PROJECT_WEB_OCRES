import React from 'react';
import HomeScreen from '../components/HomeScreen';
import Footer from '../components/Footer';
import Navigation from "../components/Navigation";
// import Button from '@mui/material/button';

const About = () => {
    return (
        <div className="about">
            <Navigation />
            <HomeScreen />
            <Footer />
        </div>
    );
};

export default About;