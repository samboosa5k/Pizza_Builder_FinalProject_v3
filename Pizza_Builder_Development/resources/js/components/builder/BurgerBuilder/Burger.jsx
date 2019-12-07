import React,
{
    useState,
    useEffect
}

    from 'react';

// import "./Burger.css";
import BurgerIngredient from './BurgerIngredient.jsx';


const burger = ( props ) => {
    const {
        pizzaIngredientsOrder
    }

        = props;

    let transformerIngredients = '';

    if ( pizzaIngredientsOrder ) {
        transformerIngredients = pizzaIngredientsOrder.map( ( elem, index ) => {
            return <BurgerIngredient key={
                "ingredient_" + index
            }

                type={
                    elem
                }

                iteration={
                    index
                }

            />
        }

        )
    }

    //  console.log( 'Burger.jsx', pizzaIngredientsOrder );

    return ( <div className="Burger"> {
        transformerIngredients
    }

    </div> );
}

    ;

export default burger;
