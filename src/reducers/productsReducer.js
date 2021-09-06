import { GET_PRODUCTS_LIMIT, GET_PRODUCT, ERROR, LOADING } from "../actionsTypes"

const INITIAL_STATE = {
    productList : [],
    product: {},
    loading: false,
    error: null
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ERROR:
            return {
                ...state,
                error: true,
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCTS_LIMIT:
            return {
                ...state,
                productList: action.payload,
                loading: false
            }
        case GET_PRODUCT:
            return {
                ...state,
                loading: false,
                product: {...action.payload}
            }
            default: 
            return state
        }
    }
    export default productsReducer