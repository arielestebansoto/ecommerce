import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => (

        <div className="card carousel-item ">
            <div className="card-image">
                <img src="/" />
            </div>
            <div className="card-content">
                <span className="card-title">Product Name</span>
                <p>$300000.</p>
                <div className="row">
                <Link to="/product">
                    <button className="btn blue">see product</button>
                </Link>
                </div>
            </div>
        </div>

    )

export default Card