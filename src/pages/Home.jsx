import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => 
    (
    <div>
        <h1>Bienvenido</h1>
        <Link to="/login" > 
            <button>Login</button>
        </Link>
        <Link to="/product" > 
            <button>Product</button>
        </Link>
    </div>    
)


export default Home