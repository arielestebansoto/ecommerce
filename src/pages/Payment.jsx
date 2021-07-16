import React from 'react'
import { Link } from 'react-router-dom'

const Payment = () => (
    <div>
        <h1>Payment Options</h1>
        <Link to="/product">
            <button>
                Return to product
            </button>
        </Link>
        <Link to="/shoppingcart">
            <button>
                See your Shooping Cart
            </button>
        </Link>
        <Link to="/">
            <button>Home</button>
        </Link>
    </div>
)

export default Payment