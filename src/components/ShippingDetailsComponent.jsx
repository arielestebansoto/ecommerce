import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { addShippingOption } from '../actions/shoppingCartActions'

import '../assets/styles/components/ShippingDetailsComponent.scss'

const ShippingDetailsComponent = (props) => {
    console.log(props)
    const [checkState, setChecker ] = useState({
        type: '', 
    })
    
    const handleChangeValue = (e) => {
        setChecker({
            type: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        if (!checkState.type) {
            alert('Select an option to continue')
        }
        if (checkState.type) {
            e.preventDefault()
            props.addShippingOption(checkState)
            props.history.push('/paymentoption')
        }
    }
    return (
        <div className="col z-depth-2 ShippingDetailsComponent">
            <h6>Shipping Method</h6>
            <form action="#" onChange={handleChangeValue} onSubmit={handleSubmit}>
                <p>
                    <label>
                        <input 
                            name="shipping"
                            value="home" 
                            type="radio"
                        />
                        <span>To Home</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input 
                            name="shipping"
                            value="vendor" 
                            type="radio"
                        />
                        <span>Talk with the vendor</span>
                    </label>
                </p>
                <button type="submit" className="btn blue ">
                    Continue
                </button>
            </form>
        </div>
    )
}
const mapDispatchToProps = {
    addShippingOption
}
export default withRouter(connect(null, mapDispatchToProps)(ShippingDetailsComponent))