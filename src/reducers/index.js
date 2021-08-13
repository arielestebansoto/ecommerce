import { combineReducers } from "redux";
import userReducer from './userReducer'
import shoppingCartReducer from "./shoppingCartReducer";

const reducer = combineReducers({
    userReducer,
    shoppingCartReducer
})  

export default reducer