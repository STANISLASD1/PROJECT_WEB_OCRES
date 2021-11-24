import React from 'react';
import { NavLink } from "react-router-dom"; 
import Logo from './Logo';


const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/">
                <Logo />
            </NavLink>
            <NavLink exact to="/">
                Accueil
            </NavLink>
            <NavLink exact to="/a-propos"> 
               A Propos 
            </NavLink>
        </div>
    );
};

export default Navigation;