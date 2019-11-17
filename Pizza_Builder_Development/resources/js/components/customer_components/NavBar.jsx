import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = ( { match } ) => {
    return (
        <>
            <div className="menu-customer">
                <ul className="menu-customer__block">

                    <li id="home" className="menu-customer__item">
                        <NavLink activeStyle={{ color: "red" }} to="/home">Home</NavLink>
                    </li>

                    <li id="builder" className="menu-customer__item">
                        <NavLink activeStyle={{ color: "red" }} to="/magic/builder">Build a Pizza</NavLink>
                    </li>

                    <li id="about" className="menu-customer__item">
                        <NavLink activeStyle={{ color: "red" }} to='/magic/about'>About</NavLink>
                    </li>
                    <li id="contact" className="menu-customer__item">
                        <NavLink activeStyle={{ color: "red" }} to='/magic/contact'>Contact</NavLink>
                    </li>

                </ul>
            </div>

        </>
    )
}

export default NavBar;
