import React from 'react'
import { connect } from 'react-redux'

import * as productsActions from '../actions/productsActions'

import Header from '../components/Header'
import { CarouselHome } from '../components/CarouselHome'
import CarouselProducts from '../components/CarouselProducts'
import Footer from '../components/Footer'
import Loader from '../components/global/Loader'

const mapStateToProps = (state) => {
    return state
}

export const Home = connect(mapStateToProps, productsActions)( (props) => {
    const carouselOferts = [1, 2, 3, 4]
    
    React.useEffect( () => {
        window.scroll(0, 0)
        if(!props.productsReducer.productList.length) {
            props.getProductsLimit()
        }

    }, [])
    
    return (
        <>
            <Header />
            { props.productsReducer.productList.length === 0 
                ? <Loader /> 
                : <>
                    <CarouselHome 
                        carouselOferts={carouselOferts}
                    />
                    <CarouselProducts products={props.productsReducer.productList}/>
                    <Footer />
                </>
            }
        </>    
    )
} )