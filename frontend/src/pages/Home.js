import React from 'react';
import Navigation from '../components/Navigation';
import medium from "../Img/Time2Ski.png";

const Home = () => {
    return(
        <div className="home">
            <Navigation />
            <img src={medium} className="App-logo" alt="logo" />
            <h1>cette page sera dédiée a notre dashboard </h1>
            <p>Nous y retrouverons toutes les API</p>
        </div>
    );
};

export default Home;