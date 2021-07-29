import React from 'react'
import { Link } from 'react-router-dom'

const CardProduct = () => (
    
    <Link to="/product">
        <div className="card carousel-item ">
            <div className="card-image">
                <img src="/" />
            </div>
            <div className="card-content">
                <span className="card-title">Product Name</span>
                <p>$300000.</p>
                <div className="row">
                </div>
            </div>
        </div>
    </Link>
    )

export default CardProduct