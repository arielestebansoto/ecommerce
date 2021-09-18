import React from 'react'
import { connect } from 'react-redux'

import '../assets/styles/pages/Product.scss'
import Header from '../components/Header'
import ProductImageGalery from '../components/ProductImageGalery'
import PurchaseDetails from '../components/PurchaseDetails'
import ProductDetails from '../components/ProductDetails'
import ProductQuestion from '../components/ProductQuestion'
import Footer from '../components/Footer'
import Loader from '../components/global/Loader'

import { getProduct } from '../actions/productsActions'

class Product extends React.Component {
    componentDidMount() {
        window.scroll(0, 0)
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
                        <h5 className="Product_title">{product.title}</h5>
                        <div className="row">
                            <ProductImageGalery image={ product.image }/> 
                            <PurchaseDetails {...product} />
                        </div>
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