import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => (
    <Link to="/product">
        <div className="card carousel-item ">
            <div className="card-image">
                <img src="/" />
            </div>
            <div className="card-content">
                <span className="card-title">Product Name</span>
                <p>$300000.</p>
            </div>
        </div>
    </Link>
    )

export default Card