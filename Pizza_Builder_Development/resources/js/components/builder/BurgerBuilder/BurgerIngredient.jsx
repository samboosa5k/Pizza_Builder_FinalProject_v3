import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './burgeringredient.css';

const individualCount = 5;
const xLimit = 16;
const yLimit = 64;

class BurgerIngredient extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            currentIngredient: [],
        }
    }



    render() {
        let ingredient = null;

        switch ( this.props.type ) {
            case ( 'Crust' ):
                ingredient =
                    <div className="Topping topping__crust" style={{ zIndex: 100 + this.props.iteration, bottom: 64 * ( this.props.iteration + 1 ) + "px" }}>
                        <img src="/image/crust.svg" alt="" />
                    </div>;
                break;
            case ( 'Mozzarella' ):
                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 64 + ( 8 * ( this.props.iteration + 1 ) ) + "px" }}>
                        <img src="/image/oval.svg" alt="" />
                    </div>;
                break;
            case ( 'Pepperoni' ):
                //  Set initial placement values
                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 96 + ( 24 * ( this.props.iteration + 1 ) ) + "px" }}>
                        <img src="/image/pepperoni.svg" alt="" />
                    </div>;
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
