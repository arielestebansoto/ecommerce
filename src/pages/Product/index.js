import React from 'react'
import { connect } from 'react-redux'

import './styles.scss'
import Header from '../../components/Header'
import ProductImageGalery from '../../components/ProductImageGalery'
import { PurchaseDetails } from '../../components/PurchaseDetails'
import ProductDetails from '../../components/ProductDetails'
import ProductQuestion from '../../components/ProductQuestion'
import Footer from '../../components/Footer'
import Loader from '../../components/global/Loader'

import { getProduct } from '../../actions/productsActions'

const mapStateToProps = ({productsReducer}) => {
    return productsReducer
}
const mapDispatchToProps = {
    getProduct,
}

export const Product =  connect(mapStateToProps, mapDispatchToProps)( (props) => {

    React.useEffect( () => {
        window.scroll(0, 0)
        const { productList, match: { params: { id: product_id } } }  = props
        props.getProduct(product_id, productList)
    }, [] )
    
    const { loading, product } = props 

    return (
        <>
            <Header />
            { 
            loading ? <Loader /> : product ? 
                <>
                    <div className="container">
                        <h6 className="Product_title">{product.title}</h6>
                        <div className="row">
                            <div className="col s12 m7 ">
                                <ProductImageGalery image={ product.image }/> 
                            </div>
                        <div className="col s12 m5 ">
                            <PurchaseDetails {...product} />
                        </div>

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
} )

