import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({dogs}){
    const links = dogs.map(d => (
        <li key={d.name}>
            <NavLink to={`/dogs/${d.name.toLowerCase()}`}>
            {d.name}
            </NavLink>
        </li>
    ));

    return (
        <nav>
            <NavLink exact to="/dogs">Home</NavLink>
            {links}
        </nav>
    );

};

export default Nav;