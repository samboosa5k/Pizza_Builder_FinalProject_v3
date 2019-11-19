import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( { match } ) => {
    return (
        <>

            <div className="navBar-admin">
                <ul>

                    <li id="home" className="menu-admin__item">
                        <Link to="/magic">Home</Link>
                    </li>

                    <li id="builder" className="menu-admin__item">
                        <Link to="/magic/builder">Builder</Link>
                    </li>

                    <li id="checkout" className="menu-admin__item">
                        <Link to='/magic/checkout'>Checkout</Link>
                    </li>

                    <li id="receipt" className="menu-admin__item">
                        <Link to='/magic/receipt'>Receipt</Link>
                    </li>

                    <li id="login" className="menu-admin__item">
                        <a href="/login">Login</a>
                    </li>

                </ul>
            </div>

        </>
    )
}

export default NavBar;
