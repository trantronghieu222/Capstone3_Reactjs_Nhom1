import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    order: [{
        
    }]
}

const OrderReducer = createSlice({
  name: 'orderReducer',
  initialState,
  reducers: {}
});

export const {} = OrderReducer.actions

export default OrderReducer.reducer