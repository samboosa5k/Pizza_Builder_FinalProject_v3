import React, { Component } from "react";

class Receipt extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            apiResponse: ''
        }
    }

    componentDidMount() {
        //console.log( 'Receipt.jsx, order id: ', this.props.orderId );
        const doFetch = async () => {
            const response = await fetch( '/order/' + this.props.orderId );
            const data = await response.json();
            this.setState( { apiResponse: data } )
        }
        doFetch();
    }

    render() {
        let content = 'Loading...';

        if ( this.state.apiResponse ) {
            const items = this.state.apiResponse.items;
            let itemName = [];
            let itemPrice = [];
            let itemAmount = [];

            console.log( 'items', items );

            for ( let item in items ) {
                if ( itemName.indexOf( items[item].name ) === -1 ) {
                    itemName.push( items[item].name );
                    itemAmount.push( 1 );
                } else if ( itemName.indexOf( items[item].name ) >= 0 ) {
                    itemAmount[itemName.indexOf( items[item].name )] = itemAmount[itemName.indexOf( items[item].name )] + 1;
                }
            }

            const orders = this.state.apiResponse.orders[0];

            content = (
                <>
                    <div className="flex">
                        <p>Order #{orders.id}</p>
                        <p>{orders.created_at}</p>
                    </div>
                    <div className="orders">
                        <p> {orders.first_name} {orders.last_name}</p>
                        <p> {orders.street_and_housenumber} {orders.city} {orders.postcode}</p>
                        <p> {orders.phone_number}</p>
                    </div>
                    <p style={{ textAlign: 'left' }}>Your order:</p>
                    <div className="flex">
                        <ul style={{ textAlign: 'left' }}>
                            {
                                itemName.map( ( elem, index ) => {
                                    return <li>{elem} x {itemAmount[index]}</li>
                                } )
                            }
                        </ul>
                        <p>{itemPrice}</p>
                    </div>
                    <div className="flex">
                        <p>TOTAL AMOUNT</p>
                        <p>€{orders.order_price}.00</p>
                    </div>
                </>
            )
        }

        return (
            <div className="receipt">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <div>
                        <p>********************************************</p>
                        <h2>RECEIPT</h2>
                        <p>********************************************</p>
                    </div>
                    {content}
                    <div style={{ paddingTop: '15px' }}>**************THANK YOU**************</div>
                </div>
            </div>
        )
    }
}

export default Receipt;
