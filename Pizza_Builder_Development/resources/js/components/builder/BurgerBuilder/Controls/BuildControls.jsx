import React from 'react';

import './buildcontrols.css';
import BuildControl from './BuildControl.jsx';

import ProjectName from '../../../customer_components/ProjectName';

const buildControls = ( props ) => {
    return (
        <div className="menu-customer__item BuildControls">
            <ProjectName />
            {/* <p>Current Price: <strong>{props.price.toFixed( 2 )}</strong></p> */}
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
        </div>
    )
};

export default buildControls;
