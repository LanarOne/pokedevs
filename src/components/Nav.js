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
                <li>
                    <NavLink to={'/test'}>test 1</NavLink>
                </li>
                <li>
                    <NavLink to={'/test2'}>test 2</NavLink>
                </li>
                <li>
                    <NavLink to={'/test3'}>test 3</NavLink>
                </li>
                <li>
                    <NavLink to={'/test4'}>test 4</NavLink>
                </li>
            </nav>
        </div>
    );
};

export default Nav;