import React from 'react'
import { Link } from 'react-router-dom'

import CarouselHome from '../components/CarouselHome'
import CarouselProducts from '../components/CarouselProducts'

import Card from '../components/Card'

import FormRegister from '../components/FormRegister'
import FormLogin from '../components/FormLogin'

const Home = () => 
    (
    <div>
        <CarouselHome />
        <CarouselProducts>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </CarouselProducts>
        <Link to="/login" > 
            <button>Login</button>
        </Link>
        <Link to="/product" > 
            <button>Product</button>
        </Link>
    </div>    
)


export default Home