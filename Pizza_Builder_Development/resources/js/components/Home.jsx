import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import history from './history'
import NavBar from './customer_components/NavBar.jsx';
import BurgerBuilder from './builder/BurgerBuilder/BurgerBuilder.jsx';
import FrontPage from './customer_components/FrontPage.jsx';
import Checkout from './customer_components/Checkout.jsx';
import CheckoutExample from './customer_components/CheckoutExample.jsx';
import Receipt from './customer_components/Receipt.jsx';
import About from './customer_components/About.jsx';
import Contact from './customer_components/Contact.jsx';

import ErrorBoundary from './ErrorBoundary.jsx';

const Home = ( { match } ) => {
    const [menuVisibility, setMenuVisibility] = useState( true );
    const [ingredientProps, setIngredientProps] = useState( {
        "pizza_1": {
            "pizza_id": 2,
            "pizza_ingredients": [3, 4, 4, 5]
        },
        "pizza_2": {
            "pizza_id": 3,
            "pizza_ingredients": [3, 4, 4, 5]
        }
    } );

    const [orderIngredients, setOrderIngredients] = useState( {} );

    return (
        <>
            <Router>

                <NavBar visibleOrNot={menuVisibility} />

                <div className='mainContent-customer'>

                    <Route exact path='/(/|home|magic|)/' render={( routeProps ) => (
                        <FrontPage {...routeProps} setMenuVisibility={setMenuVisibility} />
                    )} />

                    <Route exact path='/magic/builder' render={( routeProps ) => (
                        <BurgerBuilder {...routeProps}
                            submitOrderIngredients={setOrderIngredients}
                            setMenuVisibility={setMenuVisibility}
                        />
                    )} />

                    <Route exact path='/checkout' render={( routeProps ) => (
                        <Checkout {...routeProps}
                            ingredientProps={ingredientProps}
                            orderIngredients={orderIngredients}
                        />
                    )} />

                    <Route exact path='/about' render={( routeProps ) => (
                        <About {...routeProps} />
                    )} />

                    <Route exact path='/contact' render={( routeProps ) => (
                        <Contact {...routeProps} />
                    )} />

                    <Route exact path='/magic/receipt' render={( routeProps ) => (
                        <Receipt {...routeProps} ingredientProps={ingredientProps} />
                    )} />

                </div>

            </Router>
        </>
    )
}

export default Home;
