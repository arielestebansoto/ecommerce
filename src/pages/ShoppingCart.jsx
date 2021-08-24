import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CardShoppingCart from '../components/CardShoppingCart'

const ShoppingCart = (props) => {
    
    console.log(props)

    if (props.cart.length === 0) { 
         return <h4>no hay productos</h4>
    } 
    const renderPurchase = () => (
        props.cart.map( (purchase, key) => 
            <li key={key}>
                <CardShoppingCart purchase={purchase} />
            </li>
        )
    )
    return (
        <div>
            <ul>
                { renderPurchase() }
            </ul>
            <div className="container">
                <div className="row">
                    <Link to="shippingdetails">
                        <button className="btn blue darken-2">next</button>
                    </Link>
                </div>
            </div>
        </div>
    )
    }
const mapStateToProps = ( {shoppingCartReducer} ) => {
    return shoppingCartReducer
}
export default connect(mapStateToProps, null)(ShoppingCart)