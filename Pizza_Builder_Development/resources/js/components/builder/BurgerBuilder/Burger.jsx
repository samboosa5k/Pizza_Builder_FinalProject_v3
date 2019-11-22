import React from 'react';

import "./Burger.css";
import BurgerIngredient from './BurgerIngredient.jsx';


const burger = ( props ) => {
    const { pizzaIngredientsOrder } = props;

    let transformerIngredients = '';

    if ( pizzaIngredientsOrder ) {
        transformerIngredients = pizzaIngredientsOrder.map( ( elem, index ) => {
            return <BurgerIngredient type={elem} iteration={index} />
        } )

    }

    console.log( transformerIngredients );

    return (
        <div className="Burger">

            {transformerIngredients}

        </div>
    );
};

export default burger;
