import React from 'react'

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