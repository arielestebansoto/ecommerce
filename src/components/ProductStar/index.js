import React from 'react'

export const ProductStar = ({ rate }) => {
    return (
    <div className="row">
        {
            [1, 2, 3, 4, 5].map( (element, index) => {
                if(rate >= index) {
                    return <i key={index} className="material-icons yellow-text">star</i>
                } else  {
                    return <i key={index} className="material-icons grey-text">star_border</i>
                }
            })
        }
    </div>
    )
}
