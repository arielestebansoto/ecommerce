import React from 'react'
import { Link } from 'react-router-dom'
import FormLogin from '../components/FormLogin'

const Login = () => (
    <div className="container">
       <FormLogin />
       <div className="row center">
            <Link to="/register" >
                <button className="btn-flat blue-text">Don't have acount? Register</button>
            </Link>
       </div>
    </div>
)
export default Login