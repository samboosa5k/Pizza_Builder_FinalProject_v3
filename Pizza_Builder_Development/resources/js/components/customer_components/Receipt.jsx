import React from "react"


function Receipt(props) {
    

    return (
        <div className="receipt">
        <div style={{ width: "100%", textAlign: "center" }}>
            <div>
                <p>**********************************</p>
                <h2>RECEIPT</h2>
                <p>**********************************</p>
            </div>
            <div className="flex">
                <p>Order #2342</p>
                <p>11/21/2019</p>
                <p>12:00pm</p>
            </div>
            <div>
                <p> <strong>Customer: </strong> first_name last_name</p>
                <p> <strong>Address: </strong> street_and_housenumber postcode city</p>
                <p> <strong>Phone Number: </strong> phone_number</p>
            </div>
            <div className="flex"></div>
            <div className="flex">
                <p>1 x Ingredient 1</p>
                <p>€1.00</p>
            </div>
            <div className="flex">
                <p>TOTAL AMOUNT</p>
                <p>€12.00</p>
            </div>
            <div className="flex">
                <p>TOTAL AMOUNT</p>
                <p>€12.00</p>
            </div>
            <div style={{paddingTop:'15px'}}>***********THANK YOU***********</div>
            
            
            
         
           
        </div>
    </div>
    )
}

export default Receipt