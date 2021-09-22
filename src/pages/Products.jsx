import React from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'
import ItemSearched from '../components/ItemSearched'

const Products = (props) => {
    const category = props.match.params.category
    
    const renderSearchedProducts = () => 
        props.productList.map((product, index) => {
            if (product.category === category) {
                console.log(product)
                return <ItemSearched key={index} product={product}/>
            } else {
                return false
            }
        })

    
    return (
        <>
            <Header />
            <ul>
                { renderSearchedProducts() }
            </ul>
        </>
    )
}
const mapStateToProps = ({ productsReducer}) => {
    return productsReducer
}
export default connect(mapStateToProps)(Products)