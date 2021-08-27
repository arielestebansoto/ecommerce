import React from 'react'
import { connect } from 'react-redux'

import PaymentMethod from '../components/PaymentMethod'

const PaymentOption = (props) => {
    console.log(props)
    return (
        <div className="container">
            <PaymentMethod />
        </div>
    )
}
const mapStateToProps = ({ reducer }) => {
    return {reducer}
}
export default connect(mapStateToProps)(PaymentOption)