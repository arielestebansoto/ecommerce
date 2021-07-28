import React from 'react'

import '../assets/styles/components/CarouselHome.scss'

import carousel1 from '../assets/pictures/img/carouselhome/carousel-1.png'
import carousel2 from '../assets/pictures/img/carouselhome/carousel-2.png'
import carousel3 from '../assets/pictures/img/carouselhome/carousel-3.png'
import carousel4 from '../assets/pictures/img/carouselhome/carousel-4.png'
import carousel5 from '../assets/pictures/img/carouselhome/carousel-5.png'

const CarouselHome = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.CarouselHome');
        var instances = M.Carousel.init(elems, {
            fullWidth: true,
            indicators: true,
        });
      });

    return (
    <div className="carousel CarouselHome carousel-slider">
        <a className="carousel-item Carousel-item " href="#one!"><img src={carousel1} /></a>
        <a className="carousel-item Carousel-item" href="#two!"><img src={carousel2} /></a>
        <a className="carousel-item Carousel-item" href="#three!"><img src={carousel3} /></a>
        <a className="carousel-item Carousel-item" href="#four!"><img src={carousel4} /></a>
        <a className="carousel-item Carousel-item" href="#five!"><img src={carousel5} /></a>
    </div>
            
    )
}
export default CarouselHome