import React from 'react'

import HeaderParcial from '../../components/HeaderParcial'
import FormAccount from '../../components/FormAccount'
import './style.scss'

export const Account = () => {
    return (
        <div className="Account">
            <HeaderParcial />
            <FormAccount />
        </div>
    )
}