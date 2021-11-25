import React, { useEffect} from 'react'

import './style.scss'

import { CardProduct } from '../CardProduct';

export const CarouselProducts = (props) => {
    const carouselConfig = () => {
        const element = document.querySelector('.CarouselProducts');
        const instances = M.Carousel.init(element, {
            dist: 0,
            shift: 20,
            noWrap: false,
        } );
        const carouselInstance = M.Carousel.getInstance(element)
        element.removeEventListener('click', carouselInstance._handleCarouselClickBound)
    }

    useEffect( () => carouselConfig(), [])
        window.addEventListener('resize', function () {
            carouselConfig()
    })
        
    const renderProductList = () => {
        return props.products.map( 
            card => <CardProduct {...card} key={card.id}/>
            )
        }

    return (
        <div className="row">
            <div className="carousel CarouselProducts">
                { renderProductList() }
            </div>  
        </div>
    )
}

