import React from 'react'
import { connect } from 'react-redux'

import PaymentMethod from '../components/PaymentMethod'
import Header from '../components/Header'

const PaymentOption = (props) => {
    return (
        <>
            <Header />
            <div className="container">
                <button 
                    className="btn-flat blue-text" 
                    onClick={ () => props.history.goBack() }
                > Return</button>
            <PaymentMethod />
        </div>
        </>
    )
}
const mapStateToProps = ({ reducer }) => {
    return {reducer}
}
export default connect(mapStateToProps)(PaymentOption)