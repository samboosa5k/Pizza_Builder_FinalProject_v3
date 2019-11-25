import React, { Component } from 'react';

import NewAux from '../hoc/NewAux.jsx';
import Burger from './Burger.jsx';
import BuildControls from './Controls/BuildControls.jsx';
import Modal from './Summary/Modal.jsx';
import DisplaySummary from './Summary/DisplaySummary.jsx';

import ErrorBoundary from '../../ErrorBoundary.jsx';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.4
}

class BurgerBuilder extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            ingredients: {},
            ingredientsList: [],
            ingredientsIds: [],
            pizzaIngredientsOrder: ['Crust'],
            orderSummary: [],
            totalPrice: 4, //base price
            purchasable: false,
            purchasing: true
        }
        this.updatePurchaseState = this.updatePurchaseState.bind( this );
        this.addIngredientHandler = this.addIngredientHandler.bind( this );
        this.removeIngredientHandler = this.removeIngredientHandler.bind( this );
        this.purchaseHandler = this.purchaseHandler.bind( this );
        this.purchaseCancelHandler = this.purchaseCancelHandler.bind( this );
        this.purchaseContinueHandler = this.purchaseContinueHandler.bind( this );
    }

    componentDidMount() {
        const doFetch = async () => {
            const response = await fetch( '/api/ingredients' );
            const data = await response.json();

            let api_ingredientPrices = '';
            const api_ingredientNames = {};

            const interface_ingredients = [];

            for ( let key in data ) {
                //  (Below) dynamically fill state with list of ingredient prices
                api_ingredientPrices = data[key].unit_price;
                //  (Below) dynamically fill state with list of ingredients
                api_ingredientNames[data[key].name] = 0;


                //  (Below) dynamically fill state with ingredient->ingredient-type key->value pairs
                interface_ingredients.push( {
                    label: data[key].name,
                    type: data[key].name,
                    id: data[key].id
                } );
            }
            this.setState(
                {
                    /*
                        Dear Jayne, I apologize for the mess...
                        We might have to refactor this later
                    */
                    ingredients: api_ingredientNames,
                    ingredientsList: interface_ingredients,
                    INGREDIENT_PRICES: api_ingredientPrices
                } );
        }
        doFetch();
        this.props.setMenuVisibility( false );
    }

    updatePurchaseState( ingredients ) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey]
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    }

    addIngredientHandler( type, id ) {
        // Control count of added ingredients
        const oldCount = this.state.ingredients[type];

        // Update the count
        const updatedCount = oldCount + 1;  // Update the count
        const updatedIngredients = {
            ...this.state.ingredients
        };

        // Update the currently chosen ingredients
        updatedIngredients[type] = updatedCount;

        const priceAddition = this.state.INGREDIENT_PRICES;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        //  Update order summary
        const ingredientIdArray = [...this.state.ingredientsIds];
        ingredientIdArray.push( id );

        // Update to improve adding & removing ingredients
        const pizzaIngredientsOrderArray = [...this.state.pizzaIngredientsOrder];
        pizzaIngredientsOrderArray.push( type );

        //  This is where the state is set
        this.setState(
            {
                totalPrice: newPrice,
                ingredients: updatedIngredients,
                ingredientsIds: ingredientIdArray,
                pizzaIngredientsOrder: pizzaIngredientsOrderArray
            } );

        this.updatePurchaseState( updatedIngredients );
    }

    removeIngredientHandler( type, id ) {
        //  Control count of removed ingredients
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }

        //  Do subtraction and change count
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        //  Update array of ingredient id's, used for receipt
        const ingredientIdArray = [...this.state.ingredientsIds];
        ingredientIdArray.splice( ingredientIdArray.indexOf( id ), 1 );

        //  Calculate price deduction
        const priceDeduction = this.state.INGREDIENT_PRICES;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        //  UPdate ordersummary
        const pizzaIngredientsOrderArray = [...this.state.pizzaIngredientsOrder];
        pizzaIngredientsOrderArray.splice( pizzaIngredientsOrderArray.indexOf( type ), 1 );

        //  This is where the state is set
        this.setState(
            {
                totalPrice: newPrice,
                ingredients: updatedIngredients,
                ingredientsIds: ingredientIdArray,
                pizzaIngredientsOrder: pizzaIngredientsOrderArray
            } );

        this.updatePurchaseState( updatedIngredients );
    }

    purchaseHandler() {
        this.setState( { purchasing: true } );
    }

    purchaseCancelHandler() {
        this.setState( { purchasing: false } );
    }

    purchaseContinueHandler( collectedSummary, price ) {
        /*
            Collecting order summary after clicking on ORDER
            Formatting is important because this will go to checkout form
        */

        this.props.submitOrderIngredients( {
            "item": {
                "type": "pizza",
                "ingredient_names": collectedSummary,
                "ingredient_ids": [...this.state.ingredientsIds],
                "price": price
            }
        } );

        this.props.setMenuVisibility( true );
        this.props.history.push( '/checkout' );
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        };

        return (
            <ErrorBoundary>
                <NewAux>

                    <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                        <DisplaySummary
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            purchaseCancelled={this.purchaseCancelHandler}
                            purchaseContinued={this.purchaseContinueHandler}
                        />
                    </Modal>

                    <Burger
                        pizzaIngredientsOrder={this.state.pizzaIngredientsOrder}
                    />

                    <BuildControls
                        ingredientsList={this.state.ingredientsList}
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice}
                    />

                </NewAux>
            </ErrorBoundary>
        )
    }
}

export default BurgerBuilder;
