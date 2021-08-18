import React from 'react'
import { connect } from 'react-redux';
import * as productsActions  from '../actions/productsActions'

import '../assets/styles/components/CarouselProducts.scss'

import CardProduct from './CardProduct';

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
    componentDidMount() {
        this.props.getProductsLimit()
    }
    render() {
        console.log(this.props)
        return (
/*             <div className="container">
                <div className="carousel CarouselProducts  z-depth-2">
                </div> 
            </div> */
            <div className="container">
                <h3>Aca tiene que ir algo!!!!</h3>
                { 
                    this.props.productsReducer.map( card => 
                        <CardProduct {...card} key={card.id}/>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps =  state  => {
    return state
}

export default connect(mapStateToProps, productsActions)(CarouselProducts)