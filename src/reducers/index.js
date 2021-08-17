import { combineReducers } from "redux";
import userReducer from './userReducer'
import shoppingCartReducer from './shoppingCartReducer'
import productsReducer from './productsReducer'

const reducer = combineReducers({
    userReducer,
    shoppingCartReducer,
    productsReducer
})  

export default reducer