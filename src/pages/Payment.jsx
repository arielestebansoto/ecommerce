import React from 'react'
import { connect } from 'react-redux'

import { paymentCompleted } from '../actions/shoppingCartActions'
import Sumary from '../components/Sumary'
import Successful from '../components/global/Successful'

import { toast } from '../utils/toast'

const Payment = (props) => {
    console.log(props)
    const { cart, paymentOption, shippingOption, purchaseCompleted } = props.shoppingCartReducer
    const handleClick = () => {
        if (!props.userReducer.isLogin) {
            toast('Please login before the payment')
        } else if (!cart.length || !paymentOption || !shippingOption) {
            toast('Go back and buy some stuff')
            props.history.push('/')
        } else {
            props.paymentCompleted();
        }
    }
    if (purchaseCompleted) {
        return <Successful />
    }
    return (
        <div className="container">
                <button className="btn-flat blue-text" onClick={ () => props.history.goBack() }>Return</button>
            <h5>Payment Options</h5>
            <Sumary />
            <button className="btn blue darken-2" onClick={handleClick}>BUY</button>
        </div>
    )
}
const mapStateToProps = ({ shoppingCartReducer, userReducer }) => {
    return { shoppingCartReducer, userReducer }
}
const mapDispatchToProps = {
    paymentCompleted
}
export default connect(mapStateToProps, mapDispatchToProps)(Payment)