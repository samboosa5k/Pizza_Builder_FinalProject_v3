import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const FrontPage = ( props ) => {
    useEffect( () => {
        props.setMenuVisibility( true );
    }, [] );

    return (
        <>
        <Redirect to='/home' />
            <h1 className="splash-header">It's pizza time, baby!</h1>
            <div >
                <div style={{ width: "100%", textAlign: "center" }}>
                    <button type="button" className="button roll-in-left">
                        <img style={{width:'7rem'}}src="/image/Pepperoni-Pizza.png" alt=""/>
                    </button>
                </div>

                <div className="bounce-in-bottom click-me">
                    
                    click me!
                </div>

            </div>
        </>
    )
}

export default FrontPage;
