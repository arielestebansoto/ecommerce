import React, { useState } from 'react'
import { connect } from 'react-redux'
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
        e.preventDefault()
        props.addShippingOption(checkState)
    }
    return (
        <div className="col z-depth-2 ShippingDetailsComponent">
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
                    Submit
                </button>
            </form>
        </div>
    )
}
const mapDispatchToProps = {
    addShippingOption
}
export default connect(null, mapDispatchToProps)(ShippingDetailsComponent)