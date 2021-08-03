import React from 'react'
import { Link } from 'react-router-dom'
import ShippingDetailsComponent from '../components/ShippingDetailsComponent'

const ShippingDetails = () => (
    <div className="container">
        <ShippingDetailsComponent />
        <Link to="/payment" >
            <button className="btn blue darken-4">next</button>
        </Link>
    </div>
)

export default ShippingDetails