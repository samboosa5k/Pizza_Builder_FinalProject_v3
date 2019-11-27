import React from 'react';

import './buildcontrol.css';

const buildControl = ( props ) => (
    <div className="BuildControl">
        <div className="BuildControl-MoreOrLess">
            <button className="Less" onClick={props.removed} disabled={props.disabled}>&#8722;</button>
        </div>
    <div className="Label"> {props.label}</div>
        <div className="BuildControl-MoreOrLess">

            <button className="More" onClick={props.added}>&#43; </button>
        </div>
    </div> );

export default buildControl;
