import React from 'react';

const MobileIngredientsButton = ( props ) => {
    return (
        <a href="#" className="button-general button-mobileIngredients">
            <p onClick={props.setMobileMenuVisible}>Ingredients</p>
        </a>
    );
}

export default MobileIngredientsButton;
