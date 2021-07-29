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
        <div className="container">
            <div className="carousel CarouselProducts z-depth-2">
                {props.children}
            </div>    
        </div>
    )
}
export default CarouselProducts