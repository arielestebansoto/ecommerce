import React from 'react'
import { Link } from 'react-router-dom'

const ShoppingCart = () => (
    <div>
        <h1>Shopping Cart</h1>
        <div>
            <img/>
            <span>eliminar</span>
            <span>mas productos del vendedor</span>
            <span>comprar ahora</span>
        </div>
        <Link to="/success">
            <button>Confirm</button>
        </Link>
    </div>
)
export default ShoppingCart