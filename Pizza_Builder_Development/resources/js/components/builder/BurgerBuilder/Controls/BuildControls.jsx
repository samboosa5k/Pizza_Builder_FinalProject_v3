import React from 'react';

// import './buildcontrols.css';
import BuildControl from './BuildControl.jsx';

import ProjectName from '../../../customer_components/ProjectName';

const buildControls = ( props ) => {
    const visibleLeft = ( props.mobileVisible === true ) ? 0 : "-100%";
    return (
        <div className="menu-customer__item BuildControls" style={{ left: visibleLeft }}>
            <ProjectName />
            {
                props.ingredientsList.map( ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        price={ctrl.unit_price}
                        added={() => props.ingredientAdded( ctrl.type, ctrl.id )}
                        removed={() => props.ingredientRemoved( ctrl.type, ctrl.id )}
                        disabled={props.disabled[ctrl.type]} />
                ) )
            }
        </div >
    )
};

export default buildControls;
