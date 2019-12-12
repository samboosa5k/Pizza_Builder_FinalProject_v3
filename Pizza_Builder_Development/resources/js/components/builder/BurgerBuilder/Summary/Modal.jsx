import React from 'react';

// import './modal.css';
// import Aux from '../../../hoc/Aux.jsx';
// import Backdrop from './Backdrop.jsx';

const modal = ( props ) => {
    const visibleRight = ( props.mobileReceiptVisible === true ) ? 0 : "-100%";

    return (
        <div className="Modal"
            style={{
                right: visibleRight,
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
                }}>
            {props.children}
        </div>
    )

};

export default modal;
