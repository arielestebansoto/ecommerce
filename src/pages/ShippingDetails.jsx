import React from 'react'

import Header from '../components/Header'

import ShippingDetailsComponent from '../components/ShippingDetailsComponent'

const ShippingDetails = (props) => {
    return (
        <>
            <Header />
            <div className="container">
                <button 
                    className="btn-flat blue-text" 
                    onClick={ () => props.history.goBack() }
                >Return </button>
                <ShippingDetailsComponent />
            </div>
    </>
    )
}
export default ShippingDetails