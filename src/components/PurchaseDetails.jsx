import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/PurchaseDetails.scss'

const PurchaseDetails = () => (
    <div className="row z-depth-2 PurchaseDetails">
        <div className="row">
            <span>$9999999</span>
        </div>
        <div className="row">
            <span>Stock available: 9999</span>
        </div>
        <div className="row">
            <Link to="payment">
                <button className="btn waves-effect waves-light blue darken-2 btn-large" type="submit" name="buy">Buy</button>
            </Link>
        </div>
        <div className="row">
            <Link to="/shoppingcart">
                <button className="btn waves-effect waves-light blue disabled" type="submit" name="addCart">Add to cart</button>
            </Link>
        </div>
    </div>
 )

export default PurchaseDetails