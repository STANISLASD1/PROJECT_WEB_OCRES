import React from 'react';
import { NavLink } from "react-router-dom"; 


const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName ="nav">
                Accueil
            </NavLink>
            <NavLink exact to="a-propos" activeClassName ="nav"> 
               À Propos 
            </NavLink>
            
        
        </div>
    );
};

export default Navigation;