import React from 'react'

const CarouselProduct = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.CarouselProduct');
        var instances = M.Carousel.init(elems, {
            indicators: true,
        });
      });
    return (
        < div className="carousel carousel-slider CarouselProduct">
      </div>
)
}
export default CarouselProduct