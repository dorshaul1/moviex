import './AppHeader.scss'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export const AppHeader = () => {
    return (
        <div className="app-header flex space-between align-center">
            <Link to="/"> <div className="logo flex  space-between align-center">
                <h1 >Moviex</h1>
            </div></Link>
            <ul className="flex clean-list">
                <NavLink exact activeClassName="active" to='/'> <li>Home</li></NavLink>
                <NavLink exact activeClassName="active" to='/explore'><li>Explore</li></NavLink>
                {/* <NavLink exact activeClassName="active" to='/contact'><li>Contact</li></NavLink> */}
            </ul>
        </div>
    );
}
