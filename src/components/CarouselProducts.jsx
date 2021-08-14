import React from 'react'
import { useEffect } from 'react';

import '../assets/styles/components/CarouselProducts.scss'

const CarouselProducts = (props) => {
    useEffect( () => {
        const elems = document.querySelectorAll('.CarouselProducts');
        const instances = M.Carousel.init(elems, {
            dist: 0,
            shift: 20,
            indicators: true,
            noWrap: true,
        } );
    })
    return (
        <div className="container">
            <div className="carousel CarouselProducts z-depth-2">
                {props.children}
            </div>    
        </div>
    )
}
export default CarouselProducts