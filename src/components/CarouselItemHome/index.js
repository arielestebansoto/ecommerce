import React from 'react'

export const CarouselItemHome = ({ src, srcLarge }) => {
    return (
        <a className="carousel-item Carousel-item" >
            <picture>
                <source srcSet={srcLarge} media="(min-width: 600px)"/>
                <img src={src} alt="oferts" />
            </picture>
        </a>
    )
}
