import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './burgeringredient.css';

const individualCount = 5;
const xLimit = 64;

class BurgerIngredient extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            individualStateArray: []
        }
    }

    render() {
        let ingredient = null;
        let individualArray = [];

        switch ( this.props.type ) {
            case ( 'Crust' ):
                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 64 * ( this.props.iteration + 1 ) + "px" }}>
                        <img src="/image/crust.svg" alt="" />
                    </div>;
                break;
            case ( 'Mozzarella' ):
                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 64 * ( this.props.iteration + 1 ) + "px" }}>
                        <img src="/image/oval.svg" alt="" />
                    </div>;
                break;
            case ( 'Pepperoni' ):

                //  Randomly generate position
                for ( let i = 0; i < individualCount; i++ ) {

                    individualArray.push( <img src="/image/pepperoni.svg" style={{
                        transform: `translateX( ${Math.floor( ( Math.random() * xLimit ) + 1 )}px )`
                    }} alt="" /> );

                }

                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 64 * ( this.props.iteration + 1 ) + "px" }}>
                        {
                            individualArray
                        }
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
