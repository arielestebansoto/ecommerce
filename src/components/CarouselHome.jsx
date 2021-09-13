import React from 'react'

import '../assets/styles/components/CarouselHome.scss'

const dummyImage = 'https://dummyimage.com/320x180/2196F3/fff.jpg'

class CarouselHome extends React.Component {
    componentDidMount() {   
        const elems = document.querySelectorAll('.CarouselHome');
        const instances = M.Carousel.init(elems, {
            indicators: true,
        });
    }
    render() {
        return (
            <div className="row">
                <div className="carousel CarouselHome carousel-slider">
                    <a className="carousel-item Carousel-item" href="#1"><img src={dummyImage} /></a>
                    <a className="carousel-item Carousel-item" href="#2"><img src={dummyImage} /></a>
                    <a className="carousel-item Carousel-item" href="#3"><img src={dummyImage} /></a>
                    <a className="carousel-item Carousel-item" href="#4"><img src={dummyImage} /></a>
                    <a className="carousel-item Carousel-item" href="#5"><img src={dummyImage} /></a>
                    <a className="carousel-item Carousel-item" href="#6"><img src={dummyImage} /></a>
                </div>
            </div>
        )
    } 
}
export default CarouselHome