import React from 'react'

import '../assets/styles/components/CarouselHome.scss'

import carousel1 from '../assets/pictures/img/carouselhome/carousel-1.png'
import carousel2 from '../assets/pictures/img/carouselhome/carousel-2.png'
import carousel3 from '../assets/pictures/img/carouselhome/carousel-3.png'
import carousel4 from '../assets/pictures/img/carouselhome/carousel-4.png'
import carousel5 from '../assets/pictures/img/carouselhome/carousel-5.png'

class CarouselHome extends React.Component {
    componentDidMount() {   
        const elems = document.querySelectorAll('.CarouselHome');
        const instances = M.Carousel.init(elems, {
            fullWidth: true,
            indicators: true,
        });
    }
    render() {
        return (
            <div className="carousel CarouselHome carousel-slider">
                <a className="carousel-item Carousel-item " href="#1"><img src={carousel1} /></a>
                <a className="carousel-item Carousel-item" href="#2"><img src={carousel2} /></a>
                <a className="carousel-item Carousel-item" href="#3"><img src={carousel3} /></a>
                <a className="carousel-item Carousel-item" href="#4"><img src={carousel4} /></a>
                <a className="carousel-item Carousel-item" href="#5"><img src={carousel5} /></a>
                <a className="carousel-item Carousel-item" href="#6"><img src={carousel3} /></a>
            </div>
        )
    } 
}
export default CarouselHome