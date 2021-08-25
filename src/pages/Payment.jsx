import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PaymentMethod from '../components/PaymentMethod'
import Sumary from '../components/Sumary'
import { paymentCompleted } from '../actions/shoppingCartActions'

const Payment = (props) => {
    const handleClick = () => {
        props.paymentCompleted()
    }
    return (
        <div className="container">
            <h5>Payment Options</h5>
            <PaymentMethod />
            <Sumary />
                <button 
                    className="btn blue darken-4" 
                    onClick={handleClick}
                >
                    <Link to="/success">BUY</Link>
                </button>
                <button className="btn blue darken-2">
                    <Link to="/shippingdetails">Return</Link>
                </button>
        </div>
    )
}
const mapDispatchToProps = {
    paymentCompleted
}
export default connect(null, mapDispatchToProps)(Payment)