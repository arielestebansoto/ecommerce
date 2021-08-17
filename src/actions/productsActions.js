import { GET_PRODUCTS_LIMIT } from '../actionsTypes'
const API = 'https://fakestoreapi.com/products'

export const getProductsLimit = () => async (dispatch) => {
    const response = await fetch(`${API}?limit=5`)
    const data = await response.json()
    dispatch({
        type: GET_PRODUCTS_LIMIT,
        payload: data
    })
}