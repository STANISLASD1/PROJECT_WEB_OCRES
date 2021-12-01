import React from 'react';
import Footer from '../components/Footer';
import Navigation from "../components/Navigation";
// import Button from '@mui/material/button';

const About = () => {
    return (
        <div className="about">
            <Navigation />
            <h1>Bienvenue à Tigne </h1>
            <br />
            <p>Cette application va simplifier votre sejour à la montagne</p>
            <h1>[Mettre une video de fond stylé]</h1>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <Footer></Footer>
        </div>
    );
};

export default About;