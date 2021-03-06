import React from 'react'
import { connect } from 'react-redux'
import { removeProductFromCart } from '../../actions/shoppingCartActions'

import './style.scss'

const mapStateToProps = ({ shoppingCartReducer }) => {
    return { cart: shoppingCartReducer.cart }
}

const mapDispatchToProps = {
    removeProductFromCart
}

export const CardShoppingCart = connect(mapStateToProps, mapDispatchToProps)( (props) => {
    const { product, cart } = props
    const handleClick = () => props.removeProductFromCart(product, cart) 

    return (
        <div className="CardShoppingCart">
                <div className="Item CardShoppingCart_item">
                    <img src={ product.image }/>
                    <div className="CardContent">
                        <h6>{ product.title }</h6>
                        <div className="CardDetails">
                            <span><b>$ { product.price }</b></span>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="ItemAcions">
                    <button 
                        className="btn-flat blue-text darken-4"
                        onClick={handleClick}
                    >
                        eliminar
                    </button>
                </div>
        </div>
    )
})