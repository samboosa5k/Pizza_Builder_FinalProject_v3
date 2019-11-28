import React from 'react';

class CheckoutExample extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            street_and_housenumber: '',
            postcode: '',
            city: '',
            csrf_token: '',
            checkout_object: ''
        }
        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    } componentDidMount() {
        this.setState( { csrf_token: document.getElementsByName( '_token' )[0].value } );
    } handleSubmit( event ) {
        event.preventDefault(); fetch( '/order/finalize', {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': this.state.csrf_token
            },
            body: JSON.stringify( {
                'first_name': this.state.first_name,
                'last_name': this.state.last_name,
                'email': this.state.email,
                'phone_number': this.state.phone_number,
                'street_and_housenumber': this.state.street_and_housenumber,
                'postcode': this.state.postcode,
                'city': this.state.city,
                'order': this.props.orderIngredients
            } )
        } )
            .then( response => response.json() )
            .then( data => {                //  Send email
                fetch( '/email/' + data.order_id, {
                    method: 'GET',
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': this.state.csrf_token
                    }
                } )
                    .then( this.props.setOrderId( data.order_id ) )
                    .then( this.props.history.push( '/receipt' ) )
            } )
    } handleChange( event ) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState( { [nam]: val } );
    } render() {
        return (
            <>                <div className="admin-login__wrapper">

                <div style={{
                    padding: 1 + "rem", backgroundColor: "#F0F0F0"
                }}>
                    {JSON.stringify( this.props.ingredientProps )}
                </div>                    <hr />                    <form className="form-group admin-login__form" onSubmit={this.handleSubmit}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <div className="boxes" style={{}}>
                            <label className="admin-login__label" htmlFor="first_name">First Name:</label>
                            <input type="text" className="admin-login__input" id="first_name" name="first_name" onChange={this.handleChange} />
                        </div>
                        <div className="boxes" style={{}}>
                            <label className="admin-login__label" htmlFor="last_name">Last Name:</label>
                            <input type="text" className="admin-login__input" id="last_name" name="last_name" onChange={this.handleChange} />
                        </div>
                    </div>                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <div className="boxes" style={{}}>
                            <label className="admin-login__label" htmlFor="last_name">Email:</label>
                            <input type="text" className="admin-login__input" id="email" name="email" onChange={this.handleChange} />
                        </div>
                        <div className="boxes" style={{}}>
                            <label className="admin-login__label" htmlFor="phone_number">Phone:</label>
                            <input type="text" className="admin-login__input" id="phone_number" name="phone_number" onChange={this.handleChange} />
                        </div>
                    </div>                            <div className="boxes address">
                        <label className="admin-login__label" htmlFor="street_and_housenumber">Street & House Nr.:</label>
                        <input style={{ width: '600px' }} type="text" className="admin-login__input" id="street_and_housenumber" name="street_and_housenumber" onChange={this.handleChange} />
                    </div>                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <div className="boxes" style={{}}>
                            <label className="admin-login__label" htmlFor="postcode">Postcode:</label>
                            <input type="text" className="admin-login__input" id="postcode" name="postcode" onChange={this.handleChange} />
                        </div>
                        <div className="boxes" style={{}}>
                            <label className="admin-login__label" htmlFor="city">City:</label>
                            <input type="text" className="admin-login__input" id="city" name="city" onChange={this.handleChange} />
                        </div>
                    </div>                        <button style={{ width: '100px', padding: '.5rem', borderRadius: '3rem', fontSize: '18px', color: 'white', backgroundColor: 'coral', boxShadow: '1px 1px 1px grey', cursor: 'pointer' }} type="submit" className="btn btn-default admin-login__button">Submit</button>
                </form>
            </div>            </>
        )
    }
}
export default CheckoutExample;

