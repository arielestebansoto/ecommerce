import React from 'react'
import { connect } from 'react-redux'

import '../assets/styles/components/Sumary.scss'
import { finalPrice }from '../utils/sumaryUtils'

const Sumary = (props) => {
    const { handleClick } = props
    
    const getCart = () => (
        props.cart.map( (purchase, key) => { 
            return (
                <tr key={key}>
                    <td>{purchase.title}</td>
                    <td className="td_price"><b>$ {purchase.price}</b></td>
                </tr>
            ) } )
        )

    return (
            <div className="col s12">
                <div className="Sumary z-depth-2">
                    <h4>Sumary</h4>
                    
                    <div className="row">
                        <div className="col s12">
                            <p>Payment Method: {props.paymentOption}</p>
                            <p>Shipping to: {props.shippingOption}</p>

                            <table>
                                <tbody>
                                { getCart() }
                                </tbody>
                            </table>

                            <div className="divider"></div>
                        
                            <table className="table_total">
                                <tbody>
                                    <tr>
                                        <td><b>Total</b></td>
                                        <td className="td_price"><b>$ { finalPrice(props.cart)}</b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col s2 offset-s10">
                            <button className="btn blue darken-2" onClick={handleClick}>BUY</button>
                        </div>
                    </div>

                </div>
            </div>
    )
}
    const mapStateToProps = ({ shoppingCartReducer}) => {
    return shoppingCartReducer
}
export default connect(mapStateToProps)(Sumary)