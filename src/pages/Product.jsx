import React from 'react'

import ProductStar from '../components/ProductStar'
import CarouselProduct from '../components/CarouselProduct'
import PurchaseDetails from '../components/PurchaseDetails'
import ProductDetails from '../components/ProductDetails'
import ProductQuestion from '../components/ProductQuestion'

const Product = () => (
    <div className="container">
        <span>new || old | sold out</span>
        <h5>Product Title</h5>
        <ProductStar />
        <CarouselProduct />
        <PurchaseDetails />
        <ProductDetails />
        <ProductQuestion />

        <div className="questions">
            {/* 
            input
            button preguntar
            comentarios
            */}
        </div>
        <div className="reviews">

        </div>
    </div>
)
export default Product