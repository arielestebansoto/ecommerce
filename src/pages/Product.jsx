import React from 'react'
import { Link } from 'react-router-dom'
import CarouselProduct from '../components/CarouselProduct'

const Product = () => (
    <div className="container">
        <span>new || old | sold out</span>
        <h5>Product Title</h5>
        <div>
            <i className="material-icons">start</i>
            <i className="material-icons">start</i>
            <i className="material-icons">start</i>
            <i className="material-icons">start</i>
            <i className="material-icons">start</i>
        </div>
        
        <CarouselProduct />

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