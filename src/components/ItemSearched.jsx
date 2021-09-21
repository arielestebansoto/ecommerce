import React from 'react'

const ItemSearched = (props) => {
    console.log(props)
    return (
        <li>{props.product.title}</li>
    )
}
export default ItemSearched