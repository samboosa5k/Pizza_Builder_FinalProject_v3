import React from "react"

function OrderSummary(props) {
    const {ingredientProps} = props;

    // let newPizza = 'Loading...';
    console.log(ingredientProps)

    
    //use for mapping through an object
    let newPizza = [];
    for (let key in ingredientProps) {
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
    }


    return (
        <div className="pizzaCard">
        <div>
            <h2>Your Order</h2>
                {newPizza}        
            </div>
        </div>
    )
}

export default OrderSummary