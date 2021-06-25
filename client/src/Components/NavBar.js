import React, {Component} from 'react';
import '../ComponentsStyle.css';
import {NavLink} from "react-router-dom";

export const NavBar = props => {
    return(
        <div className="topnav">
            <span><NavLink to="/">Main Page</NavLink></span>
            <span><NavLink to="/Contact">Contact</NavLink></span>
            <span><NavLink to="/Manager">Manager</NavLink></span>
        </div>
    )
};

NavBar.propTypes = {};