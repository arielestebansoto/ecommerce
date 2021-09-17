import React from 'react'
import { connect } from 'react-redux'

import '../assets/styles/pages/Payment.scss'

import { paymentCompleted } from '../actions/shoppingCartActions'
import Header from '../components/Header'
import Sumary from '../components/Sumary'
import Successful from '../components/global/Successful'

import { toast } from '../utils/toast'

const Payment = (props) => {

    const { cart, paymentOption, shippingOption, purchaseCompleted } = props.shoppingCartReducer
   
    const handleClick = () => {
        console.log('click')
        if (!props.userReducer.isLogin) {
            toast('Please login before the payment')
        } else if (!cart.length || !paymentOption || !shippingOption) {
            toast('Go back and buy some stuff')
            props.history.push('/')
        } else {
            props.paymentCompleted();
        }
    }
    return (
        <>
            <Header />
            {
                purchaseCompleted ? <Successful /> :
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m10 offset-m1 l8 offset-l2">
                                <div className="Payment">
                                    <div className="row">
                                        <button className="btn-flat blue-text" onClick={ () => props.history.goBack() }>Return</button>
                                    </div>
                                    <div className="row">
                                        <Sumary handleClick={handleClick}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
const mapStateToProps = ({ shoppingCartReducer, userReducer }) => {
    return { shoppingCartReducer, userReducer }
}
const mapDispatchToProps = {
    paymentCompleted
}
export default connect(mapStateToProps, mapDispatchToProps)(Payment)