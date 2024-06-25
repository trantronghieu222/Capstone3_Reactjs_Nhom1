import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/ProductReducer";
import cartReducer from "./reducers/CartReducer";
import UserReducer from "./reducers/UserReducer";
import orderReducer from "./reducers/OrderReducer";
export const store = configureStore({
    reducer: {
        productReducer,
        cartReducer,
        UserReducer,
        orderReducer,
    }
})