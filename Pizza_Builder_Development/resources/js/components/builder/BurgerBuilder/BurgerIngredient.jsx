import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './burgeringredient.css';

class BurgerIngredient extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        let ingredient = null;

        console.log( this.props.type );

        switch ( this.props.type ) {
            case ( 'Crust' ):
                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 64 * ( this.props.iteration + 1 ) + "px" }}>
                        <img src="/image/oval.svg" alt="" />
                    </div>;
                break;
            case ( 'Mozzarella' ):
                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 64 * ( this.props.iteration + 1 ) + "px" }}>
                        <img src="/image/oval.svg" alt="" />
                    </div>;
                break;
            case ( 'cheese' ):
                ingredient = <div className="Cheese"></div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className="Bacon"></div>;
                break;
            case ( 'salad' ):
                ingredient = <div className="Salad"></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;

    }

}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
