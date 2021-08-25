import { 
    ADD_PAYMENT_OPTION, 
    ADD_PRODUCT_TO_CART, 
    ADD_SHIPPING_OPTION, 
    PAYMENT_COMPLETED 
} from "../actionsTypes"

const INITIAL_STATE = {
    cart: [],
    loading: false,
    error: '',
    paymentOption: '',
    shippingOption: '',
    completed: false,
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
        case ADD_SHIPPING_OPTION:
            return {
                ...state,
                shippingOption: action.payload
            }
        case ADD_PAYMENT_OPTION:
            return {
                ...state,
                paymentOption: action.payload
            }
        case PAYMENT_COMPLETED:
            return {
                ...state,
                completed: action.payload
            }
        default: return state
    }
}

export default shoppingCartReducer