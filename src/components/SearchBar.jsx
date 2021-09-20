import React, { useState } from 'react'
import { connect } from 'react-redux'

const SearchBar = (props) => {
    const [filteredProducts, setFilteredProducts ] = useState([])

    const filteredSearch = (value) => props.productList.filter( product => product.title.toLowerCase().includes(value))
        
    const handleChange = (e) => {
        const value = e.target.value
        setFilteredProducts(filteredSearch(value))
    }

    const renderFilteredSearch = () => {
        if (filteredProducts) {
            return filteredProducts.map( (product, index)  => <li key={index}>{product.title}</li> )
        } 
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search Product"
                onChange={handleChange}
            />
            <ul>
                { renderFilteredSearch() }
            </ul>
        </div>
    )
}
const mapStateToProps = ({ productsReducer }) => {
    return productsReducer
}
export default connect(mapStateToProps)(SearchBar)