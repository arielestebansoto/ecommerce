import React from 'react'

import { HeaderParcial } from '../../components/HeaderParcial'

export const About = () => {
    return (
        <> 
        <HeaderParcial />
        <div className="container-fluid">
            <div className="row">
                <div className="NotUserRegister col 
                    s10 offset-s1
                    m8 offset-m2
                    l6 offset-l3
                    z-depth-2 white"
                >
                    <h5>About this web</h5>
                    <p>I don't know why but I like to build ecomerces. The main reference is <a href="https://mercadolibre.com.ar/" targe="_blank">Mercado Libre</a> (I borrowed some images from it) and Material Design.</p>
                    <p>It is in constant development, I am adding improvements when I learn something new. And needs some adjustments but I think the user flow is quite complete.</p>
                    <p>For now I use the API <a href="https://fakestoreapi.com/" targe="_blank">fakestoreapi.com</a>, but sometimes it's slow. planeo hacer el backend with nodejs.</p>
                    <p>Technologies I used: React, react-router, redux. For styles I used Materialize and scss. For the compilation I used Webpack and babel for transpilation.</p>
                    <p>We can get in touch at <a href="https://arielestebansoto.com" target="_blank">arielestebansoto.com</a>. Cheers!</p>
                </div>
            </div>
        </div>
    </>
    )
}