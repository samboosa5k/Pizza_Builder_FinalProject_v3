import React from 'react';
import { NavLink } from 'react-router-dom';
import SiteName from './SiteName.jsx';
import MobileMenuButton from './MobileMenuButton.jsx';

const NavBar = ( props ) => {
    return (
        <nav className="navbar-customer">
            <SiteName />

            <div className="navbar-customer__item-container">
                <NavLink
                    className="navbar-customer__item"
                    activeClassName="navbar-customer__item--active"
                    to="/magic/builder">Build a Pizza</NavLink>

                <NavLink
                    className="navbar-customer__item"
                    activeClassName="navbar-customer__item--active"
                    to='/about'>About</NavLink>

                <NavLink
                    className="navbar-customer__item"
                    activeClassName="navbar-customer__item--active"
                    to='/order-lookup'>Order Lookup</NavLink>
            </div>

            <MobileMenuButton
                mobileMenuToggle={props.mobileMenuToggle} />
        </nav>
    )
}

export default NavBar;
