import React from 'react';
import { Link } from 'react-router-dom';

const SiteName = ( props ) => {
    return (
        <Link to='/' >
            <h4 className="navbar-customer__site-name nostyle-links">Magic Pizza</h4>
        </Link>
    )
}

export default SiteName;
