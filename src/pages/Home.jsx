import React from 'react'
import { Link } from 'react-router-dom'

import CarouselHome from '../components/CarouselHome'
import CarouselProducts from '../components/CarouselProducts'
import CardProduct from '../components/CardProduct'
import Footer from '../components/Footer'

const Home = () => 
    (
    <div>
        <CarouselHome />
        <CarouselProducts>
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
        </CarouselProducts>
        <Footer />
    </div>    
)


export default Home