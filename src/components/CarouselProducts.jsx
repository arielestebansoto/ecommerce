import React from 'react'

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.js";

/* import '../assets/styles/components/CarouselProducts.scss' */

const CarouselProducts = (props) => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.CarouselProducts');
        var instances = M.Carousel.init(elems, {
         noWrap: true,
         indicators: true,
        } );
      });
    return (
        <div className="carousel CarouselProducts blue lighten-2">
             {props.children}
        </div>    
    )
}
export default CarouselProducts