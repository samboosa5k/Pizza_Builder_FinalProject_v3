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
                console.log( 'Burgeringredient.jsx', this.props.type );

                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 64 + ( 8 * ( this.props.iteration + 1 ) ) + "px" }}>
                        <img src="/image/mozzarella.svg" alt="" />
                    </div>;
                break;
            case ( 'Cheddar' ):
                console.log( 'Burgeringredient.jsx', this.props.type );

                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 64 + ( 8 * ( this.props.iteration + 1 ) ) + "px" }}>
                        <img src="/image/cheddar.svg" alt="" />
                    </div>;
                break;
            case ( 'Bacon' ):
                console.log( 'Burgeringredient.jsx', this.props.type );

                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 96 + ( 24 * ( this.props.iteration + 1 ) ) + "px" }}>
                        <img src="/image/bacon.svg" alt="" />
                    </div>;
                break;
            case ( 'Basil' ):
                console.log( 'Burgeringredient.jsx', this.props.type );

                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 96 + ( 24 * ( this.props.iteration + 1 ) ) + "px" }}>
                        <img src="/image/basil.svg" alt="" />
                    </div>;
                break;
            case ( 'Olives' ):
                console.log( 'Burgeringredient.jsx', this.props.type );

                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 96 + ( 24 * ( this.props.iteration + 1 ) ) + "px" }}>
                        <img src="/image/olives.svg" alt="" />
                    </div>;
                break;
            case ( 'Mushroom' ):
                console.log( 'Burgeringredient.jsx', this.props.type );

                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 96 + ( 24 * ( this.props.iteration + 1 ) ) + "px" }}>
                        <img src="/image/mushroom.svg" alt="" />
                    </div>;
            case ( 'Corn' ):
                console.log( 'Burgeringredient.jsx', this.props.type );

                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 96 + ( 24 * ( this.props.iteration + 1 ) ) + "px" }}>
                        <img src="/image/corn.svg" alt="" />
                    </div>;
                break;
            case ( 'Feta' ):
                console.log( 'Burgeringredient.jsx', this.props.type );

                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 96 + ( 24 * ( this.props.iteration + 1 ) ) + "px" }}>
                        <img src="/image/feta.svg" alt="" />
                    </div>;
                break;
            case ( 'Chili' ):
                console.log( 'Burgeringredient.jsx', this.props.type );

                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 96 + ( 24 * ( this.props.iteration + 1 ) ) + "px" }}>
                        <img src="/image/chili.svg" alt="" />
                    </div>;
                break;
            case ( 'Pepperoni' ):
                console.log( 'Burgeringredient.jsx', this.props.type );

                ingredient =
                    <div className="Topping" style={{ zIndex: 100 + this.props.iteration, bottom: 96 + ( 24 * ( this.props.iteration + 1 ) ) + "px" }}>
                        <img src="/image/pepperoni.svg" alt="" />
                    </div>;
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
