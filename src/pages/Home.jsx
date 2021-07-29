import React from 'react'
import { Link } from 'react-router-dom'

import CarouselHome from '../components/CarouselHome'
import CarouselProducts from '../components/CarouselProducts'
import Card from '../components/Card'
import Footer from '../components/Footer'

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
        <Footer />
    </div>    
)


export default Home