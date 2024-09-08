import { combineReducers } from "redux";
import { productReducer } from "./productReducers";
import { authReducer } from "./authReducers";


export const rootReducer = combineReducers({
    prodReducer: productReducer,
    authReducer: authReducer
})