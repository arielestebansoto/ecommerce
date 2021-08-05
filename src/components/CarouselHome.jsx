import React from 'react'

import '../assets/styles/components/CarouselHome.scss'

import carousel1 from '../assets/pictures/img/carouselhome/carousel-1.png'
import carousel2 from '../assets/pictures/img/carouselhome/carousel-2.png'
import carousel3 from '../assets/pictures/img/carouselhome/carousel-3.png'
import carousel4 from '../assets/pictures/img/carouselhome/carousel-4.png'
import carousel5 from '../assets/pictures/img/carouselhome/carousel-5.png'

class CarouselHome extends React.Component {
    constructor() {
        super()
        this.state = {
            load: false,
        }
        this.carouselInit = this.carouselInit.bind(this)
    }
    componentDidMount() {
        console.log('mount')
        this.carouselInit()
        this.setState({
                load: true
        }, 
        this.carouselInit()
        )
    }
    componentWillUnmount() {
        console.log('unmount')
    }
    carouselInit() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.CarouselHome');
            var instances = M.Carousel.init(elems, {
                fullWidth: true,
                indicators: true,
            });
            });
    }

    render() {
        if (this.state.load === false) {
            return <h1>Loading...</h1>
        }
        if (this.state.load === true){
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
}
export default CarouselHome