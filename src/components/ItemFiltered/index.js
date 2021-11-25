import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

export const ItemFiltered = withRouter( ({ filteredProducts }) => {
    const renderFilteredSearch = (filteredProducts) => 
        filteredProducts.map( (product, index)  => 
            <Link to={`/products/${product.category}/${product.id}/`} key={index} >
                <li 
                    className="white black-text" 
                    style={{
                        display: "inline-block", 
                        width: "100%",
                        padding: "8px"
                    }}>
                    {product.title}

                </li>
            </Link> 
            )
    
    return (
        <div className="z-depth-2 white" style={{    
            position: "absolute",
            zIndex: "100",
            left: "0"}}>

            <ul className="FilteredListOfProducts">
                { renderFilteredSearch(filteredProducts) }
            </ul>

        </div>
    )
})
