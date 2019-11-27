import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const FrontPage = ( props ) => {
    useEffect( () => {
        props.setMenuVisibility( true );
    }, [] );

    return (
        <>
            <Redirect to='/home' />
            <div className="home">
           <h1 className="splash-header">It's pizza time, baby!</h1>
           
                <h2>This is the homepage</h2>
                <p>Blah blah</p>
            </div>
        </>
    )
}

export default FrontPage;
