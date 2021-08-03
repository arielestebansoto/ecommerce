import React from 'react'

import '../assets/styles/components/ShippingDetailsComponent.scss'

const ShippingDetailsComponent = () => (
    <div className="col z-depth-2 ShippingDetailsComponent">
        <form action="#">
            <p>
                <label>
                    <input type="checkbox" />
                    <span>Directo a tu domicilio</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" />
                    <span>Retiro en punto Pick It</span>
                </label>
            </p>
            <p>
                <label>
                    <input type="checkbox" />
                    <span>Acordar con el vendedor</span>
                </label>
            </p>
        </form>
    </div>
)

export default ShippingDetailsComponent