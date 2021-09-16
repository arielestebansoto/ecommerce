import React from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'
import ProductStar from '../components/ProductStar'
import ProductImageGalery from '../components/ProductImageGalery'
import PurchaseDetails from '../components/PurchaseDetails'
import ProductDetails from '../components/ProductDetails'
import ProductQuestion from '../components/ProductQuestion'
import Footer from '../components/Footer'
import Loader from '../components/global/Loader'

import { getProduct } from '../actions/productsActions'

class Product extends React.Component {
    componentDidMount() {
        const { productList, match: { params: { id: product_id } } }  = this.props
        this.props.getProduct(product_id, productList)
    }
    render() {
        const { loading, product } = this.props
        return (
        <>
            <Header />
            { 
            loading ? <Loader /> : product ? 
                <>
                    <div className="container">
                        <h5>{product.title}</h5>
                        <ProductStar />
                        <ProductImageGalery image={ product.image }/> 
                        <PurchaseDetails {...product} />
                        <ProductDetails {...product}/>
                        <ProductQuestion />
                    </div>
                    <Footer />
                </>    
            : null 
        }
        </>
        )
    }
} 

const mapStateToProps = ({productsReducer}) => {
    return productsReducer
}
const mapDispatchToProps = {
    getProduct,
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)