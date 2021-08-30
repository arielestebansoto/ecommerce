import { GET_PRODUCTS_LIMIT, GET_PRODUCT, ERROR, LOADING } from "../actionsTypes"

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
                loading: false,
                product: {...action.payload}
            }
            case ERROR:
                return {
                    ...state,
                    error: true
                }
            case LOADING:
                return {
                    ...state,
                    loading: true
                }
            default: 
            return state
        }
    }
    export default productsReducer