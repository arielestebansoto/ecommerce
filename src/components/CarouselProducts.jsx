import React from 'react'

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.js";

import '../assets/styles/components/CarouselProducts.scss'

const CarouselProducts = (props) => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.CarouselProducts');
        var instances = M.Carousel.init(elems, {
        } );
      });
    return (
        <div className="carousel CarouselProducts carousel-slider blue ligthen-1">
            <div className="row">
                <div className="col s12">
                    <ul>
                        {props.children}
                    </ul>
                </div>
            </div>
        </div>    
    )
}
export default CarouselProducts