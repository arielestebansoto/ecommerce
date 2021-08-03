import React from 'react'
import { Link } from 'react-router-dom'

const ShippingDetails = () => (
    <div>
        <h5>Shipping Details</h5>
        <Link to="/payment">
            <button className="btn blue darken-2">next</button>
        </Link>
        <Link to="/shoppingcart">
            <button className="btn blue darken-2 disabled">prev</button>
        </Link>
    </div>
)

export default ShippingDetails