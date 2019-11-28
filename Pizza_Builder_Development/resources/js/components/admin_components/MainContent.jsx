import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Ingredients from './Ingredients.jsx';
import Orders from './Orders.jsx';
import PastOrders from './PastOrders.jsx';
import OrderCheckout from './OrderCheckout.jsx';


class MainContent extends React.Component {
    constructor( props ) {
        super( props );

    }

    componentDidMount() {
        console.log( 'MainContent.jsx -->', this.props.content );
    }

    render() {
        console.log( 'Step 3', 'MainContent.jsx reached' ); // Weird login bug troubleshooting
        return (
            <div className="mainContent-admin">
                {
                    ( () => {
                        switch ( this.props.content ) {
                            case 'available-ingredients':
                                return <Ingredients />;
                                break;
                            case 'open-orders':
                                return <Orders
                                    token={this.props.token} />;
                                break;
                            case 'past-orders':
                                return <PastOrders
                                    token={this.props.token} />;
                                break;
                            case 'add-order':
                                return <OrderCheckout />;
                                break;
                            default:
                                return <h1>{this.props.content}</h1>;
                        }
                    } )()
                }
            </div>
        )
    }
}

export default MainContent;
