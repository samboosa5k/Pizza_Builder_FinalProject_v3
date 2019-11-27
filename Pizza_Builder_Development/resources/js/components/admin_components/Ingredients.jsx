import React from 'react';

class Ingredients extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            apiResponse: ''
        }
    }

    componentDidMount() {
        fetch( '/api/ingredients' )
            .then( response => response.json() )
            .then( data => {
                this.setState( { apiResponse: data } );
            } )
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let apiResponse = 'Loading...';

        if ( this.state.apiResponse !== '' ) {
            apiResponse = this.state.apiResponse.map( ( elem, index ) => (
                <div key={index} className="ingredients-single">
                    <div>
                        Name: <span className="ingredients-single__element">{elem.name}</span>
                    </div>
                    <div>
                        Category: <span className="ingredients-single__element">{elem.category}</span>
                    </div>
                    <div>
                        Amount: <span className="ingredients-single__element">{elem.amount} {elem.units}</span>
                    </div>
                    <div>
                        Usage: <span className="ingredients-single__element">{elem.unit_deduction} {elem.units}</span>
                    </div>
                    <div>
                        Cost: <span className="ingredients-single__element">{elem.unit_price}</span>
                    </div>
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

export default Ingredients;
