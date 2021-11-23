import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Header from '../../components/Header'
import CardShoppingCart from '../../components/CardShoppingCart'
import NoProduct from '../../components/global/NoProduct'

const mapStateToProps = ( { shoppingCartReducer, userReducer } ) => {
    return { shoppingCartReducer, userReducer }
}

export const ShoppingCart = withRouter( connect(mapStateToProps)( (props) => {

    const renderPurchase = () => (
        props.shoppingCartReducer.cart.map( (product, key) => 
            <li key={key}>
                <CardShoppingCart product={product} />
            </li>
        )
    )

    const handleClick = () => {
        if(props.userReducer.isLogin) {
            props.history.push('./shippingdetails')
        } else if (!props.userReducer.isLogin){
            props.history.push('./notregistered')
        }
    }

    return (
        <>
            <Header />
            <div className="container CardShoppingCart_container">
                <div className="row">
                    <div className="col s12 m10 offset-m1 l8 offset-l2 z-depth-2">
                        { 
                        props.shoppingCartReducer.cart.length === 0 ? <NoProduct /> : 
                        <>
                            <ul>
                                { renderPurchase() }
                            </ul>
                            <div className="container">
                                <div className="row">
                                    <button 
                                        onClick={handleClick}
                                        className="btn blue darken-2"
                                    >
                                        next
                                    </button>
                                </div>
                            </div>
                        </>
                    }

                    </div>
                </div>
            </div>
    </>
    )
}))