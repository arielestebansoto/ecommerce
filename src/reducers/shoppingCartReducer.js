import { ADD_PRODUCT_TO_CART } from "../actionsTypes"

const INITIAL_STATE = {
    cart: []
}

const shoppingCartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART :
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        default: return state
    }
}

export default shoppingCartReducer