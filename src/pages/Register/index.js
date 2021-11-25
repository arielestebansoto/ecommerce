import React from 'react'

import './style.scss'

import { FormRegister } from '../../components/FormRegister'
import { HeaderParcial } from '../../components/HeaderParcial'

export const Register = () => (
    <div className="Register">
        <HeaderParcial />
        <FormRegister />
    </div>
)
