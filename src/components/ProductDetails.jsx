import React from 'react'

import '../assets/styles/components/ProductDetails.scss'

const ProductDetails = (props) => {

    return (
        <div className="row z-depth-2 ProductDetails">
            <div className="divider"></div>
            <h5>Characteristics</h5>
            <p>{ props.description }</p>
        </div>
    )
}

export default ProductDetails