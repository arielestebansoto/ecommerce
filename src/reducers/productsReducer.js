import { GET_PRODUCTS_LIMIT } from "../actionsTypes"

const INITIAL_STATE = []

const productsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_PRODUCTS_LIMIT:
            return {
                state: action.payload
            }
        default: 
            return state
    }
}
export default productsReducer