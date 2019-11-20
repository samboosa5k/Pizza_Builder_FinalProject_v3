import React from "react"

function OrderSummary( props ) {
    const { orderIngredients } = props;

    // let newPizza = 'Loading...';
    console.log( orderIngredients.item.ingredient_names )

    //use for mapping through an object
    let newPizza = orderIngredients.item.ingredient_names.map( ( elem, index ) => {
        return <li key={index}>{elem[0]}: {elem[1]}</li>
    } );

    /* for (let key in ingredientProps) {
        let pizza = ingredientProps[key];
        newPizza.push(
            <div>
                <h3>{pizza.pizza_id}</h3>
                <ul>
                    <li>{pizza.pizza_ingredients[0]}</li>
                    <li>{pizza.pizza_ingredients[1]}</li>
                    <li>{pizza.pizza_ingredients[2]}</li>
                </ul>
            </div>
        )
    } */

    return (
        <div className="pizzaCard">
            <div>
                <h2>Your Pizza:</h2>
                {newPizza}
            </div>
        </div>
    )
}

export default OrderSummary
