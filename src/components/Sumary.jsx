import React from 'react'
import { connect } from 'react-redux'

import { finalPrice }from '../utils/sumaryUtils'

const Sumary = (props) => {
    console.log(props)
    const getCart = () => (
        props.cart.map( (purchase, key) => { 
            return (
                <tr key={key}>
                    <td>{purchase.title}</td>
                    <td><b>$ {purchase.price}</b></td>
                </tr>
            ) } )
        )

    return (
        <div className="row z-depth-2">
            <div className="col s12">
                <h4>Sumary</h4>
                <div className="col s12">
                    <p>Payment Method: {props.paymentOption}</p>
                    <p>Shipping to: {props.shippingOption}</p>
                </div>
                <table>
                    <tbody>
                       { getCart() }
                    </tbody>
                </table>
                <div className="divider"></div>
                <table className="Final">
                    <tbody>
                        <tr>
                            <td>Total</td>
                            <td><b>$ { finalPrice(props.cart)}</b></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
    const mapStateToProps = ({ shoppingCartReducer}) => {
    return shoppingCartReducer
}
export default connect(mapStateToProps)(Sumary)