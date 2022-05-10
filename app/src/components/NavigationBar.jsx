import React from 'react';
import {NavLink} from 'react-router-dom';

export default function NavigationBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? " active" : "")} end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => (isActive ? " active" : "")} end>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive}) => (isActive ? " active" : "")} end>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}