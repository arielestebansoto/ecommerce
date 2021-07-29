import React from 'react'

import ProductStar from '../components/ProductStar'
import ProductImageGalery from '../components/ProductImageGalery'
import PurchaseDetails from '../components/PurchaseDetails'
import ProductDetails from '../components/ProductDetails'
import ProductQuestion from '../components/ProductQuestion'

const Product = () => (
    <div className="container">
        <h5>Product Title</h5>
        <ProductStar />
        <ProductImageGalery />
        <PurchaseDetails />
        <ProductDetails />
        <ProductQuestion />
    </div>
)
export default Product