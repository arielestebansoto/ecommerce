import React from 'react'
import { connect } from 'react-redux'
import { addProductToCart } from '../actions/shoppingCartActions'

import { Link } from 'react-router-dom'

import '../assets/styles/components/PurchaseDetails.scss'
import { toast } from '../utils/toast'

const PurchaseDetails = (props) => {
    const { shoppingCartReducer, productsReducer } = props
    const { product, product: { id, price } } = productsReducer
    const { cart } = shoppingCartReducer
    
    const handleAddProductToCart = () => {
        if (!cart.length) {
            props.addProductToCart(product)
            toast('product added!')
        } 
        cart.forEach( (element, index) => {
            if (!(cart[index].id === product.id)) {
                props.addProductToCart(product)
                toast('product added!')
            } else {
                return alert('this product has been added')
            }
        })
    }
    return (
        <div className="row z-depth-2 PurchaseDetails">
            <div className="row">
                <span>$ {price}</span>
            </div>
            <div className="row">
                <span>Stock available: {id}</span>
            </div>
            <div className="row">
                <Link to="/shoppingcart">
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
                        className="btn waves-effect waves-light blue lighten-1 " 
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
const mapStateToProps = ({ productsReducer, shoppingCartReducer }) => {
    return { productsReducer, shoppingCartReducer }
}
const mapDispatchToProps = {
    addProductToCart,
}
export default connect(mapStateToProps, mapDispatchToProps)(PurchaseDetails)