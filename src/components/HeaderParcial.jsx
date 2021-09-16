import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/HeaderParcial.scss'

const HeaderParcial = () => (
    <div className="HeaderParcial blue darken-2">
        <div className="container">
            <Link to='/' className="white-text">NOCommerce</Link>
        </div>
    </div>
)

export default HeaderParcial