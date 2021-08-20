import React from 'react'
import { connect } from 'react-redux'
import { addProductToCart } from '../actions/shoppingCartActions'

import { Link } from 'react-router-dom'

import '../assets/styles/components/PurchaseDetails.scss'

const PurchaseDetails = (props) => {
    const handleAddProductToCart = () => props.addProductToCart(props.product)
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
                    <button 
                        className="btn waves-effect waves-light blue darken-2 btn-large" 
                        type="submit" 
                        name="buy">
                            Buy
                </button>
                </Link>
            </div>
            <div className="row">
                    <button 
                        className="btn waves-effect waves-light blue lighten-4 " 
                        type="submit" 
                        name="addCart"
                        onClick={ handleAddProductToCart }
                    >
                            Add to cart
                    </button>
            </div>
        </div>
    )
}
const mapStateToProps = ({ productsReducer }) => {
    return productsReducer
}
const mapDispatchToProps = {
    addProductToCart,
}
export default connect(mapStateToProps, mapDispatchToProps)(PurchaseDetails)