import React, { useEffect } from 'react'

import '../assets/styles/components/CarouselHome.scss'
import { CarouselItemHome } from './CarouselItemHome';

const CarouselHome = () => {
    
    const carouselInit = () => {
        const elems = document.querySelectorAll('.CarouselHome');
        const instances = M.Carousel.init(elems, {
            dist: 0,
            indicators: true,
        });

    }
    useEffect( () => carouselInit() ,[])
    
    window.addEventListener('resize', function () {
        carouselInit()
    })
    return (
        // <div className="row">
            <div className="carousel CarouselHome carousel-slider">
                { [1, 2, 3, 4, 5].map((item, index) => <CarouselItemHome key={index}/>)}
            </div>
        // </div>
    )
}
export default CarouselHome