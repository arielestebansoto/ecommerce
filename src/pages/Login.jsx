import React from 'react'
import { Link } from 'react-router-dom'
import FormLogin from '../components/FormLogin'
import FormRegister from '../components/FormRegister'

const Login = () => (
    <div className="container">
       <FormLogin />
       <div className="row center">
            <Link to="/register" >
                <button className="btn blue lighten-2">Don't have acount? Register</button>
            </Link>
       </div>
    </div>
)
export default Login