import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { addPaymentOption } from '../../actions/shoppingCartActions'

import './style.scss'

const mapDispatchToProps = {
    addPaymentOption
}

export const PaymentMethod = withRouter(connect(null, mapDispatchToProps)( (props) => {

    const [payment, setPayment] = useState({
        type: ''
    })

    const handleChangeValue = (e) => {
        setPayment({
            type: e.target.value
        })
    }
    const handleSubmit = (e) => {
        if (!payment.type) {
            alert('Select an option to continue')
        }
        if (payment.type) {
            e.preventDefault()
            props.addPaymentOption(payment)
            props.history.push('/payment')
        }
    }

    return (
        <div className="z-depth-2 PaymentMethod">
            <h6>Payment Method</h6>
            <form action="#" onChange={handleChangeValue} onSubmit={handleSubmit}>
                <p>
                    <label>
                        <input 
                            type="radio"
                            name="payment"
                            value="card"
                        />
                        <span>Credit Card</span>
                    </label>
                </p>
                <div className="divider"></div>
                <p>
                    <label>
                        <input 
                            type="radio" 
                            name="payment"
                            value="cash"
                        />
                        <span>Cash</span>
                    </label>
                </p>
                <button type="submit" className="btn blue ">
                    Continue
                </button>
            </form>
        </div>
    )
}))
