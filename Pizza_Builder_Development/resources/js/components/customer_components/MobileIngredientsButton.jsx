import React from 'react';
import { NavLink } from 'react-router-dom';

const MobileIngredientsButton = ( props ) => {
    return (
        <a href="#">
            <p className="mobileIngredients-button" onClick={props.setMobileMenuVisible}>Ingredients</p>
        </a>
    );
}

export default MobileIngredientsButton;
