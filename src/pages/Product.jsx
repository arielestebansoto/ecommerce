import React from 'react'
import { connect } from 'react-redux'

import ProductStar from '../components/ProductStar'
import ProductImageGalery from '../components/ProductImageGalery'
import PurchaseDetails from '../components/PurchaseDetails'
import ProductDetails from '../components/ProductDetails'
import ProductQuestion from '../components/ProductQuestion'
import Footer from '../components/Footer'
import productsReducer from '../reducers/productsReducer'
import { getProduct } from '../actions/productsActions'

class Product extends React.Component {
    async componentDidMount() {
        if (!this.props.product.length) {
            await this.props.getProduct(this.props.match.params.id)
        }
    }
    render() {
        const { product } = this.props
        if (!product) {
            return <h5>cargando...</h5>
        }
        if (product) {
            return (
                <div>
                    <div className="container">
                        <h5>{product.title}</h5>
                        <ProductStar />
                        <ProductImageGalery image={ product.image }/> 
                        <PurchaseDetails {...product} />
                        <ProductDetails {...product}/>
                        <ProductQuestion />
                    </div>
                    <Footer />
                </div>
            )
        }
    }
} 

const mapStateToProps = ({productsReducer}) => {
    return productsReducer
}
const mapDispatchToProps = {
    getProduct,
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)