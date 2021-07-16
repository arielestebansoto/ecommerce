import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => (
    <div>
        <h1>Log</h1>
        <form>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
        </form>
        <h3>Don't have acount?</h3>
        <Link to="/register">
            <button>Register</button>
        </Link>
        <Link to="/">
            <button>Home</button>
        </Link>
    </div>
)
export default Login