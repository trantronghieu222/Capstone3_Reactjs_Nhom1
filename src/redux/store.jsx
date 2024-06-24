import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserReducer"
import cartReducer from "./reducers/CartReducer";
import productReducer from "./reducers/ProductReducer";
export const store = configureStore({
    reducer : {
        cartReducer,
        productReducer,
        userReducer
    }
})