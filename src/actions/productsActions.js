import { GET_PRODUCTS_LIMIT, GET_PRODUCT, ERROR, LOADING } from '../actionsTypes'
const API = 'https://fakestoreapi.com/products'

export const getProductsLimit = () => async (dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const response = await fetch(`${API}?limit=5`)
        const data = await response.json()
        dispatch({
            type: GET_PRODUCTS_LIMIT,
            payload: data
        })
    }  catch (error) {
        console.error(error.message)
        dispatch({
            type: ERROR
        })
    }
}

export const getProduct = (product_id, product_list) => async (dispatch) => {
    if (!product_list.length) {
        dispatch({
            type: LOADING
        })
        try {
            const response = await fetch(`${API}/${product_id}`)
            const data = await response.json()
            dispatch({
                type: GET_PRODUCT,
                payload: data   
            })
        } catch (error) {
            console.error(error.message)
            dispatch({
                type: ERROR
            })
        }
    } else {
        let product = null
        product_list.forEach( product_item => {
            if (product_item.id == product_id) {
                return product = product_item
            }
        })
        dispatch({
            type: GET_PRODUCT,
            payload: product   
        })
    }
}