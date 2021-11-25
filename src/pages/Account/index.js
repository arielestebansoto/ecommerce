import React from 'react'

import './style.scss'

import { HeaderParcial } from '../../components/HeaderParcial'
import { FormAccount } from '../../components/FormAccount'

export const Account = () => {
    return (
        <div className="Account">
            <HeaderParcial />
            <FormAccount />
        </div>
    )
}