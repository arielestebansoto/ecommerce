import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/PurchaseDetails.scss'

const PurchaseDetails = (props) => {
    return (
        <div className="row z-depth-2 PurchaseDetails">
            <div className="row">
                <span>$ {props.price}</span>
            </div>
            <div className="row">
                <span>Stock available: {props.id}</span>
            </div>
            <div className="row">
                <Link to="shoppingcart">
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
}

export default PurchaseDetails