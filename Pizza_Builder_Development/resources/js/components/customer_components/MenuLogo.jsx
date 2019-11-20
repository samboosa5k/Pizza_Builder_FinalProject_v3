import React from 'react';
import { Link } from 'react-router-dom';

const MenuLogo = ( props ) => {
    return (
        <div className="menu-customer__top">
            <Link to='/' >
                <img src="/image/pizza_logo.svg" className="menu-customer__logo" alt="jaj-team-logo" />
                <p className="nostyle-links">Clickity!</p>
            </Link>
        </div>
    )
}

export default MenuLogo;
