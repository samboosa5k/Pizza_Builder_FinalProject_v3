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
            <div className="info-card">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h2>This is the home page</h2>
                    <p>Soon this will show the view created by Jayne & Adi</p>
                </div>
            </div>
        </>
    )
}

export default FrontPage;
