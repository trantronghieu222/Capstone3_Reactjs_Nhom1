import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductReducer";
import cartReducer from "./reducers/CartReducer";
export const store = configureStore({
    reducer: {
        productReducer,
        cartReducer,
    }
})