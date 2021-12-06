import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Formulaire from '../components/Formulaire';

const Controle = () => {
    return(
        <div className="controle">
            <Navigation />
            <br/>
            <Formulaire />
            <br/>
            <Footer />
        </div>

    );
};

export default Controle;