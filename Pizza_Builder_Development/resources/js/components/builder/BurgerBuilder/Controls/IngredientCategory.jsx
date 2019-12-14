import React,{useState, useEffect} from 'react';

/*
    Ingredient Category selector:
    - Added on 14-12-2019
    - Post-bootcamp feature
*/

const IngredientCategory = ( props ) => {
    let categoryArray = [];

    const handleCategoryChange = ( e ) => {
        console.log( 'IngredientCategory.jsx', e.target.value );
        props.setIngredientCategory( e.target.value );
    }

    return (
        <div className="menu-customer__category-selector">
            <h4>Topping Category:</h4>
            <select onChange={(e)=>handleCategoryChange(e)}>
            {
                props.ingredientsList.map( elem => {
                    if ( !categoryArray.includes( elem.category ) ) {
                        categoryArray.push( elem.category );
                        return <option key={"option" + elem.label} value={elem.category}>{elem.category}</option>
                    }
                } )
            }
            </select>
        </div>
    )
}

export default IngredientCategory;
