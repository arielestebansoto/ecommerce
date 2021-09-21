import React, { useState } from 'react'
import { connect } from 'react-redux'
import ItemFiltered from './ItemFiltered'

const SearchBar = (props) => {
    const [filteredProducts, setFilteredProducts ] = useState([])

    const filteredSearch = (value) => props.productList.filter( product => product.title.toLowerCase().includes(value))
        
    const handleChange = (e) => {
        let value = e.target.value
        if (value.length == 0) {
            value = null
        }
        console.log(value)
        setFilteredProducts(filteredSearch(value))
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search Product"
                onChange={handleChange}
                className="white-text"
            />
            <ItemFiltered filteredProducts={filteredProducts}/>
        </div>
    )
}
const mapStateToProps = ({ productsReducer }) => {
    return productsReducer
}
export default connect(mapStateToProps)(SearchBar)