import { 
    ADD_PAYMENT_OPTION, 
    ADD_PRODUCT_TO_CART, 
    ADD_SHIPPING_OPTION, 
    PAYMENT_COMPLETED, 
    REMOVE_PRODUCT_FROM_CART
} from "../actionsTypes"

const INITIAL_STATE = {
    cart: [],
    loading: false,
    error: '',
    paymentOption: '',
    shippingOption: '',
    purchaseCompleted: false,
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
        case REMOVE_PRODUCT_FROM_CART:
            return {
                ...state,
                cart: action.payload
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
                purchaseCompleted: action.payload,
                cart: INITIAL_STATE.cart
            }
        default: return state
    }
}

export default shoppingCartReducer