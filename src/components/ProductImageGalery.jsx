import React from 'react'

import '../assets/styles/components/ProductImageGalery.scss'

const ProductImageGalery = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.ProductImageGalery');
        var instances = M.Carousel.init(elems, {
          dist: 0,
          shift: 10,
          indicators: true,
          noWrap: true,
        });
      });
    return (
      <div className="row z-depth-2">
        <div className="carousel carousel-slider ProductImageGalery">
          <a className="carousel-item " href="#one!"><img src="https://lorempixel.com/250/250/nature/1" /></a>
          <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" /></a>
          <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" /></a>
          <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4" /></a>
          <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5" /></a>
      </div>
      </div>
)
}
export default ProductImageGalery