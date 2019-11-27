import React from 'react';
import PopDetails from './PopDetails.jsx';

class Orders extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            apiResponse: '',
            orderItems: '',
            popContent: '',
            pop_id: '',
            pop_open: false,
            csrf_token: ''
        }
        this.popDetails = this.popDetails.bind( this );
    }

    componentDidMount() {
        //  Logging for debugging
        console.log( 'Step 4', 'Orders.jsx reached' );
        //  CSRF
        this.setState( { csrf_token: document.getElementsByName( '_token' )[0].value } );
        //  Initial fetch
        fetch( '/order/status/in_progress', {  // FETCH -> all 'in_progress' orders
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.props.token,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json'
            }
        } )
            .then( response => response.json() )
            .then( data => {
                this.setState( { apiResponse: data.orders, orderItems: data.items } );
            } )
    }

    popDetails( event, id ) {   // For setting pop-up related state and ID
        event.preventDefault();

        let details = [];

        if ( this.state.orderItems !== '' ) {
            this.state.orderItems.forEach( ( elem, index ) => {
                if ( elem.order_id === id ) details = [...details, elem];   // Putting only relevant ingredients into array
            } );
        }

        this.setState( prevState => ( { pop_open: !prevState.pop_open, pop_id: id, popContent: details } ) );
    }

    completeOrder( event, id, index ) {
        let newApiResponse = this.state.apiResponse;
        console.log( 'Before api change', newApiResponse );
        newApiResponse.splice( index, 1 );
        console.log( 'After api change', newApiResponse );

        console.log( 'Orders.jsx -> completeOrder', id );
        fetch( '/order/update', {  // FETCH -> update
            method: 'PUT',
            headers: {
                // 'Authorization': 'Bearer ' + this.props.token,
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.state.csrf_token
            },
            body: JSON.stringify( {
                'id': id,
                'operation': 'complete'
            } )
        } )
            .then( response => response.json() )
            .then( data => {
                console.log( 'Orders.jsx -> server response', JSON.stringify( data ) );
            } ).then(
                fetch( '/email/complete/', {  // FETCH -> update
                    method: 'POST',
                    headers: {
                        // 'Authorization': 'Bearer ' + this.props.token,
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': this.state.csrf_token
                    },
                    body: JSON.stringify( {
                        'id': id,
                    } )
                } )
                    .then( response => response.json() )
                    .then( data => {
                        console.log( 'Orders.jsx -> server response', JSON.stringify( data ) );
                    } )
            )
        this.setState( { apiResponse: newApiResponse } );
    }

    cancelOrder( event, id ) {
        console.log( 'Orders.jsx -> cancelOrder', id );
    }

    render() {
        let apiResponse = 'Loading...';
        let popContent = 'Loading...';

        if ( this.state.pop_open === true ) {
            popContent = this.state.popContent;
        }

        if ( this.state.apiResponse !== '' ) {
            apiResponse = this.state.apiResponse.map( ( elem, index ) => (
                <div key={"order-single_" + index} className="orders-single">
                    <div className="orders-single__information">
                        <span>
                            Order ID: <span className="orders-single__element">{elem.id}</span>
                        </span>
                        <span>
                            Name: <span className="orders-single__element">{elem.first_name} {elem.last_name}</span>
                        </span>
                        <span>
                            Ordered At: <span className="orders-single__element">{elem.created_at}</span>
                        </span>
                    </div>
                    <hr />
                    <div className="orders-single__bottom-menu">
                        <a href="#" onClick={( event ) => { this.popDetails( event, elem.id ) }} className="orders-single__details-button nostyle-links">Order Details</a>
                        <a href="#" onClick={( event ) => { this.completeOrder( event, elem.id, index ) }} className="orders-single__complete-button nostyle-links">Complete Order</a>
                        <a href="#" onClick={( event ) => { this.cancelOrder( event, elem.id ) }} className="orders-single__cancel-button nostyle-links">Cancel Order</a>
                    </div>
                    {( this.state.pop_open === true && elem.id === this.state.pop_id ) && <PopDetails popContent={popContent} />}
                </div>
            ) )
        }


        return (
            <>
                {apiResponse}

            </>
        )
    }
}

export default Orders;

/*
    Pizza where order_id === id
    pizza_order_ingredients where pizza_id = pizzas.pizza_id
*/
