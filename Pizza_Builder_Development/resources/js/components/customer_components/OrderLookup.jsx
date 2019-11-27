import React, { useEffect, useState } from 'react';
import Receipt from './Receipt.jsx';

const OrderLookup = () => {
    // const [orderData, setOrderData] = useState();
    const [formValue, setFormValue] = useState( { ordernumber: '' } );
    const [receipt, setReceipt] = useState( { content: 'Your receipt will be shown here...' } );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        setReceipt( { content: <Receipt orderId={formValue.ordernumber} /> } );
    }

    const handleChange = ( event ) => {
        let name = event.target.name;
        let value = event.target.value;

        let email = '';
        let ordernumber = '';

        if ( name === 'email' ) {
            ordernumber = formValue['ordernumber'];
            email = value;
        } else if ( name === 'ordernumber' ) {
            ordernumber = value;
            email = formValue['email'];
        }

        setFormValue( { email: email, ordernumber: ordernumber } );
    }

    return (
        <>
            <h1 className="splash-header">Order Lookup...</h1>
            <div className="info-card">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <form onSubmit={handleSubmit}>

                        {/* <label className="admin-login__label" htmlFor="email">E-mail:</label>
                        <input type="text" id="email" name="email" onChange={handleChange} /> */}

                        <label className="admin-login__label" htmlFor="ordernumber">Order Nr: </label>
                        <input type="text" id="ordernumber" name="ordernumber" onChange={handleChange} />

                        <button type="submit" className="btn btn-default admin-login__button">Submit</button>

                    </form>
                </div>
            </div>
            {receipt.content}
        </>
    )
}

export default OrderLookup;
