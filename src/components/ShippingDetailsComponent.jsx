import React, { useState } from 'react'
import { connect } from 'react-redux'

import '../assets/styles/components/ShippingDetailsComponent.scss'

const ShippingDetailsComponent = (props) => {
    const [checkState, setChecker ] = useState({
        type: '', 
        checked: false
    })
    
    const handleChangeValue = (e) => {
        setChecker({
            type: e.target.value,
            checked: e.target.checked
        })
    }
    return (
        <div className="col z-depth-2 ShippingDetailsComponent">
            <form action="#" onChange={handleChangeValue}>
                <p>
                    <label>
                        <input 
                            name="option"
                            value="home" 
                            type="radio"
                        />
                        <span>To Home</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input 
                            name="option"
                            value="vendor" 
                            type="radio"
                        />
                        <span>Talk with the vendor</span>
                    </label>
                </p>
            </form>
        </div>
    )
}

export default connect(null)(ShippingDetailsComponent)