import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import Main from '../components/Main';

const Home = () => {
    return(
        <div className="home">
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

export default Home;