import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => (
    <div>
        <h1>Product Page</h1>
        <Link to="/payment">
            <button>Buy</button>
        </Link>
        <Link to="/shoppingcart">
            <button>Add to cart</button>
        </Link>
        <Link to="/">
            <button>Home</button>
        </Link>
    </div>
)
export default Product