import React from 'react'

import './style.scss'

import { FormLogin } from '../../components/FormLogin'
import { HeaderParcial } from '../../components/HeaderParcial'

export const Login = () => (
    <div className="Login"> 
        <HeaderParcial />
        <FormLogin />
    </div>
)
