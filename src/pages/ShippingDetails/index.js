import React from 'react'

import './style.scss'

import { Header } from '../../components/Header'
import { ShippingDetailsComponent } from '../../components/ShippingDetailsComponent'

export const ShippingDetails = (props) => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
                        <div className="ShippingDetails">
                            <div className="row">
                                <button 
                                    className="btn-flat blue-text" 
                                    onClick={ () => props.history.goBack() }
                                >Return </button>
                            </div>
                            <div className="row">
                                <ShippingDetailsComponent />
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}
