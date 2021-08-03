import React from 'react'
import { Link } from 'react-router-dom'

import PaymentMethod from '../components/PaymentMethod'
import Sumary from '../components/Sumary'

const Payment = () => (
    <div className="container">
        <h5>Payment Options</h5>
        <PaymentMethod />
        <Sumary />
        <Link to="/success">
            <button className="btn blue darken-4">BUY</button>
        </Link>
        <Link to="/shippingdetails">
            <button className="btn blue darken-2">
                Return
            </button>
        </Link>
    </div>
)

export default Payment