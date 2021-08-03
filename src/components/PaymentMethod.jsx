import React from 'react'

import '../assets/styles/components/PaymentMethod.scss'

const PaymentMethod = () => (
    <div className="row">
        <div className="col s12 z-depth-2 PaymentMethod">
            <form action="#">
                <p>
                    <label>
                        <input type="checkbox"/>
                        <span>Credit Card</span>
                    </label>
                </p>
                <div className="divider"></div>
                <p>
                    <label>
                        <input type="checkbox" />
                        <span>Cash</span>
                    </label>
                </p>
            </form>
        </div>
    </div>
)

export default PaymentMethod