import { 
    ADD_PRODUCT_TO_CART, 
    ADD_SHIPPING_OPTION,
    ADD_PAYMENT_OPTION,
    PAYMENT_COMPLETED,
    REMOVE_PRODUCT_FROM_CART
} from "../actionsTypes"

export const addProductToCart = (product) => (dispatch) => {
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product
    })
}
export const addShippingOption = (option) => (dispatch) => {
    dispatch({
        type: ADD_SHIPPING_OPTION,
        payload: option.type
    })
}
export const addPaymentOption = (option) => (dispatch) => {
    dispatch({
        type: ADD_PAYMENT_OPTION,
        payload: option.type
    })
}
export const paymentCompleted = () => (dispatch) => {
    dispatch({
        type: PAYMENT_COMPLETED,
        payload: true,
    })
}
export const removeProductFromCart = (product, cart) => (dispatch) => {
    const new_cart = []
    cart.forEach( element => {
        if(!(element.id === product.id)) {
            new_cart.push(element)
        } 
    })
    dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        payload: new_cart
    })
}