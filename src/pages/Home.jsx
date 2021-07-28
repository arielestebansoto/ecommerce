import React from 'react'
import { Link } from 'react-router-dom'

import CarouselHome from '../components/CarouselHome'
import CarouselProducts from '../components/CarouselProducts'

import Card from '../components/Card'

import FormRegister from '../components/FormRegister'
import FormLogin from '../components/FormLogin'

import ProductImageGalery from '../components/ProductImageGalery'

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
        <ProductImageGalery />
    </div>    
)


export default Home