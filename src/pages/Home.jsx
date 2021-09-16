import React from 'react'
import { connect } from 'react-redux'

import * as productsActions from '../actions/productsActions'

import Header from '../components/Header'
import CarouselHome from '../components/CarouselHome'
import CarouselProducts from '../components/CarouselProducts'
import Footer from '../components/Footer'
import Loader from '../components/global/Loader'

class Home extends React.Component {

    componentDidMount() {
        if(!this.props.productsReducer.productList.length) {
            this.props.getProductsLimit()
        }
    }
    render() {
        return (
            <>
                <Header />
                { this.props.productsReducer.productList.length === 0 
                    ? <Loader /> 
                    : <>
                        <CarouselHome />
                        <CarouselProducts products={this.props.productsReducer.productList}/>
                        <Footer />
                    </>
                }
            </>    
        )
    }
} 

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, productsActions)(Home)