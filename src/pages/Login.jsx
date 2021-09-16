import React from 'react'

import '../assets/styles/pages/Login.scss'

import FormLogin from '../components/FormLogin'
import HeaderParcial from '../components/HeaderParcial'

const Login = () => (
    <div className="Login"> 
        <HeaderParcial />
        <FormLogin />
    </div>
)
export default Login