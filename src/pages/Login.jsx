import React from 'react'
import { Link } from 'react-router-dom'
import FormLogin from '../components/FormLogin'
import FormRegister from '../components/FormRegister'
const Login = () => (
    <div>
       <FormLogin />
        <h3>Don't have acount?</h3>
        <FormRegister />
        
    </div>
)
export default Login