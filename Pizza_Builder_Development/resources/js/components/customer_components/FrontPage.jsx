import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
<<<<<<< HEAD
import { NavLink} from 'react-router-dom';
=======
import { NavLink } from 'react-router-dom';
>>>>>>> new_nav_integration

const FrontPage = ( props ) => {
    useEffect( () => {
        props.setMenuVisibility( true );
    }, [] );

    return (
        <div className="main">
<<<<<<< HEAD
        <Redirect to='/home' />
            <h1 style={{paddingTop: '10rem', textAlign: 'center'}}className="splash-header">It's pizza time, baby!</h1>
            <div >
                <div style={{ width: "100%", textAlign: "center" }}>
                    <button type="button" className="button roll-in-left">
                    <NavLink
                        className="menu-customer__item"
                        activeClassName="menu-customer__item--active"
                        to="/magic/builder"><img style={{width:'10rem'}}src="/image/Pepperoni-Pizza.png" alt=""/></NavLink>
                        
                    </button>
                </div>

               <div className="click-me bounce-in-bottom">
                
                <img style={{height: '10rem'}} src="/image/arrow.svg" alt=""/>
               
                <div className="bounce-in-bottom">
                    click me!
                </div>
=======
            <Redirect to='/home' />
            <h1 style={{ paddingTop: '10rem', textAlign: 'center' }} className="splash-header">It's pizza time, baby!</h1>
            <div >
                <div style={{ width: "100%", textAlign: "center" }}>
                    <button type="button" className="button roll-in-left">
                        <NavLink
                            className="menu-customer__item"
                            activeClassName="menu-customer__item--active"
                            to="/magic/builder">
                            <img style={{ width: '10rem' }} src="/image/Pepperoni-Pizza.png" alt="" />
                        </NavLink>                    </button>
                </div>
                <div className="click-me bounce-in-bottom">
                    <img style={{ height: '10rem' }} src="/image/arrow.svg" alt="" />
                    <div className="bounce-in-bottom">
                        click me!
                    </div>
>>>>>>> new_nav_integration
                </div>
            </div>
        </div>
    )
}
export default FrontPage;
