import React from 'react';
import { NavLink } from "react-router-dom"; 
import Logo from './Logo';


const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/">
                <Logo />
            </NavLink>
            <NavLink exact to="/" activeClassName = "nav1" >
                Accueil
            </NavLink>
            <NavLink exact to="/a-propos" activeClassName = "nav1"> 
               A Propos 
            </NavLink>
        </div>
    );
};

export default Navigation;