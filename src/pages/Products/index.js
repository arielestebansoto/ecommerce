import React from 'react'
import { connect } from 'react-redux'

import { Header } from '../../components/Header'
import { ItemSearched } from '../../components/ItemSearched'

const mapStateToProps = ({ productsReducer}) => {
    return productsReducer
}

export const Products = connect(mapStateToProps)( (props) => {
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
            <div className="container">
                <div className="row">
                    <div className="col s12 m10 offset-m1 l8 offset-l2">
                        <div className="z-depth-2" style={{marginTop: "16px", padding: "8px 16px"}}>
                            <ul>
                                { renderSearchedProducts() }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})
