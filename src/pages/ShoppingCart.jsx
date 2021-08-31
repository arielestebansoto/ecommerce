import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CardShoppingCart from '../components/CardShoppingCart'
import NoProduct from '../components/global/NoProduct'

const ShoppingCart = (props) => {
    
    console.log(props)

    if (props.cart.length === 0) { 
         return <NoProduct />
    } 
    const renderPurchase = () => (
        props.cart.map( (product, key) => 
            <li key={key}>
                <CardShoppingCart product={product} />
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

export default connect(mapStateToProps)(ShoppingCart)