import React from 'react'
import { Link } from 'react-router-dom'

const CardProduct = (props) => { 
    return (
    <Link to="/product" >
        <div className="card carousel-item " >
            <div className="card-image">
                <img src={ props.image } />
            </div>
            <div className="card-content">
                <span className="card-title">{props.title}</span>
                <p>${ props.price }</p>
                <div className="row">
                </div>
            </div>
        </div>
    </Link>
    )
}
export default CardProduct