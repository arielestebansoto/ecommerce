import { GET_PRODUCTS_LIMIT } from "../actionsTypes"

const INITIAL_STATE = {
    products : [],
}

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS_LIMIT:
            return {
                ...state,
                products: action.payload
            }
        default: 
            return state
    }
}
export default productsReducer