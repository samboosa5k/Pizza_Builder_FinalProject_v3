import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './customer_components/navbar/NavBar.jsx';
import MobileMenu from './customer_components/mobile_menu/MobileMenu.jsx';
import BurgerBuilder from './builder/BurgerBuilder/BurgerBuilder.jsx';
import FrontPage from './customer_components/FrontPage.jsx';
import Checkout from './customer_components/Checkout.jsx';
import Receipt from './customer_components/Receipt.jsx';
import ReceiptExample from './customer_components/ReceiptExample.jsx';
import About from './customer_components/About.jsx';
import OrderLookup from './customer_components/OrderLookup.jsx';

import ErrorBoundary from './ErrorBoundary.jsx';

const Home = ( { match } ) => {
    const [menuVisibility, setMenuVisibility] = useState( true );
    const [menuVisibilityMobile, setMenuVisibilityMobile] = useState( false );
    const [ingredientProps, setIngredientProps] = useState( {} );

    const [orderIngredients, setOrderIngredients] = useState( {} );
    const [orderId, setOrderId] = useState( 0 );

    const mobileMenuToggle = () => {
        setMenuVisibilityMobile( !menuVisibilityMobile );
    }

    return (
        <>
            <Router>

                <NavBar
                    mobileMenuToggle={mobileMenuToggle} />

                {
                    menuVisibilityMobile && <MobileMenu />
                }

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
                            setOrderId={setOrderId}
                        />
                    )} />

                    <Route exact path='/about' render={( routeProps ) => (
                        <About {...routeProps} />
                    )} />

                    <Route exact path='/order-lookup' render={( routeProps ) => (
                        <OrderLookup {...routeProps} />
                    )} />

                    <Route exact path='/receipt' render={( routeProps ) => (
                        <ErrorBoundary>
                            <Receipt {...routeProps} ingredientProps={ingredientProps} orderId={orderId} />
                        </ErrorBoundary>
                    )} />

                </div>

            </Router>
        </>
    )
}

export default Home;
