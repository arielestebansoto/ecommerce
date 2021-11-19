import React from 'react'

import '../assets/styles/components/CarouselHome.scss'
import { CarouselItemHome } from './CarouselItemHome';

export const CarouselHome = ({ carouselOferts }) => {

    const carouselInit = () => {
        const element = document.querySelector('.CarouselHome');
        const instances = M.Carousel.init(element, {
            dist: 0,
            indicators: true,
        });
    }

    React.useEffect( () => {
        carouselInit() 
    }, [])

    return (
        <div className="carousel CarouselHome carousel-slider">
            { 
               carouselOferts.map(
                   (item, index) => <CarouselItemHome key={index}/>
                )
            }
        </div>
    )
}
