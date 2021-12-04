import React from 'react';
import Footer from '../components/Footer';
import Navigation from "../components/Navigation";
import Main from '../components/Main';

const About = () => {
    return (
        <div className="about">
       <Navigation />

        <h1>Dashboard Tigne</h1>
        <p>Toutes les informations pour votre séjour à la montagne.</p>
        <br/>
        <br/>

        <Main></Main>
        <br/>
        <Footer></Footer>

        </div>
    );
};

export default About;