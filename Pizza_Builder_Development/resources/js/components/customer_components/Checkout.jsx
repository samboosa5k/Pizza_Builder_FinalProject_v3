import React from "react"

import Header from "./checkout_components/Header.jsx"
import OrderSummary from "./checkout_components/OrderSummary.jsx"
import CheckoutExample from "./CheckoutExample.jsx"

function Checkout(props) {
    const {ingredientProps} = props;

    return (
        <div>
            <Header />
            <div className="orderSummary">
            <OrderSummary ingredientProps={ingredientProps}/>
            <CheckoutExample />
            </div>
        </div>
    )
}

export default Checkout
