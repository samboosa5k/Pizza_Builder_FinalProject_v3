import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileMenu = () =>
{
    return (
        <nav className="menu-mobile">

            <NavLink
                className="menu-mobile__item"
                activeClassName="menu-mobile__item--active"
                to="/magic/builder">Build a Pizza</NavLink>

            <NavLink
                className="menu-mobile__item"
                activeClassName="menu-mobile__item--active"
                to='/about'>About</NavLink>

            <NavLink
                className="menu-mobile__item"
                activeClassName="menu-mobile__item--active"
                to='/order-lookup'>Order Lookup</NavLink>

        </nav>
        )
}

export default MobileMenu;
