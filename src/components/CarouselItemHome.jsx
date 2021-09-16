import React from 'react'

const dummyImage_320 = 'https://dummyimage.com/320x200/2196F3/fff.jpg'
const dummyImage_992 = 'https://dummyimage.com/992x300/ff0000/fff.jpg'

export const CarouselItemHome = () => {
    return (
        <a className="carousel-item Carousel-item" >
            <picture>
                <source srcSet={`${dummyImage_992}`} media="(min-width: 992px)"/>
                <source srcSet={`${dummyImage_320}`} media="(min-width: 0px"/>
                <img src={`${dummyImage_320}`} alt="oferts" />
            </picture>
        </a>
    )
}
