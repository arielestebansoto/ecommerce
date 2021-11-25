import React from 'react'
import { connect } from 'react-redux'

import './style.scss'
import { Header } from '../../components/Header'
import { PaymentMethod } from '../../components/PaymentMethod'

const mapStateToProps = ({ reducer }) => {
    return {reducer}
}

export const PaymentOption = connect(mapStateToProps)( (props) => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
                        <div className="PaymentOption">
                            <div className="row">
                                <button 
                                    className="btn-flat blue-text" 
                                    onClick={ () => props.history.goBack() }
                                > Return
                                </button>
                            </div>
                            <div className="row">
                                <PaymentMethod />
                            </div>

                        </div>
                        
                    </div>
                </div>
        </div>
        </>
    )
})
