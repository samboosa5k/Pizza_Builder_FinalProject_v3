import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ( { match } ) => {
    return (
        <>
            <div className="menu-customer">
                <ul className="menu-customer__block">

                    <li id="home" className="menu-customer__item">
                        <NavLink
                            activeClassName="menu-customer__item--active"
                            to="/home">Home</NavLink>
                    </li>

                    <li id="builder" className="menu-customer__item">
                        <NavLink
                            activeClassName="menu-customer__item--active"
                            to="/magic/builder">Build a Pizza</NavLink>
                    </li>

                    <li id="about" className="menu-customer__item">
                        <NavLink
                            activeClassName="menu-customer__item--active"
                            to='/magic/about'>About</NavLink>
                    </li>
                    <li id="contact" className="menu-customer__item">
                        <NavLink
                            activeClassName="menu-customer__item--active"
                            to='/magic/contact'>Contact</NavLink>
                    </li>

                </ul>
            </div>

        </>
    )
}

export default NavBar;
