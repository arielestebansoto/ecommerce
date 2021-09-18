import React from 'react'
import { useEffect } from 'react';

import '../assets/styles/components/ProductImageGalery.scss'

const ProductImageGalery = (props) => {
  const carouselConfig = () => {
    const element = document.querySelector('.ProductImageGalery');
    const instances = M.Carousel.init(element, {
      dist: 0,
      shift: 10,
      indicators: true,
      noWrap: true,
    });
    const carouselInstance = M.Carousel.getInstance(element)
    element.removeEventListener('click', carouselInstance._handleCarouselClickBound)
  }
  useEffect( () => carouselConfig(), [])
  window.addEventListener('resize', carouselConfig)

    return (
        <div className="col s12 m8 ">
          <div className="carousel carousel-slider ProductImageGalery z-depth-2">
            <a className="carousel-item " href="#one!"><img src={props.image} /></a>
            <a className="carousel-item " href="#one!"><img src={props.image} /></a>
            <a className="carousel-item " href="#one!"><img src={props.image} /></a>
            <a className="carousel-item " href="#one!"><img src={props.image} /></a>
            <a className="carousel-item " href="#one!"><img src={props.image} /></a>
          </div>
        </div>
  )
}
export default ProductImageGalery