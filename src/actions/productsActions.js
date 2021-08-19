import { GET_PRODUCTS_LIMIT, GET_PRODUCT } from '../actionsTypes'
const API = 'https://fakestoreapi.com/products'

export const getProductsLimit = () => async (dispatch) => {
    const response = await fetch(`${API}?limit=5`)
    const data = await response.json()
    dispatch({
        type: GET_PRODUCTS_LIMIT,
        payload: data
    })
}

export const getProduct = (product_id) => async (dispatch) => {
    const response = await fetch(`${API}/${product_id}`)
    const data = await response.json()
    dispatch({
        type: GET_PRODUCT,
        payload: data   
    })
}