import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

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

const UserReducer = createSlice({
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

export const {settArrUserAction} = UserReducer.actions

export default UserReducer.reducer


//ActionAsync
export const getAllUserActionAsync = (keywork = '') => {
  async (dispatch) => {
    const res = await axios.get ('https://apistore.cybersoft.edu.vn/api/Users/getAll')
  
    const action = settArrUserAction(res.data.content)
    dispatch(action)
  
  }
} 


export const signupActionAsync = (usRegis) => {

  return async (dispatch) => {
    const res = await axios.post('https://apistore.cybersoft.edu.vn/api/Users/signup',usRegis)
    console.log(res.data.content);
  }
}
