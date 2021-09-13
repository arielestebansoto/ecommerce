import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import * as productsActions from '../actions/productsActions'

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
        if (this.props.productsReducer.productList.length === 0) {
            return <Loader />
        }
        return (
            <div className="container">
                <CarouselHome />
                <CarouselProducts products={this.props.productsReducer.productList}/>
                <Footer />
            </div>    
        )
    }
} 

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, productsActions)(Home)