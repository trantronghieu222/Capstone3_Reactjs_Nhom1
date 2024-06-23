import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arrUser: [
    {
      "id": 0,
      "email": "string",
      "password": "string",
      "name": "string",
      "gender": true,
      "phone": "string"
    }
  ]
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    settArrUserAction: (state, action) => {
      return {
        ...state,
        arrUser: action.payload
      }
    }
  }
});

export const { settArrUserAction } = userReducer.actions

export default UserReducer.reducer