import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/ItemSearched.scss'

const ItemSearched = (props) => {
    console.log(props)
    return (
        <Link to={`/product/${props.product.id}`} className="text-black" >
            <li>
                <h6>{props.product.title}</h6>
                <div className="CardShoppingCart">
                    <div className="Item CardShoppingCart_item">
                        <img src={ props.product.image }/>
                        <div className="CardContent">
                            <h6>{ props.product.title }</h6>
                            <div className="CardDetails">
                                <span><b>$ { props.product.price }</b></span>
                            </div>
                        </div>
                    </div>
                </div>  
            </li>
            <div className="divider"></div>
        </Link>
    )
}
export default ItemSearched