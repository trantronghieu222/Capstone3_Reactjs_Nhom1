import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    arrProd: [
        {
            id: 1,
            name: "vans black",
            alias: "vans-black-black",
            price: 200,
            description: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
            size: "[32,33,34,35]",
            shortDescription: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            quantity: 100,
            deleted: false,
            categories: "[{\"id\": \"VANS_CONVERSE\",\"category\":\"VANS_CONVERSE\"}]",
            relatedProducts: "[2,3,1]",
            feature: true,
            image: "https://shop.cyberlearn.vn/images/vans-black-black.png",
        }
    ],
}

const ProductReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getProductApi: (state, action) => {
            state.arrProd = action.payload;
        },
    }
});

export const { getProductApi, addToCart } = ProductReducer.actions

export default ProductReducer.reducer

// ------------------------ Action thunk ------------------------ //
export const getAllProductApi = () => {
    return async (dispatch, getState) => {
        try {
            const result = await axios({
                url: 'https://shop.cyberlearn.vn/api/Product',
                method: 'GET'
            });
            const action = getProductApi(result.data.content);
            dispatch(action);
        }
        catch {
            console.log(error);
        }
    }
}