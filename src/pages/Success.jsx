import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => (
    <div>
        <h1>Success!!!</h1>
        <Link to="/">
            <button>Return to see more products</button>
        </Link>
    </div>
)
export default Success