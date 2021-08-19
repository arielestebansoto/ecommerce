import { GET_PRODUCTS_LIMIT, GET_PRODUCT } from "../actionsTypes"

const INITIAL_STATE = {
    productList : [],
    product: {},
    loading: false,
    error: null
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS_LIMIT:
            return {
                ...state,
                productList: action.payload
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: {...action.payload}
            }
        default: 
            return state
    }
}
export default productsReducer