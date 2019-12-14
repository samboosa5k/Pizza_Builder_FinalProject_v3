import React, {useState} from 'react';

import IngredientCategory from './IngredientCategory.jsx';
import BuildControl from './BuildControl.jsx';

const buildControls = ( props ) => {
    const [ingredientCategory, setIngredientCategory] = useState('Cheese');
    const visibleLeft = ( props.mobileVisible === true ) ? 0 : "-100%";

    return (
        /*
            1. Ingredient category selector
                - The ingredientsList/BuildControl map below can have a simple IF-condition
                - If the ingredient category matches what is in state, return it
            2. List of ingredienst
        */
        <div className="menu-customer__item BuildControls" style={{ left: visibleLeft }}>
            <IngredientCategory
                ingredientsList={props.ingredientsList}
                setIngredientCategory={setIngredientCategory}
            />

            {
                props.ingredientsList.map( ctrl => {
                    if(ctrl.category === ingredientCategory){
                        return <BuildControl
                                    key={ctrl.label}
                                    label={ctrl.label}
                                    price={ctrl.unit_price}
                                    added={() => props.ingredientAdded( ctrl.type, ctrl.id )}
                                    removed={() => props.ingredientRemoved( ctrl.type, ctrl.id )}
                                    disabled={props.disabled[ctrl.type]} />
                    }
                } )
            }
        </div >
    )
};

export default buildControls;
