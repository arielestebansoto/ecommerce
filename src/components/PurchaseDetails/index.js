import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { addProductToCart } from '../../actions/shoppingCartActions'

import './styles.scss'
import { toast } from '../../utils/toast'
import { ProductStar } from '../ProductStar'

const mapStateToProps = ({ productsReducer, shoppingCartReducer }) => {
    return { productsReducer, shoppingCartReducer }
}
const mapDispatchToProps = {
    addProductToCart,
}

export const PurchaseDetails = withRouter(connect(mapStateToProps, mapDispatchToProps)( (props) => {
    const { shoppingCartReducer, productsReducer } = props
    const { product } = productsReducer || {}
    const { price, rating } = product
    const { rate, count } = rating || {}
    
    const { cart } = shoppingCartReducer 

    const handleAddProductToCart = (e) => {
        if (!cart.length) {
            props.addProductToCart(product)
            toast('product added!')
            if(e.target.name === 'buy') {
                props.history.push('/shoppingcart')
            }
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
        <div className="col s12 m4 ">
            <div className="PurchaseDetails z-depth-2">
                <ProductStar rate={rate}/>

                <div className="row">
                    <span className="Price">$ {price}</span>
                </div>

                <div className="row">
                    <span>Stock available: {count}</span>
                </div>
                
                <div className="row">
                    <button 
                        className="btn waves-effect waves-light blue darken-2" 
                        type="submit" 
                        name="buy"
                        onClick={ handleAddProductToCart }
                    >
                            Buy
                    </button>
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
        </div>
    )
}))
