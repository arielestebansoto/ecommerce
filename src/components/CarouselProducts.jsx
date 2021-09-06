import React from 'react'
import { connect } from 'react-redux';
import * as productsActions  from '../actions/productsActions'

import '../assets/styles/components/CarouselProducts.scss'

import CardProduct from './CardProduct';
import Loader from './global/Loader'

class CarouselProducts extends React.Component {
    carouselConfig = () => {
        const element = document.querySelector('.CarouselProducts');
        const instances = M.Carousel.init(element, {
            dist: 0,
            shift: 20,
            indicators: true,
            noWrap: false,
        } );
        const carouselInstance = M.Carousel.getInstance(element)
        element.removeEventListener('click', carouselInstance._handleCarouselClickBound)
    }
    componentDidMount() {
        this.props.getProductsLimit()
    }
    componentDidUpdate() {
        if(this.props.loading === false) {
            this.carouselConfig()
        }
    }
    renderProductList = () => {
        return this.props.productList.map( card => 
            <CardProduct {...card} key={card.id}/>
            )
         }
    render() {
        if (this.props.loading) {
            return <Loader />
        }
        return (
            <div className="container">
                <div className="carousel CarouselProducts  z-depth-2">
                    { this.renderProductList() }
                </div>  
            </div>
        )
    }
}

const mapStateToProps =  ({ productsReducer })  => {
    return productsReducer
}

export default connect(mapStateToProps, productsActions)(CarouselProducts)