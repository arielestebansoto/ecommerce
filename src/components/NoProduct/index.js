import React from 'react'
import { Link } from 'react-router-dom'

export const NoProduct = () => (
    <div className="container">
        <h5>There are no products in the shoppingcart</h5>
        <p>Go back to <Link to='/'>home</Link> to add some products</p>
    </div>
)
