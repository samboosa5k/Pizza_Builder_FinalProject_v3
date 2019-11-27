import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const Splash = ( props ) => {
    return (
        <>
            <Redirect to='/home' />
            <h1 className="splash-header">It's pizza time, baby!</h1>
            <div className="info-card">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h2>This is the home page</h2>
                    <NavLink
                        className="menu-customer__item"
                        activeClassName="menu-customer__item--active"
                        to="/magic/builder">Build a Pizza</NavLink>
                </div>
            </div>
        </>
    )
}

export default Splash;
