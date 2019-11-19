import React from 'react';

import './toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems.jsx';

const toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        {/* <Logo height="80%"/>  */}
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;