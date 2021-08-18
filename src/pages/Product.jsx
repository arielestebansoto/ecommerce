import React from 'react'
import { connect } from 'react-redux'

import ProductStar from '../components/ProductStar'
import ProductImageGalery from '../components/ProductImageGalery'
import PurchaseDetails from '../components/PurchaseDetails'
import ProductDetails from '../components/ProductDetails'
import ProductQuestion from '../components/ProductQuestion'
import Footer from '../components/Footer'
import productsReducer from '../reducers/productsReducer'

class Product extends React.Component {
    
    render() {
        console.log(this.props)
        return (
            <div>
                <h4>Product: { this.props.match.params.id }</h4>
                <div className="container">
                    <h5>Product Title</h5>
                    <ProductStar />
                    <ProductImageGalery />
                    <PurchaseDetails />
                    <ProductDetails />
                    <ProductQuestion />
                </div>
                <Footer />
            </div>
        )
    }
} 

const mapStateToProps = ({productsReducer}) => {
    return productsReducer
}
export default connect(mapStateToProps)(Product)