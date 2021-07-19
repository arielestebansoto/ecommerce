import React from 'react'
import { Link } from 'react-router-dom'
import CarouselHome from '../components/CarouselHome'

const Home = () => 
    (
    <div>
        <CarouselHome />
        <Link to="/login" > 
            <button>Login</button>
        </Link>
        <Link to="/product" > 
            <button>Product</button>
        </Link>
    </div>    
)


export default Home