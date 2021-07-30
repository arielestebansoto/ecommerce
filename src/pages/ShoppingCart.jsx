import React from 'react'
import { Link } from 'react-router-dom'

import CardShoppingCart from '../components/CardShoppingCart'

const ShoppingCart = () => (
    <div className="container">
        <CardShoppingCart /> 

        <div className="row">
            <Link to="shippingdetails">
                <button className="btn blue darken-2">next</button>
            </Link>
        </div>
    </div>
)
export default ShoppingCart