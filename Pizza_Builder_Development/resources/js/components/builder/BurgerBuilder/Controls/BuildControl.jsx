import React from 'react';

import './buildcontrol.css';

const buildControl = ( props ) => (
    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button className="Less" onClick={props.removed} disabled={props.disabled}>&#8722;</button>
        <button className="More" onClick={props.added}>&#43;</button>
    </div>
);

export default buildControl;
