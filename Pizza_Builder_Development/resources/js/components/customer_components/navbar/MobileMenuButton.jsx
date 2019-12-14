import React from 'react';

const MobileMenuButton = ( props ) => {
    return (
        <a href="#" onClick={props.mobileMenuToggle} className="navbar-customer__mobilemenu-button">
            <div></div>
            <div></div>
            <div></div>
        </a>
    )
}

export default MobileMenuButton;
