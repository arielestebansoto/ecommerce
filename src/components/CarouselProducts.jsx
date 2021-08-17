import React from 'react'
import { connect } from 'react-redux';
import * as productsActions  from '../actions/productsActions'

import '../assets/styles/components/CarouselProducts.scss'

class CarouselProducts extends React.Component {

    carouselConfig = () => {
        const elems = document.querySelectorAll('.CarouselProducts');
        const instances = M.Carousel.init(elems, {
            dist: 0,
            shift: 20,
            indicators: true,
            noWrap: true,
        } );
    }
    async componentDidMount() {
        this.carouselConfig()
        this.props.getProductsLimit()
    }
    render() {
        return (
            <div className="container">
                <div className="carousel CarouselProducts z-depth-2">
                    {this.props.children}
                </div>    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.productsReducer
    }
}

export default connect(mapStateToProps, productsActions)(CarouselProducts)