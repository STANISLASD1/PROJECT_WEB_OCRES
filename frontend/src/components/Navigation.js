import React from 'react';
import { NavLink } from "react-router-dom"; 
import Logo from './Logo';


const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName = "nav1">
                <Logo />
            </NavLink>
            <NavLink exact to="/" activeClassName = "nav1"> 
               Accueil 
            </NavLink>
            <NavLink exact to="/dashboard" activeClassName = "nav1" >
                Dashboard
            </NavLink>
            <NavLink exact to="/controle" activeClassName = "nav1" >
                Controle API
            </NavLink>
        </div>
    );
};

export default Navigation;