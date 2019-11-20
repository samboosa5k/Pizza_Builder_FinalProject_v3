import React from "react";

import OrderSummary from "./checkout_components/OrderSummary.jsx";
import CheckoutExample from "./CheckoutExample.jsx";

function Checkout( props ) {
    // const { ingredientProps } = props;
    const { orderIngredients } = props;

    return (
        <div>
            <h1 className="splash-header">Checkout :D</h1>

            <div className="orderSummary">
                <OrderSummary orderIngredients={orderIngredients} />
                <CheckoutExample orderIngredients={orderIngredients} />
            </div>
        </div>
    )
}

export default Checkout;
