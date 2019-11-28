import React from 'react';
import PopDetails from './PopDetails.jsx';

class PastOrders extends React.Component {
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
        console.log( 'Step 5', 'PastOrders.jsx reached' );
        //  CSRF
        this.setState( { csrf_token: document.getElementsByName( '_token' )[0].value } );
        //  Initial fetch
        fetch( '/order/status/complete', {  // FETCH -> all 'in_progress' orders
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


    render() {
        let apiResponse = 'Loading...';
        let popContent = 'Loading...';

        if ( this.state.pop_open === true ) {
            popContent = this.state.popContent;
        }

        if ( this.state.apiResponse !== '' ) {
            apiResponse = this.state.apiResponse.map( ( elem, index ) => (
                <div key={index} className="orders-single orders-single__complete">
                    <div className="orders-single__information ">
                        <span>
                            Order ID: <span className="orders-single__element">{elem.id}</span>
                        </span>
                        <span>
                            Name: <span className="orders-single__element">{elem.first_name} {elem.last_name}</span>
                        </span>
                        <a href="#" onClick={( event ) => { this.popDetails( event, elem.id ) }} className="orders-single__details-button nostyle-links">Order Details</a>
                        <span>
                            Ordered At: <span className="orders-single__element">{elem.created_at}</span>
                        </span>
                        <span>
                            Status: <span className="orders-single__element">{elem.status}</span>
                        </span>
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

export default PastOrders;

/*
    Pizza where order_id === id
    pizza_order_ingredients where pizza_id = pizzas.pizza_id
*/
