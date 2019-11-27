import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';

function NewNav() {
    
    return (
     
    <div className="navigation">
        
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
        
        <label htmlFor="navi-toggle" className="navigation__button"><span className="navigation__icon"></span></label>

        <div className="navigation__background"></div>

        <nav className="navigation__nav">
            
            <ul className="navigation__list">
               <li className="navigation__item"><NavLink to="/home" className="navigation__link">Home</NavLink></li>
               <li className="navigation__item"><NavLink to="/magic/builder"className="navigation__link">Build A Pizza</NavLink></li> 
               <li className="navigation__item"><NavLink to='/about'className="navigation__link">About</NavLink></li> 
               <li className="navigation__item"> <NavLink to='/contact'className="navigation__link">Contact</NavLink></li>
            </ul>

        </nav>
    </div>
    )
}

export default NewNav