import React from 'react'
import { Link } from 'react-router-dom'
import ShippingDetailsComponent from '../components/ShippingDetailsComponent'

const ShippingDetails = (props) => {
    console.log(props)
    return (
        <div className="container">
                <button className="btn-flat blue-text" onClick={ () => props.history.goBack() }>Return</button>
                <ShippingDetailsComponent />
        </div>
    )
}
export default ShippingDetails