import './AppHeader.scss'
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import menu from '../../assets/images/icons/menu.png'
export const AppHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className="app-header flex space-between align-center">
            <Link to="/"> <div className="logo flex  space-between align-center">
                <h1 >Moviex</h1>
            </div></Link>
            {isMenuOpen && <div onClick={toggleMenu} className={`menu-screen ${isMenuOpen ? "menu-open" : ""}`}></div>}
            <img className="menu-btn" src={menu} onClick={toggleMenu} alt=""/>
            <nav className={isMenuOpen ? "menu-open" : ""}>
                <ul className="flex clean-list">
                    {/* <NavLink exact activeClassName="active" to='/profile'><li>Profile</li></NavLink> */}
                    <NavLink exact activeClassName="active" to='/explore'><li>Explore</li></NavLink>
                    <NavLink exact activeClassName="active" to='/'> <li>Home</li></NavLink>
                </ul>
            </nav>
        </div>
    );
}
