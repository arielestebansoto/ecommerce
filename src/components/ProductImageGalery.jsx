import React from 'react'
import { useEffect } from 'react';

import '../assets/styles/components/ProductImageGalery.scss'

const ProductImageGalery = (props) => {
  useEffect( () => {
    const elems = document.querySelectorAll('.ProductImageGalery');
    const instances = M.Carousel.init(elems, {
      dist: 0,
      shift: 10,
      indicators: true,
      noWrap: true,
    });
  })
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