import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/CartReducer";
import UserReducer from "./reducers/UserReducer";
import orderReducer from "./reducers/OrderReducer";
import productReducer from "./reducers/ProductReducer";
export const store = configureStore({
    reducer : {
        cartReducer,
        UserReducer,
        orderReducer,
        productReducer
    }
})