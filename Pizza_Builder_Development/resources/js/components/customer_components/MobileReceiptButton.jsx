import React from 'react';

const MobileReceiptButton = ( props ) => {
    return (
        <a href="#" className="button-general button-mobileReceipt">
            <p onClick={props.setMobileReceiptVisible}>Receipt</p>
        </a>
    );
}

export default MobileReceiptButton;
