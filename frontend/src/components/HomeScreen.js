import React from 'react';

const HomeScreen = () => {
    return (
        <div className='hero-container'>
            <video src='../tigne_home.mp4' autoPlay loop muted />
            <h1>Votre compagnon</h1>
            <h2>Domaine de Tigne</h2>
            <br/>
            <p>By</p>
            <p>Pierre-Erwan FOUILLARD - Stanislas DUVAL</p>
        </div>
    );
};

export default HomeScreen;