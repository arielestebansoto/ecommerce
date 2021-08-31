import React from 'react'
import { connect } from 'react-redux'
import { removeProductFromCart } from '../actions/shoppingCartActions'

const CardShoppingCart = (props) => {
    const { product, cart } = props
    const handleClick = () => props.removeProductFromCart(product, cart) 
    return (
    <div className="row z-depth-2" style={{paddingBlockStart: "16px"}}>
        <div className="col s12 m7">
            <div className="Item" style={{display: "flex", marginBlockEnd: "24px"}}>
                <img src={ product.image }
                    style={{
                        blockSize: "60px",
                        inlineSize: "60px",
                    }}
                />
                <div className="CardContent" style={{
                    paddingInlineStart: "24px", 
                    inlineSize: "100%"
                    }}>
                    <h6 style={{marginBlockEnd: "16px"}}>{ product.title }</h6>
                    <div className="CardDetails" style={{
                        display: "flex", 
                        justifyContent: "space-between", 
                        alignItems: "center"
                        }}>

                        {/* <div style={{
                            border: "1px solid rgba(0,0,0, .3)",
                            borderRadius: "5px",
                            inlineSize: "30px",
                            blockSize: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>  
                        </div> */}
                            <span><b>$ { product.price }</b></span>
                        </div>
                    </div>
            </div>
            <div className="divider"></div>
            <div className="ItemAcions"style={{padding: "8px"}}>
                <button 
                    className="btn-flat blue-text darken-4"
                    onClick={handleClick}
                >
                    eliminar
                </button>
            </div>
        </div>
    </div>
    )
}
const mapStateToProps = ({shoppingCartReducer}) => {
    return { cart: shoppingCartReducer.cart }
}
const mapDispatchToProps = {
    removeProductFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(CardShoppingCart)