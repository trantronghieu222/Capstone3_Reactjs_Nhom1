import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductReducer";
export const store = configureStore({
    reducer: {
        productReducer,
    }
})