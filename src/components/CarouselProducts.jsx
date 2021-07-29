import React from 'react'

import '../assets/styles/components/CarouselProducts.scss'

const CarouselProducts = (props) => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.CarouselProducts');
        var instances = M.Carousel.init(elems, {
            dist: 0,
            shift: 20,
            indicators: true,
            noWrap: true,
        } );
      });
    return (
        <div className="container">
            <div className="carousel CarouselProducts z-depth-2">
                {props.children}
            </div>    
        </div>
    )
}
export default CarouselProducts