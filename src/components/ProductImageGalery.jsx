import React from 'react'
import { useEffect, useState } from 'react';

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
    
    element.removeEventListener('click', element.M_Carousel._handleCarouselClickBound)
  }
  
  useEffect( () => {
    const element = document.querySelector('.ProductImageGalery');
    window.addEventListener('resize', carouselConfig)
    carouselConfig()
    
    return () => {
      const options = { treshold: 1 }
      const observer = new IntersectionObserver(callback, options)
      observer.observe(element)
  
      function callback(entries, observer ) {
        entries.forEach( entry => {
          if (!entry.isIntersecting) {
            window.removeEventListener('resize', carouselConfig)
            element.M_Carousel.destroy()
          } 
        })
      }
    }
  }, [])

  return (
    <div className="carousel carousel-slider ProductImageGalery z-depth-2">
      {
        [1, 2, 3, 4, 5].map( (image, index) => <a className="carousel-item " key={index} href="#one!"><img src={props.image} /></a> )
      }
    </div>
  )
}
export default ProductImageGalery