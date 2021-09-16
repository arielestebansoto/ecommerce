import React from 'react'

import '../assets/styles/components/CarouselProducts.scss'

import CardProduct from './CardProduct';

class CarouselProducts extends React.Component {
    carouselConfig = () => {
        const element = document.querySelector('.CarouselProducts');
        const instances = M.Carousel.init(element, {
            dist: 0,
            shift: 20,
            noWrap: false,
        } );
        const carouselInstance = M.Carousel.getInstance(element)
        element.removeEventListener('click', carouselInstance._handleCarouselClickBound)
    }
    componentDidMount(){
        this.carouselConfig()
    }
    renderProductList = () => {
        return this.props.products.map( 
            card => <CardProduct {...card} key={card.id}/>
            )
        }
        render() {
        return (
            <div className="row">
                <div className="carousel CarouselProducts">
                    { this.renderProductList() }
                </div>  
            </div>
        )
    }
}


export default CarouselProducts