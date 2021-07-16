import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => (
    <div>
        <h1>Register for NOTbuy awesome products</h1>    
        <form action="submit">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input type="password" placeholder="confirm password" />
        </form>
        <Link to="/">
            <button>HOME</button>
        </Link>
    </div>
)
export default Register