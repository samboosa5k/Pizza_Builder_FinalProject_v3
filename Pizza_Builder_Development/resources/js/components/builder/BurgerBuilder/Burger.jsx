import React from 'react';

import "./Burger.css";
import BurgerIngredient from './BurgerIngredient.jsx';


const burger = ( props ) => {
    const { pizzaIngredientsOrder } = props;

    /* let transformerIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce( ( arr, el ) => {
            return arr.concat( el )
        }, [] );

        if ( transformerIngredients.length === 0 ) {
        transformerIngredients = <p>Please start adding ingredients</p>
    } */

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
