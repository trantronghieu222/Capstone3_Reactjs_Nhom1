import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserReducer"
import cartReducer from "./reducers/CartReducer";
import UserReducer from "./reducers/UserReducer";
import orderReducer from "./reducers/OrderReducer";
export const store = configureStore({
    reducer : {
        cartReducer,
        UserReducer,
        orderReducer,
    }
})