import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addPaymentOption } from '../actions/shoppingCartActions'

import '../assets/styles/components/PaymentMethod.scss'

const PaymentMethod = (props) => {
    const [payment, setPayment] = useState({
        type: ''
    })

    const onValueChange = (e) => {
        setPayment({
            type: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addPaymentOption(payment)
    }
    return (
        <div className="row">
            <div className="col s12 z-depth-2 PaymentMethod">
                <form action="#" onSubmit={handleSubmit} onChange={onValueChange}>
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
                    <button type="submit" className="btn blue">
                        submit
                    </button>
                </form>
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    addPaymentOption
}
export default connect(null, mapDispatchToProps)(PaymentMethod)