import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ProjectName from './ProjectName.jsx';
import MenuLogo from './MenuLogo.jsx';
import CornerCredits from '../general_components/CornerCredits.jsx';

const NavBar = ( props ) => {
    const visibility = ( props.visibleOrNot ) ? "visible" : "hidden";

    return (
        <>
            <div className="menu-customer" style={{ visibility: visibility }}>

                <ProjectName />

                <div className="menu-customer__menu">

                    <NavLink
                        className="menu-customer__item"
                        activeClassName="menu-customer__item--active"
                        to="/home">Home</NavLink>

                    <NavLink
                        className="menu-customer__item"
                        activeClassName="menu-customer__item--active"
                        to="/magic/builder">Build a Pizza</NavLink>

                    <NavLink
                        className="menu-customer__item"
                        activeClassName="menu-customer__item--active"
                        to="/checkout">Checkout (test)</NavLink>

                    <NavLink
                        className="menu-customer__item"
                        activeClassName="menu-customer__item--active"
                        to='/about'>About</NavLink>

                    <NavLink
                        className="menu-customer__item"
                        activeClassName="menu-customer__item--active"
                        to='/contact'>Contact</NavLink>

                    <NavLink
                        className="menu-customer__item"
                        activeClassName="menu-customer__item--active"
                        to='/receipt'>Receipt</NavLink>

                </div>
                <div className="menu-customer__bottom">
                    <MenuLogo />
                    <CornerCredits />
                </div>
            </div>

        </>
    )
}

export default NavBar;
