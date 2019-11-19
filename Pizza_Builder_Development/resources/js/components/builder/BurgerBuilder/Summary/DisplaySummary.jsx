import React from 'react';

// import Aux from '../../../hoc/Aux.jsx';
import Button from './Button.jsx';
import './button.css';

const orderSummary = ( props ) => {
    const ingredientSummary = Object.keys( props.ingredients )
        .map( igKey => {
            if ( props.ingredients[igKey] >= 1 ) {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>
                );
            }
        } );


    return (
        <div className="pizza-builder__ordersummary">
            <h3 className="pizza-builder__ordersummary-item">Your Pizza</h3>

            <ul className="pizza-builder__ordersummary-item nostyle-links">
                {ingredientSummary}
            </ul>
            <p className="pizza-builder__ordersummary-item"><strong>Total Price: {props.price.toFixed( 2 )}</strong></p>


            {/* <Button className="Danger" clicked={props.purchaseCancelled}>CANCEL</Button> */}
            <Button className="OrderButton" clicked={props.purchaseContinued}>Checkout!</Button>
        </div>
    )
};

export default orderSummary;
