
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // cart: [
    // ],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const CartReducer = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        // Thêm sản phẩm vào giỏ hàng
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.cart.push(newItem);
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        // Thay đổi số lượng giỏ hàng
        changeQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const itemCart = state.cart.find((p) => p.id === id);
            if (itemCart) {
                itemCart.quantity += quantity
                if (itemCart.quantity === 0) {
                    itemCart.quantity = 1;
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        // Xoá sản phẩm
        delProdCart: (state, action) => {
            const index = state.cart.findIndex(p => p.id === action.payload);
            if (index != -1){
                state.cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
            // Cách 2
            // state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },
        // 
        updateItems: (state, action) => {
            state.cart = action.payload;
        },
        // clear cart
        clearCart: (state) => {
            state.cart = state.cart.filter(item => !item.selected);
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
    }
});

export const { addToCart, changeQuantity, delProdCart, updateItems, clearCart } = CartReducer.actions

export default CartReducer.reducer

/* ---------------------------------- */