import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { paymentCompleted } from '../actions/shoppingCartActions'
import Sumary from '../components/Sumary'

const Payment = (props) => {
    console.log(props)
    const { cart, paymentOption, shippingOption } = props
    const handleClick = () => {
        if (!cart.length || !paymentOption || !shippingOption) {
            alert('Go back and but some stuff')
            props.history.push('/')
        }
        props.paymentCompleted();
        // props.history.push('/')
    }
    return (
        <div className="container">
            <h5>Payment Options</h5>
            <Sumary />
                <button 
                    className="btn blue darken-4" 
                    onClick={handleClick}
                >
                    BUY
                </button>
                <button className="btn blue darken-2">
                    <Link to="/shippingdetails">Return</Link>
                </button>
        </div>
    )
}
const mapStateToProps = ({ shoppingCartReducer }) => {
    return shoppingCartReducer
}
const mapDispatchToProps = {
    paymentCompleted
}
export default connect(mapStateToProps, mapDispatchToProps)(Payment)