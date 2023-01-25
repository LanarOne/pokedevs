import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/pokemon'}>Pokemon</NavLink>
                </li>
                <li>
                    <NavLink to={'/pokegame'}>Game</NavLink>
                </li>
            </nav>
        </div>
    );
};

export default Nav;