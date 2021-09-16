import React from 'react'

import '../assets/styles/components/CarouselHome.scss'
import { CarouselItemHome } from './CarouselItemHome';

class CarouselHome extends React.Component {
    componentDidMount() {   
        const elems = document.querySelectorAll('.CarouselHome');
        const instances = M.Carousel.init(elems, {
            dist: 0,
            indicators: true,
        });
    }
    render() {
        return (
            // <div className="row">
                <div className="carousel CarouselHome carousel-slider">
                    { [1, 2, 3, 4, 5].map((item, index) => <CarouselItemHome key={index}/>)}
                </div>
            // </div>
        )
    } 
}
export default CarouselHome