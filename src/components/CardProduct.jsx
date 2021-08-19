import React from 'react'
import { Link } from 'react-router-dom'

const CardProduct = (props) => { 
    return (
    <Link to="/product" >
        <div className="card large carousel-item" >
            <div className="card-image">
                <img src={ props.image } />
            </div>
            <div className="card-content">
                <p className="card-title">{props.title}</p>
                <p>${ props.price }</p>
            </div>
        </div>
    </Link>
    )
}
export default CardProduct