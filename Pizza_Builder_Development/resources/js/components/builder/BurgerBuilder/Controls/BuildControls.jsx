import React from 'react';

import './buildcontrols.css';
import BuildControl from './BuildControl.jsx';

import MenuLogo from '../../../customer_components/MenuLogo.jsx';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },

];

const buildControls = ( props ) => {
    return (
        <div className="menu-customer__item BuildControls">
            <MenuLogo />
            <p>Current Price: <strong>{props.price.toFixed( 2 )}</strong></p>
            {
                props.ingredientsList.map( ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        added={() => props.ingredientAdded( ctrl.type, ctrl.id )}
                        removed={() => props.ingredientRemoved( ctrl.type, ctrl.id )}
                        disabled={props.disabled[ctrl.type]} />
                ) )
            }
            {/* <button className="OrderButton"
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button> */}
        </div>
    )
};

export default buildControls;
