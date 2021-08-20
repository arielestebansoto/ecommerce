import { ADD_PRODUCT_TO_CART } from "../actionsTypes"

export const addProductToCart = (product) => (dispatch) => {
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product
    })
}