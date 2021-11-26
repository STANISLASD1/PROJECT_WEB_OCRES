import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import Main from '../components/Main';

const Home = () => {
    return(
        <div className="home">
            <Navigation />
          
            <h1>cette page sera dédiée a notre dashboard </h1>
            <p>Nous y retrouverons toutes les API</p>
            <Main></Main>
            <Footer></Footer>
        </div>
  

    );
};

export default Home;